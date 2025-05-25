import s from "../Components/Button.module.css"

const Button = ({className, content, func, submit, icon, change, element})=>{
    return <button className={`${className}`} onSubmit={(e)=>{submit(e)}} onClick={()=>{func()}}>{icon}{content}{element}</button>
}

export default Button