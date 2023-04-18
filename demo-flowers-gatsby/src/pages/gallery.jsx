import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Card from "../components/card"
import CardData from "./CardData.json"
import { graphql } from "gatsby"

const GalleryStyles = styled.div`
  width: 100%;
  

  .header {
    text-align: center;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem
  }
`


function GalleryPage({ data }) {
 
  return (
  <Layout>
    <GalleryStyles>
    <section className="header">
      <h1>Gallery of Plants</h1>
      <h2>These are the plants I want to plant in my garden. 🌻</h2>
    </section>
    <section className="cards">
   {CardData.map((card) => (
   <Card key={card.id} soil={card.soil} water={card.water} sun={card.sun} src={card.src} alt={card.alt} title={card.title} description={card.description}/>
   ))}
    </section>
    </GalleryStyles>
  </Layout>
)
   }

export const Head = () => <Seo title="Page two" />

export default GalleryPage

export const query = graphql`
query flower{
   allSanityFlower {
    nodes {
      id
      flowername
      slug {
        current
      }
      soil
      sun {
        title
      }
      water
    }
  }
}
`