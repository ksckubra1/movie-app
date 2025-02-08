import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import MyList from "./pages/MyList"
import MoviesDetail from "./pages/MoviesDetail"
import Home from "./Pages/Home"


import { HOME, MOVIES_DETAIL, MY_LIST } from './constants/path'

function App() {

  return (

    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={MY_LIST} element={<MyList />} />
        <Route path={MOVIES_DETAIL} element={<MoviesDetail />} />
      </Routes>
    </div>

  )
}

export default App
