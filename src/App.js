import React, { useState} from "react";
import './App.css';
import DefaultImages from "./component/DefaultImage";

function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);

  const handlekeypress = event => {
    if(event.code === 'Enter' || event.code === 'NumpadEnter'){
      event.preventDefault()
      URL()
    }
  }
  const URL = async () => {
    const data = await fetch(`https://api.unsplash.com/search/photos/?query=${search}&per_page=12&client_id=y15421czHrr1T-y7VBbwbgik1Vc88UunZKPdaze1csg`)
    const res = await data.json()
    setImages(res.results)
  }

  return (
    <>
      <div className='header'>
        <div className="content">
        <header>
          <h1>Image Gallery</h1>
        </header>
        <input id={"location"} value={search}  placeholder={"Search-Image"} onChange={event => setSearch(event.target.value)} onKeyPress={handlekeypress}/>
        </div>
      </div>
      <div className='body'>
        {images.length > 0 ? (
          images.map((image, index) => (
            <a href={image.links.html} alt="" target="_blank">
              <img
                src={image.urls.regular}
                alt={image.alt_description}
              />
            </a>
          ))
        ) : (
          <DefaultImages />
        )}
      </div>
    </>
  );
}

export default App;
