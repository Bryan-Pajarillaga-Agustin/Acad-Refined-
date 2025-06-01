import { useContext } from "react"
import s from "./FormThree.module.css"
import { signUpContext } from "../SignUp"
const FormThree = () => {
    const { indicated, schoolInput, schoolWarning,
            grSecInput, grSecWarning,
            nickNameInput, nameWarning } = useContext(signUpContext)

    return (
        <div className={indicated == 2 ? s.formThree : s.hide}>
            <div className={s.username}>
                <h4>Name</h4>
                <input type="text" ref={nickNameInput}/>
                <span ref={nameWarning}></span>
            </div>
            <div className={s.password}>
                <h4>School</h4>
                <input type="text" ref={schoolInput}/>
                <span ref={schoolWarning}></span>
            </div>
            <div className={s.confirm}>
                <h4>Grade & Section</h4>
                <input type="text" ref={grSecInput}/>   
                <span ref={grSecWarning}></span>
            </div>
        </div>
    )
}

export default FormThree