import { BrowserRouter } from "react-router"
import MyNavbar from "./components/MyNavbar"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
      </BrowserRouter>
    </>
  )
}

export default App
