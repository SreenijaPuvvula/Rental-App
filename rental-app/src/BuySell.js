import { useNavigate } from "react-router-dom"
export default function BuySell(){
    const navigate = useNavigate();

    function goToBuy(){
       navigate("/asBuyer");
    }

    function goToSell(){
        navigate("/asSeller");
    }
    return(
        <div>
            <button onClick={goToBuy}>Buy</button>
            <button onClick={goToSell}>Sell</button>
        </div>
    )
}