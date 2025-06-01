import s from "./FormFour.module.css"
import Button from "../../../Components/Button"
import { useContext, useEffect, useState } from "react"
import { signUpContext } from "../SignUp"
const FormFour = () => {
    const { indicated, subjects, handleSubjects } = useContext(signUpContext) 

    

   if(subjects != null) return (
        <div className={indicated == 3 ? s.formFour : s.hide}>
            <div className={s.wrapper}>
                <h4>What is your favorite subject?</h4>
                <div className={s.buttons}>
                    {subjects.map((par, i) => (
                        <Button key={par + i.toString()} func={()=>{handleSubjects(i)}} className={par.testClass == true ? s.IndicatedButt : s.notIndicatedButt} content={subjects[i].content}></Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FormFour