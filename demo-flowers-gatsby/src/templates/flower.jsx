import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import {PortableText} from '@portabletext/react'
import styled from "styled-components"

const FlowerStyles = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  height: 100vh;
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
`

const components = {
  text: {
    // Ex. 1: customizing common block types
    strong: ({ children }) => (
      <strong className="">{children}</strong>
    ),
    em: ({ children }) => (
      <strong className="">{children}</strong>
    ),
    h1: ({ children }) => <h1 className="">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="">{children}</p>
    ),
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="">{children}</h2>
    ),
    
  },
  block: {
    // Ex. 1: customizing common block types
    strong: ({ children }) => (
      <strong className="">{children}</strong>
    ),
    em: ({ children }) => (
      <strong className="">{children}</strong>
    ),
    h1: ({ children }) => <h1 className="">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="">{children}</p>
    ),
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="">{children}</h2>
    ),
    
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="">{children}</ul>,
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a className="" href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
};


export default function FlowerPage({ pageContext: { flower }}) {
  console.log(flower)
  return (
    <Layout>
      <FlowerStyles>
        <div className="header">
          <h1>{flower.flowername}</h1>
          <h2> ({flower.sciencename})</h2>
        </div>
        <section>
          <div>
          <GatsbyImage image={flower.mainImage.asset.gatsbyImageData} alt={flower.mainImage.asset.altText} />
            <p>Category of time to plant</p>
          </div>
          <div>        
            <PortableText  value={flower.description._rawChildren} components={components} />
            <p>🌞 All sun</p>
            <p> 🟫 high PH</p>
            <p> 💧 water montly</p>
          </div>
        </section>
        <section>
          <h3>My Notes</h3>
          <p>when and where I want to plant</p>
        </section>
        <a
          href="https://housegrail.com/best-flowers-to-grow-in-colorado/"
          alt="testing"
        >
          resource info
        </a>
      </FlowerStyles>
    </Layout>
  )
}

// export const Head = () => <Seo title="Page two" />



export const query = graphql`
  query ($slug: String) {
    flower: sanityFlower(slug: { current: { eq: $slug } })  {
        id
        flowername
        sciencename
        slug {
          current
        }
        description {
        _rawChildren
      }
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
