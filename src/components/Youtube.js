import React from "react";
import YouTube from "react-youtube";


export default function Youtuube({ videoID }) {
    const options = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            controls: 1,
        }
    }
    return <div className="video"><YouTube videoId={videoID} options={options} id="video" /></div>;

}


