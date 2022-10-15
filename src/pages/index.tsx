import React from "react"
import Layout from "../components/layout/layout"
import Music from "../sections/music/music"
import Code from "../sections/code/code"
import Top from "../sections/top/top"
import { PageProps } from "gatsby"

export default function Home({ location }: PageProps) {
  return (
    <Layout>
      <>
        <Top showMusicFirst={location.hash === "#inst"} />
        <Music />
        <Code />
      </>
    </Layout>
  )
}
