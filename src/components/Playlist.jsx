export default function Playlist({songs=[],handleMenu,handleSong,currentSongIndex}) {
    return (
      <div className="user-container">
        <h2>Playlist</h2>
        {songs.map((song,index)=>(
          <div key={index} className="d-flex" onClick={()=>handleSong(index)}
          >
            <span>{song.songName}</span>
            <i className={`fa fa-${index===currentSongIndex?'pause':'play'}`}/>
            </div>
        ))}
        <button onClick={()=>handleMenu("")}>Close</button>
      </div>
    )
  }