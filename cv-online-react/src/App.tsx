
import '../public/scss/style.scss'
import Mainlayout from './layouts/Mainlayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersonalInfo from './page/personal-info'
import Skills from './page/skills'
import Projects from './page/projects'
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Mainlayout />}>
                        <Route path="/" element={<PersonalInfo />}></Route>
                        <Route path="/skills" element={<Skills/>}></Route>
                        <Route path="/projects" element={<Projects/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App