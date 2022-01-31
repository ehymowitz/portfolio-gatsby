import React from "react"
import Layout from "../components/layout/layout"
import Music from "../sections/music/music"
import Code from "../sections/code/code"
import Top from "../sections/top/top"

export default function Home() {
  return (
    <Layout>
      <>
        <Top />
        <Music />
        <Code />
      </>
    </Layout>
  )
}
