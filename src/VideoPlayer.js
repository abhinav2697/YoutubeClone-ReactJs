function VideoPlayer(props) {
    console.log(props);

    if(props.selectedVideo){
        var  videoId =  props.selectedVideo.id.videoId;
          var url = `https://www.youtube.com/embed/${videoId}`;
          return(
              <div style={{marginLeft:"60px"}}> 
                  <iframe width="900" height="515" src={url}></iframe>
                  <h3>{props.selectedVideo.snippet.title}</h3>
              </div>
          )
      }
      else{
           <div>
              <h1>Loading.................</h1>
           </div>
      }
   
    
}
export default VideoPlayer;