import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import MyList from "./pages/MyList"
import Home from "./pages/Home"


import { HOME, MY_LIST, MOVIE_DETAIL } from './constants/path'
import MovieDetail from "./pages/MovieDetail"

function App() {

  return (

    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={MY_LIST} element={<MyList />} />
        <Route path={MOVIE_DETAIL} element={<MovieDetail />} />
      </Routes>
    </div>

  )
}

export default App
