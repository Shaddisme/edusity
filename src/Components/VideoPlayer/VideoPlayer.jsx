import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video3.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    console.log('playState in VideoPlayer:', playState);  // Debugging log
    console.log('Class Name:', `video-player ${playState ? '' : 'hide'}`); // Debugging log

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;
