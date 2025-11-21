import '../public/scss/style.scss'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

library.add(fas, far, fab)
function App() {
  const [isShowmore,setisShowmore] = useState(false)
  function toggleShowMore(){
      setisShowmore(true)
  }

  return (
    <>
      <nav>
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-item-text" href="#personal-info">
                    <FontAwesomeIcon className='icon'  icon='fa-solid fa-user'></FontAwesomeIcon>
                    <span>Thông Tin</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-item-text" href="#skills">
                    <FontAwesomeIcon className='icon' icon="fa-solid fa-meteor"></FontAwesomeIcon>
                    <span>Kỹ Năng</span>
                </a>

            </li>
            <li className="nav-item">
                <a className="nav-item-text" href="#projects">
                    <FontAwesomeIcon className='icon' icon="fa-solid fa-bars-progress"></FontAwesomeIcon>
                    <span>Dự Án</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-item-text" id="show-more-btn" href="#">
                    <FontAwesomeIcon className='icon' icon="fa-regular fa-rectangle-list" onClick={() => toggleShowMore()}></FontAwesomeIcon>
                    <span>Xem Thêm</span>
                </a>
            </li>
        </ul>
    </nav>
    <main id="main">
        <script src="/assets/js/script.js"></script>
    </main>
    <div className="show-more">
      { isShowmore &&
        (<ul className="sm-container">
            <li><a href="#" download>Tải CV (EN)</a></li>
            <li><a href="#" download>Tải CV (VI)</a></li>
        </ul>)
        }
    </div>
    </>
  )
}

export default App
