import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyles = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Link
      to="/gallery"    >
      Gallery
    </Link>
    <Link
      to="/"    >
      {siteTitle}
    </Link>
  </HeaderStyles>
)

export default Header
