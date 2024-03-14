import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const updateSelectedVideo = (selectedVideoByUser) => {
    setSelectedVideo(selectedVideoByUser);
  }



  const makeAPIcall = async (query) => {
    var response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+query+"&type=video&key=AIzaSyBu5KlQWbFauPjeqCm7Qv3qBrBYRjldcpo")
    console.log("response", response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  }

  useEffect(
    () => {
    makeAPIcall("Java");
  },[]
  )
  return (
    <div className="App">
        <SearchBar queryCollector = { (query) =>{
                 makeAPIcall(query);
      }}></SearchBar> 

      <div style={{display:"flex", marginTop:"20px"}}>
  <div style={{  float:"left;"}}>
  <VideoPlayer selectedVideo={selectedVideo}></VideoPlayer>
  </div>
  <div style={{ float:"right;"}}> <VideoList updateSelectedVideo={(input) =>{
              updateSelectedVideo(input)
             }} videos={videos}></VideoList>
</div>
</div>
      
     <br></br>
      
    </div>
  );
}

export default App;
