import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    {/* <GatsbyImage >Plant image */}
    <h1>
      Plant name
    </h1>
    <p> Description
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
      <ul>
      <li>type of soil</li>
      <li>type of weather</li>
      </ul>
      <a href="/" class="button"> Find out more </a>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
