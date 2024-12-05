import './content.css';

function Content() {
    const data = [
        { id: 1, title: 'Liked Songs fake', img_url: '../../public/image1.png' },
        { id: 2, title: 'Liked Songs', img_url: '../../public/Liked.png' },
        { id: 3, title: 'Neffex Playlist fake', img_url: '../../public/image10.png' },
        { id: 4, title: 'Neffex Playlist', img_url: '../../public/image4.png' },
        { id: 5, title: 'K/DA fake', img_url: '../../public/image8.png' },
        { id: 6, title: 'K/DA', img_url: '../../public/image3.png' },
        { id: 8, title: 'Liked Songs', img_url: '../../public/image1.png' },
    ];

    const datatwo = [
        { id: 1, title: 'Liked Songs', img_url: '../../public/image9.png' },
        { id: 2, title: 'Liked Songs2', img_url: '../../public/image8.png' },
        { id: 3, title: 'Liked Songs3', img_url: '../../public/image7.png' },
        { id: 4, title: 'Liked Songs', img_url: '../../public/image6.png' },
        { id: 5, title: 'Liked Songs', img_url: '../../public/image5.png' },
    ];

    
    const a = data.filter((item) => item.id % 2 == 0);

    return (
        <>
            <div className="content">
                <div className="firstrow">
                    <img src="../public/top arrow navigation.png" alt="" className="firstpic" />
                    <img src="../public/User.png" alt="" className="secondpic" />
                </div>
                <h1 className="secrowh">Good Morning</h1>
                <div className="secondrow">
                   
                    <div className="liked-songs-container">
                        {a.map((item) => (
                            <div key={item.id} className="liked-song-item">
                                <img src={item.img_url} alt={item.title} className="liked-song-image" />
                                <div className="liked-song-text">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="thirdrow">
                    <div className="liked-songs-container">
                        <div className="liked-song-item">
                            <img src="../public/image2.png" alt="Liked Songs" className="liked-song-image" />
                            <p className="liked-song-text">Liked Songs</p>
                        </div>
                    </div>
                </div>
                <h2 className="syml">Shows you might like</h2>
                <div className="fourthrow">
                    {datatwo.map((k) => (
                        <div key={k.id} className="box-1">
                            <img src={k.img_url} alt={k.title} />
                            <div>{k.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Content;
