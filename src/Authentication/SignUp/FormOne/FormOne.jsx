import s from "./FormOne.module.css"
import { signUpContext } from "../SignUp"
import { useContext } from "react"
const FormOne = () => {
    const { indicated, show,
            showConfirm, setShowConfirm,
            setShow, passwordInput, confirmPasswordInput,
            emailInput, passWarning,
            confirmWarning, emailWarning } = useContext(signUpContext)

    return (
        <div className={indicated == 0 ? s.formOne : s.hide}>
            <div className={s.email}>
                <h4>Email</h4>
                <input type="text" ref={emailInput}/> 
                <span ref={emailWarning}></span>
            </div>
            <div className={s.password}>
                <h4>Password</h4>
                <input type={show ? "text" : "password"} ref={passwordInput} />
                <img src={show ? "./password/visible.png" :
                                "./password/unsee.png"}
                    className={s.see_password} onClick={()=>{show ? setShow(false) : setShow(true)}}/>
                <span ref={passWarning}></span>
            </div>
            <div className={s.confirm}>
                <h4>Confirm Password</h4>
                <input type={showConfirm ? "text" : "password"} ref={confirmPasswordInput}/> 
                <img src={showConfirm ? "./password/visible.png" :
                                        "./password/unsee.png"}
                    className={s.see_confirm} onClick={()=>{showConfirm ? setShowConfirm(false) : setShowConfirm(true)}}/> 
                <span ref={confirmWarning}></span>
            </div> 
            
        </div>
    )
}

export default FormOne