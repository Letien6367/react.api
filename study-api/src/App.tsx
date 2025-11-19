import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import './style.scss'

async function getRamdomCatURL() {
  const apikey = ''
  const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=" + apikey);
  return response.data[0].url;
}


function App() {
  const [url, setUrl] = useState('');
  const [Isloading, setIsloading] = useState(false)
  const handleClick = async () => {
    setIsloading(true)
    setUrl(await getRamdomCatURL())
    setTimeout(() => {
      setIsloading(false)
    },1000 );
  }
  return (
    <>
      <div>
        <button onClick={async () => handleClick()} >Click để lấy ảnh mèo</button>
      </div>
      <div>
        { url &&
          <img src={url} alt="Ảnh mèo" />
        }
      </div>
      {Isloading && (
          <div className="loading">
            <h1>Đang Tải...</h1>
          </div>
         )
        }
    </>
  )
}

export default App
