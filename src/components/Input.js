import React, { useState } from "react";
import './Input.css'

const Input = ({seek, setSeek}) => {
    
    const [artist, setArtist] = useState('') 
    const [song, setSong] = useState('') 
    const search = (artist = '', song = '', type = 'q') => {
        const url = `https://api.discogs.com/database/search?` + new URLSearchParams(
            {
                
                track: song,
                artist: artist,
                key : "sSzDbdDWTFzedLzekuIJ",
                secret : "BCKwjJKWTTJXLSarrKALaGwjarsBOEfY"

            }
        )
        fetch(url,
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
            .then(o => {o['apiURL'] = url; return o})
            .then(z => setSeek(z));
    }

    

    return (
        
        <div className="over-container">
            <div className="search-container">
                <h3 className="search-title">Browse albums by your favorite artist and / or song.</h3>
                <div className="input-container">
                    <input className="artist" placeholder="Artist" onChange={ (event) => setArtist(event.target.value) }></input>
                    <input className="song" placeholder="Song" onChange={ (event) => setSong(event.target.value) }></input>
                    <button className="search" onClick={() => {search(artist, song)}}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Input;