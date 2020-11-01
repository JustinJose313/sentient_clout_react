import React from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {
  branding,
  fastLoad,
  UX,
  landing,
  responsive,
  minimal
} from "../../assets/images/services"
import fastLoadgif from "../../assets/images/services/fastLoad.gif"
import {
  Section,
  ServiceHeader,
  CardWrap,
  Card,
} from "../../styles/HomeStyles/homeServices"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import Title from "../title"

const HomeServices = () => {
  return (
    <Section>
      <Title>services.</Title>
      <Container>
        <ServiceHeader>
          <h1>Web design.</h1>
          <p>
            Our agency web design studio creates marketing websites and landing
            pages that help to tell brand stories, increase conversion and build
            trust.
          </p>
          <CardWrap>
            <Card>
              <div className="card-img">
                <img src={branding} alt="" />
              </div>
              <div className="card-content">
                <h4 className="card-title text-medium">Business Branding.</h4>
                <p>Express your Identity through Design. Make it Memorable.</p>
              </div>
            </Card>
            <Card>
              <div className="card-img">
                <img src={UX} alt="" />
              </div>
              <div className="card-content">
                <h4 className="card-title text-medium">User Experience..</h4>
                <p>Make user react to every touch and interaction.</p>
              </div>
            </Card>
            <Card>
              <div className="card-img">
                <img src={landing} alt="" />
              </div>
              <div className="card-content">
                <h4 className="card-title text-medium">Landing Pages.</h4>
                <p>
                  Your landing page lets you make a trade, some sort of special
                  offer, piece of information or a deal, in return for providing
                  contact information..
                </p>
              </div>
            </Card>
            <Card>
              <div className="card-img">
                <video muted autoPlay loop src={responsive}></video>
              </div>
              <div className="card-content">
                <h4 className="card-title text-medium">Responsive Design.</h4>
                <p>
                  Increase reach to customers and clients on smaller devices
                  (tablets & smartphones).
                </p>
              </div>
            </Card>
            <Card>
              <div className="card-img">
                <img src={minimal} alt="" />
              </div>
              <div className="card-content">
                <h4 className="card-title text-medium">Minimal Design.</h4>
                <p>Show customers what's important and make the experience clean.</p>
              </div>
            </Card>
            <Card>
              <div className="card-img">
                <img src={fastLoad} alt="" />
              </div>
              <div className="card-content">
                <h4 className="card-title text-medium">Load Faster.</h4>
                <p>Be the first one that your user see when searched.</p>
              </div>
            </Card>
          </CardWrap>
        </ServiceHeader>
      </Container>
    </Section>
  )
}

export default HomeServices
