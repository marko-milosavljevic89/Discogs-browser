import React from "react";
import './Pagination.css'

const Pagination = ({seek, setSeek}) => {

    const pageFetch = (url) => {
        fetch(url,  {
            method: "GET",
            headers: {
            
            "Content-Type": "application/json",

            "User-Agent" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"

            }
        })    
        .catch(err => console.error(err))
        .then(res => res.json())
        .then(o => {o['apiURL'] = seek.apiURL; return o})
        .then(z => setSeek(z));
    }



    return (

    <div className="pagination-container">
        
        {seek.pagination.urls.first ? <div className="first" onClick={()=>{pageFetch(seek.pagination.urls.first)}}><h3 >First Page</h3></div> : <div className="first-disabled" ><h3 >First Page</h3></div>}
        
        {seek.pagination.urls.prev ? <div className="previous" onClick={()=>{pageFetch(seek.pagination.urls.prev)}}> <h3 >Previous</h3> </div> : <div className="previous-disabled" > <h3 >Previous</h3> </div>}

        <div className="current" onClick={()=>{console.log(seek.pagination.page)}}><h3 className="page-h3">{seek.pagination.page}</h3> </div>

        {seek.pagination.urls.next ? <div className="next" onClick={()=>{pageFetch(seek.pagination.urls.next)}}> <h3 >Next</h3> </div> : <div className="next-disabled" > <h3 >Next</h3> </div>}    

        {seek.pagination.urls.last ? <div className="last" onClick={()=>{pageFetch(seek.pagination.urls.last)}}><h3 >Last Page</h3></div> : <div className="last-disabled" ><h3 >Last Page</h3></div>}
    </div> 
    )
}

export default Pagination