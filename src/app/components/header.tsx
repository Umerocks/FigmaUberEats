'use client'
import { useState } from "react"

  // to use onClick Event

type propsType = {
    profile: string
}


export default function Header(props: propsType){
    console.log(props)
    console.log(props.profile)

    //const [state, setState] = useState(0) // variable short hand state writing method... This is unchangeable data called Imuteablity

    return(
        <div>  
            {/* <button className="mt-4" onClick={()=> console.log("Click")}  > {props.profile} {State}</button> */}
        </div>
    )
}
