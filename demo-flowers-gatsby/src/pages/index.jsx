import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GiPlantsAndAnimals } from "@react-icons/all-files/gi/GiPlantsAndAnimals"


const IndexPage = () => (
  <Layout>
    <div className="">
      <h1>
        <GiPlantsAndAnimals /> Welcome to my plants plan<GiPlantsAndAnimals/>
      </h1>
      <p className="">This is a place to plan garden</p>
      <Link to="gallery">To Cards</Link>
    </div>
    
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
