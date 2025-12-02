import { BrowserRouter, Route, Routes } from "react-router"
import MyNavbar from "./components/MyNavbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/articles/:id" element={<SingleArticle />} /> */}
          <Route path="/favorites" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
