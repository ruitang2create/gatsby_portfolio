import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Works from "../components/Works"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import About from "../components/About"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <About />
    <Works heading="What I've built" />
    <Email />
  </Layout>
)

export default IndexPage
