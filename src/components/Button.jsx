import './button.css'

const Button=({ className, btn})=>{
    return (
        <button className={`btn ${className}`}>{btn}</button>
    )
}

export default Button;