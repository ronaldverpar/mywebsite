import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Interest from "../components/interest"
import Experience from "../components/experience"
import Knowledge from "../components/knowledge"
import Touch from "../components/touch"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Interest />
    <Experience />
    <Knowledge />
    <Touch />
  </Layout>
)

export default IndexPage
