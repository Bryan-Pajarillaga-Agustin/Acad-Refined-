import s from "./Loading.module.css"

const Loading = ({loading}) => {
    if(loading) 
            return (
                <div className={s.Loading_Wrapper}>
                    <div className={s.Loading_Bar}>
                        
                    </div>
                    Loading...
                </div>
            )
}

export default Loading