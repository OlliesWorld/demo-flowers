import * as React from "react"
import { GiPlantsAndAnimals } from "@react-icons/all-files/gi/GiPlantsAndAnimals"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import styled from "styled-components"

const FlowerStyles = styled.div`
  width: 100%;
  margin-bottom: 2rem;
h1 {
  font-size: 2.5rem;
}
  .header {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: baseline;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .specifics {
    span {
      font-weight: 900;
      color: var(--color-primary);
      text-transform: uppercase;
    }
  }
  .resources {
    display: flex;
    flex-direction: column;
  }
  .todo {
    display: grid;
    grid-template-columns: auto auto;
  }
`

const components = {
  block: {
    // Ex. 1: customizing common block types
    strong: ({ children }) => <strong className="">{children}</strong>,
    em: ({ children }) => <strong className="">{children}</strong>,
    h1: ({ children }) => <h1 className="">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="">{children}</p>,
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => <h2 className="">{children}</h2>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="">{children}</ul>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined
      return (
        <a className="" href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

export default function FlowerPage({ pageContext: { flower } }) {
  console.log(flower)
  return (
    <Layout>
      <FlowerStyles>
        <div className="header">
          <h1><GiPlantsAndAnimals />{flower.flowername}<GiPlantsAndAnimals /></h1>
          <h2> ({flower.sciencename})</h2>
        </div>
        <section>
          <div>
            <GatsbyImage
              image={flower.mainImage.asset.gatsbyImageData}
              alt={flower.mainImage.asset.altText}
            />
              <h3>Todos:</h3>
            <ul className="todo">
              <li>Planting season</li>
              <li>type of plant(annual)</li>
              <li>maintenance (easy, moderate)</li>
              <li>plant height</li>
              <li>life span</li>
            </ul>
          </div>
          <div>
            <PortableText
              value={flower._rawDescription}
              components={components}
            />
            <div className="specifics">
              <p>
                <span>🌞 sun:</span> {flower.sun[0].title}
              </p>
              <p>
                <span>🟫 soil:</span> {flower.soil}
              </p>
              <p>
                <span>💧water:</span> {flower.water}
              </p>
            </div>
          </div>
        </section>
        <h3>Resources</h3>
        <div className="resources">
          <a
            href={flower.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Related info
          </a>
          <a
            href="https://housegrail.com/best-flowers-to-grow-in-colorado/"
            alt="testing"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            resource info
          </a>
        </div>
      </FlowerStyles>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />

export const query = graphql`
  query ($slug: String) {
    flower: sanityFlower(slug: { current: { eq: $slug } }) {
      id
      flowername
      sciencename
      link
      slug {
        current
      }
      _rawDescription
      sun {
        title
      }
      water
      soil
      mainImage {
        asset {
          altText
          gatsbyImageData(width: 500, formats: AUTO, layout: FIXED)
        }
      }
    }
  }
`
