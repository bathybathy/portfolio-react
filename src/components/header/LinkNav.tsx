import { ItemNav } from "./Header.styles"
import { Link } from "react-router-dom"

const LinkNav = ({pathLink, text} : { pathLink: string, text: string }) => {
  return (
      <>
    <ItemNav><Link to={pathLink}>{text}</Link></ItemNav>
    </>
  )
}

export default LinkNav