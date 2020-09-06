import React, { useRef, useState } from 'react';
import "./Video.css";
import  VideoFooter from "./VideoFooter";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
    if (playing){
        videoRef.current.pause();
    } else {
        videoRef.current.play();
        setPlaying(true);
    }
    };
    

        <div className="video">
        <video className="video__player" 
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://vm.tiktok.com/ZSPgqUJf/" className="video">
        </video>
        <VideoFooter/>

        {/* <VideoSidebar /> /> */}
        </div>
    
}

export default Video;