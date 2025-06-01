import s from "./ContinueAs.module.css"
import Button from "../../Components/Button"
import { useEffect, useState } from "react"
import { db } from "../../Firebase/Firebase"
import { getDoc, doc } from "firebase/firestore"
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase/Firebase"
const ContinueAs = ({continueAs, setContinueAs, user, setUser, setLoading}) => {
    const [name, setName] = useState(null)

    const handleSignOut = async () => { 
            setLoading(true)
            try {
                await signOut(auth)
                setUser(null)
                setLoading(false)
                setContinueAs(false)
            } catch (e) {
                setLoading(false)
                setContinueAs(false)
                console.log(e)
            }
        }

    const getName = async () => {
       if(user?.uid != null){
        try{
            const docRef = doc(db, "Users", user?.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists) {
                setName(docSnap.data().perInfo)
            } 
        } catch (error) {console.log(error)}
       }
    }
 
    useEffect(()=>{
        if(user != null) {
            getName()
        }
    },[continueAs, user])

    if(continueAs) return  (
        <div className={s.Continue_As_Wrapper}>
            <div className={s.Continue_As_Box}>
                <div className={s.Top}>
                    <i className='fa fa-user'></i>
                    <h3>Continue As: </h3>
                    <h3>{name?.name} ?</h3>
                </div>
                <div className={s.Options}>
                    <Button 
                            content={"No"}
                            func={()=>{handleSignOut()}} />
                    <Button 
                            content={"Yes"}
                            func={()=>{setContinueAs(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default ContinueAs