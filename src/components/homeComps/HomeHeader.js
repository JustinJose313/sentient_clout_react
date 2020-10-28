import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Hero } from "../../styles/HomeStyles/homeHeader"
import { motion } from "framer-motion"

//components
import Button from "../button"

const HomeHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "heroimage.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Hero fluid={data.file.childImageSharp.fluid}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="title"
      >
        <h1>
          <span>Refresh</span> Your Website.
        </h1>
      </motion.div>
    </Hero>
  )
}

export default HomeHeader
