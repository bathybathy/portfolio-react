import { ItemNav, StyledLinkNav } from "./Header.styles"


const LinkNav = ({pathLink, text} : { pathLink: string, text: string }) => {
  return (
      <>
    <ItemNav><StyledLinkNav to={pathLink}>{text}</StyledLinkNav></ItemNav>
    </>
  )
}

export default LinkNav