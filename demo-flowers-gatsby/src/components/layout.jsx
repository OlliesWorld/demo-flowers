/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? '--color-primary' : "white")};
    width: 75%;
    margin: 0 auto;
  }
`

  return (
    <>
      <GlobalStyle theme="purple" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <p className="text-lg" ></p>
        <p className="text-lg">&copy; {new Date().getFullYear()}  Built with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
      </div>
    </>
  )
}

export default Layout
