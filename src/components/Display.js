import React, { useEffect, useState } from "react";
import './Display.css'
import Result from "./Result";
import Loading from "./Loading";
import Error from "./Error";

const Display = ({setDetailsURI, setDetailsData, seek, togglePop, setTogglePop}) => {

    const [delay, setDelay] = useState(true)

    useEffect(
        () => {
            let int = setInterval(() => {
                setDelay(false)
            }, 2000)

            return () => {setDelay(true); clearInterval(int); }
        }, [seek]
    )

    let disp = []
    if (delay === true || seek === 'Default searches')    
        {
         for (let i = 0; i<50; i++) {
            disp.push(<Loading/>)
            }
        }

    else if (seek.results.length === 0) {
        disp.push(<Error/>)
        
    }
        
    else {
        console.log(seek)
        disp = seek.results.map( (result, index) => {
        return (
        <Result url = {result.resource_url} setDetailsURI={setDetailsURI} setDetailsData={setDetailsData} key={index} result = {result}  index = {index} togglePop={togglePop} setTogglePop={setTogglePop} />
                )
        })
    }    

    return (     
            <div className="display">
                {disp}
            </div>     
        )
}

export default Display;