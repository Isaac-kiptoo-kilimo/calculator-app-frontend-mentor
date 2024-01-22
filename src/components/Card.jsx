import Button from "./Button"
import './card.css'

const Card=()=>{
    return (
        <div className="card-content" >
           <div className="top-content">
           <div className="amount-card">
                <div className="amount-dscription">
                    <h4>Tip Amount</h4>
                    <p>/ Person</p>
                 </div>
                <div className="amount">
                    <h2>$ 4.27</h2>
                 </div>
            </div>
            <div className="total-card">
                <div className="total-dscription">
                    <h4>Tip Amount</h4>
                    <p>/ Person</p>
                 </div>
                <div className="total">
                    <h2>$ 32.79</h2>
                 </div>
            </div>
           </div>
            <Button btn="Reset"/>
      </div>
    )
}

export default Card