import { useLocation } from "react-router-dom"
import "./Card.css"

export default function SellersPosts(){
    const location = useLocation();
    const data = location.state.data;
    {console.log(data)}
    
    function createCard(props,index){
        return(
            <div key={index} className="card">
                <div>
                <label className="labelName"><b>Property Type : </b></label>
                <label className="labelAnswer">{props.propertyType}</label>
                </div>
                <div>
                <label className="labelName"><b>Place : </b></label>
                <label className="labelAnswer">{props.place}</label>
                </div>
                <div>
                <label className="labelName"><b>Area : </b></label>
                <label className="labelAnswer">{props.area}</label>
                </div>
                <div>
                <label className="labelName"><b>Number of bedrooms : </b></label>
                <label className="labelAnswer">{props.bedrooms}</label>
                </div>
                <div>
                <label className="labelName"><b>Number of bathrooms : </b></label>
                <label className="labelAnswer">{props.bathrooms}</label>
                </div>
                <div>
                <label className="labelName"><b>Nearby Hospitals : </b></label>
                <label className="labelAnswer">{props.hospitals}</label>
                </div>
                <div>
                <label className="labelName"><b>Nearby Colleges : </b></label>
                <label className="labelAnswer">{props.colleges}</label>
                </div>
            </div>
        )
    }

    return(
        <div className="cardHolder">
           {data.map(createCard)}
        </div>
    )
}