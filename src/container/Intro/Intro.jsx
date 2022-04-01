import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import { images } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(true);
  const vidRef = React.useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
      setPlayVideo(false);
    } else {
      vidRef.current.play();
      setPlayVideo(true);
    }
  };

  return (
    <div className='app__video'>
      <video src={meal} ref={vidRef} type="video/mp4" autoPlay loop muted controls={false} />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30} /> 
          : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  );
}

export default Intro;
