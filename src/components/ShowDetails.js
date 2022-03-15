import React from "react";
import { useEffect, useState } from "react";
import './ShowDetails.css'
import loading from './../images/loading.svg'
import noImage from './../images/result.svg'

const ShowDetails = ({togglePop, setTogglePop, detailsData, detailsURI = 'https://api.discogs.com/masters/63451'}) => {

    const [ detailsResource, setDetailsResource ] = useState(false)

    useEffect( () => {
        fetch(`${detailsURI}?` + new URLSearchParams(
            {
                

                key : "sSzDbdDWTFzedLzekuIJ",
                secret : "BCKwjJKWTTJXLSarrKALaGwjarsBOEfY"
  
            }
        ),
        {
            method: "GET",
            headers: {
            
            "Content-Type": "application/json",
  
            "User-Agent" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
  
            }
        }
        )
        .catch(err => console.error(err))
        .then(res => res.json())
        .then(z => setDetailsResource(z));
    }, []
    )

    return (
        <div className="flex-container">
               
            <div className="master-container">
                <div className="close-container">                    
                    <div className="details-container">
                        <div className="image-container">
                            <span className="spany">
                            {detailsData.img.includes('spacer.gif') ? <img className="album-image" src={noImage}  ></img> : <img className="album-image" src={detailsData.img} ></img>}
                                
                            </span>
                            
                        </div>
                        <div className="secondary-container">
                            <div className="h3-container">                          
                                <h2 className="album-name">{detailsData.album}</h2>
                                {detailsData.country ? <h4>Country: {detailsData.country}</h4> : ''}
                                {detailsData.genre ? <h4>Genre: {detailsData.genre.map((gen) => gen + ' / ')}</h4> : ' '} 
                                {detailsData.year ? <h4>Year: {detailsData.year}</h4> : ''}
                            </div>
                            <h4>Track List:</h4>
                            <div className="tracklist">
                            
                            {detailsResource.tracklist ? <p> {detailsResource.tracklist.map((detail) => detail.duration ? <div className="track">{detail.title + '.........' + detail.duration}</div> : <div className="track">{detail.title}</div> )}  </p> : <img className="loading-svg" src={loading}></img> }
                            </div>
                            <div className="information-container">
                            <div className="goto-button"><a className="goto-link" href={detailsResource.uri} target="_blank">Go to Discogs</a></div>
                            </div>
                            
                        </div>
                    </div>
                    <div onClick={()=>setTogglePop(false)} className="close-button" >X</div>
                </div>
            </div>
            <div className="details-overlay"></div>   
        </div>
    )
}

export default ShowDetails;