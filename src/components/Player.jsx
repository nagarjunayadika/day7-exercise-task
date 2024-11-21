import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player({ thumbnail, songSrc,handleNextSong,handlePreviousSong }) {
  return (
    <div>
      <img src={thumbnail} alt="poster-image" className='poster-image' />
      <AudioPlayer
        autoPlay
        src={songSrc}
        showSkipControls
        showJumpControls={false}
        onClickNext={handleNextSong}
        onClickPrevious={handlePreviousSong}
      />
    </div>
  )
}