import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { Container, Flex } from "../../styles/globalStyles"
import {
  branding,
  fastLoad,
  UX,
  landing,
  responsive,
  minimal,
} from "../../assets/images/services"
import {
  Section,
  ServiceHeader,
  CardWrap,
  CardWide,
  CardFlex,
} from "../../styles/HomeStyles/homeServices"
import Link from "gatsby-link"
import Title from "../title"

const HomeServices = () => {
  const animation = useAnimation()
  const [serviceRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  })

  const ease = [0.6, 0.05, -0.01, 0.9]
  const variant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: ease,
      },
    },
    hidden: {
      opacity: 0,
      y: 72,
    },
  }
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <Section>
      <Title>services.</Title>
      <Container>
        <ServiceHeader
          ref={serviceRef}
          animate={animation}
          initial="hidden"
          variants={variant}
        >
          <h1>Web design.</h1>
          <p>
            Our agency web design studio creates marketing websites and landing
            pages that help to tell brand stories, increase conversion and build
            trust.
          </p>
        </ServiceHeader>
        <CardWrap
          ref={serviceRef}
          animate={animation}
          initial="hidden"
          variants={variant}
        >
          <CardWide>
            <div className="cardImgWrap">
              <img src={branding} alt="" />
            </div>
            <div className="cardContentWrap">
              <h4 className="card-title text-medium">Business Branding.</h4>
              <p>Express your Identity through Design. Make it Memorable.</p>
            </div>
          </CardWide>
          <CardFlex>
            <div className="cardSmall">
              <div className="cardImgWrap">
                <img src={UX} alt="" />
              </div>
              <div className="cardContentWrap">
                <h4 className="card-title text-medium">User Experience..</h4>
                <p>Make user react to every touch and interaction.</p>{" "}
              </div>
            </div>
            <div className="cardSmall">
              <div className="cardImgWrap">
                <img src={landing} alt="" />
              </div>
              <div className="cardContentWrap">
                <h4 className="card-title text-medium">Landing Pages.</h4>
                <p>
                  Your landing page lets you make a trade, some sort of special
                  offer, piece of information or a deal, in return for providing
                  contact information..
                </p>
              </div>
            </div>
          </CardFlex>
          <CardWide>
            <div className="cardImgWrap">
              <video muted loop autoPlay src={responsive} alt="" />
            </div>
            <div className="cardContentWrap">
              <h4 className="card-title text-medium">Responsive Design.</h4>
              <p>
                Increase reach to customers and clients on smaller devices
                (tablets & smartphones).
              </p>{" "}
            </div>
          </CardWide>
          <CardFlex>
            <div className="cardSmall">
              <div className="cardImgWrap">
                <img src={minimal} alt="" />
              </div>
              <div className="cardContentWrap">
              <h4 className="card-title text-medium">Minimal Design.</h4>
              <p>
                Show customers what's important and make the experience clean.
              </p>              </div>
            </div>
            <div className="cardSmall">
              <div className="cardImgWrap">
                <img src={fastLoad} alt="" />
              </div>
              <div className="cardContentWrap">
              <h4 className="card-title text-medium">Load Faster.</h4>
              <p>Be the first one that your user see when searched.</p>
              </div>
            </div>
          </CardFlex>
        </CardWrap>
      </Container>``
    </Section>
  )
}

export default HomeServices
