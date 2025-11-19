import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
async function getRamdomCatURL(){
  const apikey = ''
  const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=" + apikey);
  return response.data[0].url;
}

function App() {
  const [url,setUrl] = useState('');

  return (
    <>
      <div>
        <button onClick={async() => setUrl(await getRamdomCatURL())} >Click để lấy ảnh mèo</button>
      </div>
      <div>
        {
          <img src={url} alt="Ảnh mèo" />
        }
      </div>
    </>
  )
}

export default App
