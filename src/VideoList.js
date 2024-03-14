import React from 'react'

function VideoList (props) {
    console.log("props", props);
    const renderList = () => {
       var list= props.videos.map(video => {
           
           return <li style={ {cursor:"pointer"}} onClick={()=>{props.updateSelectedVideo(video)}} key={video.etag}><img src={video.snippet.thumbnails.medium.url} alt={''}></img></li>

    })
    return list;
       
        
    }


  return (
      <div>
          <h1>video  List</h1>
          <ul style={{ listStyleType: "none" } } >
              {renderList()}
          </ul>
      </div>
  )
}

export default VideoList