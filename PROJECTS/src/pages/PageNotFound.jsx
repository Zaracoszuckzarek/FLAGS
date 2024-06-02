import { Link } from "react-router-dom"

const pageNotFound = () => {
  return (
    <div className="pageNotFound">
    <p> The page you are looking for connot be found!</p>
    <Link to="home">Return back</Link>
    </div>
  )
}

export default pageNotFound