import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GiPlantsAndAnimals } from "@react-icons/all-files/gi/GiPlantsAndAnimals"
import styled from "styled-components"

const StyledPage = styled.div`
  margin-bottom: 4rem;
text-align: center;
.body {
  width: 50%;
  margin: 0 auto;
}
`

const IndexPage = () => (
  <Layout>
    <StyledPage>
      <h1>
        <GiPlantsAndAnimals /> Welcome to my garden plan<GiPlantsAndAnimals/>
      </h1>
      <div className="body">
        <p>This site is a Demo of how to connect Sanity and Gatsby. For beginner devs and anyone who is interested in why headless CMS</p>
        
        <h2>This is a place to plan a garden</h2>
        <p>Here is the site I used for my flower examples</p>
        <a
              href="https://housegrail.com/best-flowers-to-grow-in-colorado/"
              alt="testing"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              resource info
            </a>
      </div>
      
    </StyledPage>
    
  </Layout>
)

export const Head = () => <Seo title="Demo Garden Site" />

export default IndexPage
