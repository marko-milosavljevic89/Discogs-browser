import { useState, useEffect } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";
import ShowDetails from "./components/ShowDetails";
import Nopagination from "./components/Nopagination";


function App() {

  const [ seek, setSeek ] = useState('Default searches')
  
  const [ togglePop, setTogglePop ] = useState(false)

  const [ detailsURI, setDetailsURI ] = useState('https://api.discogs.com/masters/63451?')
  const [ detailsData, setDetailsData ] = useState('https://i.discogs.com/xstFvMFZmD1MqKG0ZcFLXCjOnvvu_bcS--14wUCwqCY/rs:fit/g:sm/q:90/h:698/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE0/Nzg3NTA0LTE1ODE2/MDQzODgtMjgwNC5q/cGVn.jpeg') 

  useEffect( () => {
    const seed = ['Ed Sheeran', 'Post Malone', 'John Maus', 'Bajaga', 'Misfits', 'The Weeknd']
    const artist = seed[Math.floor(Math.random() * seed.length)]
    const song = ''
    const url = `https://api.discogs.com/database/search?` + new URLSearchParams(
      {
          
          track: song,
          artist: artist,
          key : "sSzDbdDWTFzedLzekuIJ",
          secret : "BCKwjJKWTTJXLSarrKALaGwjarsBOEfY"

      }
    )

    fetch(url, {
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
  
    

  }, [] );


  return (
    <div className="App">
      <Nav/>
      {togglePop ? <ShowDetails detailsData={detailsData} detailsURI={detailsURI} togglePop={togglePop} setTogglePop={setTogglePop}/> : null}
      <Input seek={seek} setSeek={setSeek}/>     
      {seek === 'Default searches' ? <Nopagination /> : <Pagination seek={seek} setSeek={setSeek} /> }
      <Display setDetailsData={setDetailsData} setDetailsURI={setDetailsURI} seek={seek} setSeek={setSeek} togglePop={togglePop} setTogglePop={setTogglePop}/>
      

    </div>
  );
}

export default App;
