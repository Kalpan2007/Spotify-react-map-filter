import './sidebar.css'

function sidebar(){
    return(
        <>
        <div className="sidebar">
          <div className="logo">
            <img src="../public/logo.png" alt="logo" />
          </div>
          <div className="parttwo">
            <img src="../public/Home.png" alt="" className='home' />
            <div className='hometext'>Home</div>
          </div>
          <div className="parthree">
            <img src="../public/Search.png" alt="" className='search' />
            <div className='searchtext'>Search</div>
          </div>
          <div className="parthree">
            <img src="../public/Your library.png" alt="" className='search' />
            <div className='searchtext'>Your Library</div>
          </div>
          <div className="five">
            <img src="../public/Create.png" alt="" className='create' />
            <div className='createtext'>Create Playlist</div>
          </div>
          <div className="five1">
            <img src="../public/Liked.png" alt="" className='create' />
            <div className='createtext'>Liked Songs</div>
          </div>
          <div className="five1">
            <img src="../public/your episodes.png" alt="" className='create' />
            <div className='createtext'>Your Episodes</div>
          </div>
          <ul className="playlist-section">
            <li className="playlist-item">FAV</li>
            <li className="playlist-item">Daily Mix 2</li>
            <li className="playlist-item">Discover Weekly</li>
            <li className="playlist-item">Malayalam</li>
            <li className="playlist-item">Dance/Electronic Mix</li>
            <li className="playlist-item">EDM/Popular</li>
          </ul>
          <div className="install">
            <img src="../public/grommet-icons_install-option.png" alt="" className='inatallimage' />
            <div className="installtext">Install App</div>
          </div>
        </div>
        </>
    )
}

export default sidebar;