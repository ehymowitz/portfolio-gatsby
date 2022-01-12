import React from "react"
import Helmet from "react-helmet"
import Container from "../container/container"
import Footer from "../footer/footer"
import Nav from "../nav/nav"
import { GlobalStyle, StyledLayout } from "./layout.styled"

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Helmet defer={false}>
        <title>Elie Hymowitz</title>
        <meta
          name="description"
          content="Elie Hymowitz's Web Portfolio. I'm a web developer and musician, and I take photos too."
        />
        <meta property="og:title" content="Elie Hymowitz" />
        <meta
          property="og:description"
          content="Elie Hymowitz's Web Portfolio. I'm a web developer and musician, and I take photos too."
        />
        <meta property="og:image" content="/headshot.png" />
        <meta property="og:url" content="https://hymowitz.org/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container>
        <>
          <Nav />
          {children}
          <Footer />
        </>
      </Container>
    </StyledLayout>
  )
}
