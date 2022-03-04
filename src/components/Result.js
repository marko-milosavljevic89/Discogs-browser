import React from "react";
import './Display.css';
import noImage from './../images/result.svg'


const Result = ({url, setDetailsData, setDetailsURI, result, index, togglePop, setTogglePop}) => {



    return (
        <div onClick={()=>{setDetailsData({ img : result.cover_image, album: result.title, country : result.country, genre : result.genre, label: result.label, format: result.format, year: result.year }); setDetailsURI(url); setTogglePop(true);}} className="display-container">
            
            {result.cover_image === 'https://s.discogs.com/4726e9db847ee8da425ba328f66de2bdf46e5a13/images/spacer.gif' ?  <img className="album-thumb" src={noImage} alt={''}></img> :  <img className="album-thumb" src={result.cover_image}  alt={''}></img>}
                <div className="album-title">{result.title}</div>
                <h5 className="album-year">{result.year}</h5>               
            
        </div>
    )
}

export default Result