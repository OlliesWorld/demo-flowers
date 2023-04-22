import * as React from "react"
import { GiPlantsAndAnimals } from "@react-icons/all-files/gi/GiPlantsAndAnimals"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Card from "../components/card"
// import CardData from "./CardData.json"
import { graphql } from "gatsby"

const GalleryStyles = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  h1 {
    font-size: 2.5rem;
  }
  .header {
    text-align: center;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

function GalleryPage({ data }) {
  const flower = data.allSanityFlower.nodes
  // console.log(flower)
  return (
    <Layout>
      <GalleryStyles>
        <section className="header">
          <h1>
            <GiPlantsAndAnimals />
            Gallery of Plants
            <GiPlantsAndAnimals />
          </h1>
          <h2>These are the plants I want to plant in my garden. 🌻</h2>
        </section>
        <section className="cards">
          {/* {CardData.map((card) =>
      <Card key={card.id} soil={card.soil} water={card.water} sun={card.sun} image={card.src} alt={card.alt} title={card.title} description={card.description}/>
      )} */}
          {flower.map(card => (
            <Card
              key={card.id}
              src={card.mainImage.asset.gatsbyImageData}
              alt={card.mainImage.asset.altText}
              title={card.flowername}
              slug={card.slug.current}
            />
          ))}
        </section>
      </GalleryStyles>
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export default GalleryPage

export const query = graphql`
  query flower {
    allSanityFlower {
      nodes {
        id
        flowername
        slug {
          current
        }
        mainImage {
          asset {
            altText
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`
