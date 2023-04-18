import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const FlowerStyles = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  height: 100vh;
  .header {
      display: flex;
      justify-content: center;
    align-items: baseline;
  }
 section {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 1rem;
 }
`


const FlowerTest = () => (
  <Layout>
    <FlowerStyles>
        <div className="header">
            <h1>Flower name</h1>
            <h2> (Scientific name)</h2>
        </div>
        <section>
            <div><img src='https://housegrail.com/wp-content/uploads/2022/03/Stonecrop_Pixabay-1536x1024.webp' alt="testing for template"/>
            <p>Category of time to plant</p>
            </div>
             <div><p>Stonecrop is an outstanding Sedum cultivar that is exceptionally drought-resistant. Once you have planted these perennials properly, they will easily last over half the year in your garden. Stonecrop will grow up to two feet and has a variety of shades from pink to purple and even dark red or white. Not only will this plant look great in the garden, but it attracts bees and butterflies. At the same time, other critters such as deer or rabbits generally leave them alone.</p>
             <p>🌞 All sun</p>
              <p> 🟫 high PH</p>
              <p> 💧 water montly</p>
             </div>
        </section>
        <section>
            <h3>My Notes</h3>
            <p>when and where I want to plant</p>
        </section>
        <a href="https://housegrail.com/best-flowers-to-grow-in-colorado/" >resource info</a>
    </FlowerStyles>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default FlowerTest
