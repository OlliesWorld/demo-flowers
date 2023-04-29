import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GiPlantsAndAnimals } from "@react-icons/all-files/gi/GiPlantsAndAnimals"
import styled from "styled-components"
import CardData from "./CardData.json"
import { Link } from "gatsby"


const SimpleCard = styled.section`
  article {
    --img-scale: 1.001;
    --link-icon-translate: -20px;
    --link-icon-opacity: 0;
    position: relative;
    border-radius: 16px;
    box-shadow: none;
    background: var(--color-code-bg);
    transform-origin: center;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    width: 80%;
    margin-bottom: 1rem;
  }

  article a::after {
    position: absolute;
    inset-block: 0;
    inset-inline: 0;
    cursor: pointer;
    content: "";
  }

  /* basic article elements styling */
  article h2 {
    margin: 0 0 18px 0;
    font-family: "Bebas Neue", cursive;
    font-size: 2.2rem;
    letter-spacing: 0.06em;
    color: var(--color-primary);
    transition: color 0.3s ease-out;
  }

  figure {
    margin: 0;
    padding: 0;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  article img {
    max-width: 100%;
    transform-origin: center;
    transform: scale(var(--img-scale));
    transition: transform 0.4s ease-in-out;
  }

  .article-body {
    padding: 24px;
  }

  article a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-primary);
  }

  article a:focus {
    outline: 1px dotted var(--color-primary);
  }

  article a .icon {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-left: 5px;
    transform: translateX(var(--link-icon-translate));
    opacity: var(--link-icon-opacity);
    transition: all 0.3s;
  }

  /* using the has() relational pseudo selector to update our custom properties */
  article:has(:hover, :focus) {
    --img-scale: 1.1;
    --title-color: var(--color-primary);
    --link-icon-translate: 0;
    --link-icon-opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  /* used styles from this codepen: https://codepen.io/utilitybend/pen/bGvjLba */
`
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
        <GiPlantsAndAnimals /> Welcome to my garden plan
        <GiPlantsAndAnimals />
      </h1>
      <div className="body">
        <p>
          This site is a Demo of how to connect Sanity and Gatsby. For beginner
          devs and anyone who is interested in why headless CMS
        </p>

        <h2>This is a place to plan a garden ** testing data ***</h2>

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
            {CardData.map(card => (
              <SimpleCard className="articles" key={card.id}>
                <article>
                  <div className="article-wrapper">
                    <figure>
                      <img src={card.src} alt={card.alt} />
                    </figure>
                    <div className="article-body">
                      <h2>{card.title}</h2>

                      <Link to="#" className="read-more">
                        Read more about {card.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </SimpleCard>
            ))}
          </section>
        </GalleryStyles>
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
