import { Link } from "react-router-dom"


export const NextButton = () => {
  return (
    <Link 
      className="w-16 border border-black rounded-lg cursor-pointer"
      to={'/item/:id'}>Next</Link>
  )
}
