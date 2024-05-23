import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Seller(){

    const navigate = useNavigate();

    const [details,setDetails] = useState({
        propertyTpe : "",
        place : "",
        area : "",
        bedrooms : 0,
        bathrooms : 0,
        hospitals : "",
        colleges : "",
        retrivedData : []
    })

    function seePosts(){
        axios.get("/getPosts")
        .then((responseFromServer) => {
                const receivedData = responseFromServer.data;
                setDetails(previousMsg => {
                    return {
                        propertyTpe : previousMsg.propertyTpe,
                        place : previousMsg.place,
                        area : previousMsg.area,
                        bedrooms : previousMsg.bedrooms,
                        bathrooms : previousMsg.bathrooms,
                        hospitals : previousMsg.hospitals,
                        colleges : previousMsg.colleges,
                        retrivedData: receivedData
                    }
                  })
                  navigate("/seePosts",{state : {data: receivedData}})
                  console.log("Data retrieved");
        })
        .catch(()=>{
            console.log("Error")
        })
        // navigate("/seePosts",{state : {data : details.retrivedData}})
    }

    function handleChange(event){
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setDetails(previousMsg => {
            return {
              ...previousMsg,
              [inputName]: inputValue
            }
        })
    }

    function postDetails(event){
       event.preventDefault();
       axios({
        url: "http://localhost:3000/insert",
        method: "POST",
        data: details
       })
       .then(()=>{
         console.log("Data submitted")
       })
       .catch(() => {
        console.log("Error in submition");
       })
    }

    return(
        <div>
            <form className="sellerForm" onSubmit={postDetails}>
                <div>
                  <h1>Enter the Property Details</h1>
                </div>
                <div>
                 <label for="propertyType">Property Type</label>
                 <br/>
                 <select name="propertyType" onChange={handleChange}>
                   <option value="resedential">Resedential</option>
                   <option value="commercial">Commercial</option>
                </select>
                </div>
                <div>
                 <label>Place</label>
                 <br/>
                 <input name="place" type="text" onChange={handleChange}/>
                </div>
                <div>
                 <label>Area in sqft</label>
                 <br/>
                 <input name="area" type="text" onChange={handleChange}/>
                </div>
                <div>
                 <label>Number of bedrooms</label>
                 <br/>
                 <input name="bedrooms" type="number" onChange={handleChange}/>
                </div>
                <div>
                 <label>Number of bathrooms</label>
                 <br/>
                 <input name="bathrooms" type="number" onChange={handleChange}/>
                </div>
                <div>
                 <label>Hospitals nearby</label>
                 <br/>
                 <input name="hospitals" type="text" onChange={handleChange}/>
                </div>
                <div>
                 <label>Colleges nearby</label>
                 <br/>
                 <input name="colleges" type="text" onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit" >Post details</button>
                </div>
            </form>
            <div>
                <button onClick={seePosts}>See Your Postings</button>
            </div>
        </div>
    )
}