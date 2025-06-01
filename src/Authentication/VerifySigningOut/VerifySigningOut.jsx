import s from "./VerifySigningOut.module.css"
import Button from "../../Components/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase/Firebase"
const SigningOut = ({isSigningOut, setIsSigningOut, setLoading, setUser}) => {
    
    const handleSignOut = async () => { 
        setLoading(true)
        try {
            await signOut(auth)
            setUser(null)
            setLoading(false)
            setIsSigningOut(false)
        } catch (e) {
            setLoading(false)
            setIsSigningOut(false)
            console.log(e)
        }
    }

    if(isSigningOut) return  (
        <div className={isSigningOut ? s.Signing_Out_Wrapper : s.Hide_Signing_Out_Wrapper}>
            <div className={s.Signing_Out_Box}>
                <div className={s.Top}>
                    <i className='fa fa-user'></i>
                    <h3>Would You Like To Sign Out?</h3>
                </div>
                <div className={s.Options}>
                    <Button 
                            content={"No"}
                            func={()=>{setIsSigningOut(false)}}/>
                    <Button 
                            content={"Yes"}
                            func={()=>{handleSignOut()}} />
                </div>
            </div>
        </div>
    )
}

export default SigningOut