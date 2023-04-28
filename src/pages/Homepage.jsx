import React from 'react'
import { Layout } from '../components/Layout'
import Footer from '../components/Footer'
import FeaturedResources from '../components/FeaturedResources'
import AboutMe from '../components/AboutMe'


export default function Homepage() {
  return (
    <Layout>
     <AboutMe/>
     <FeaturedResources/>
    </Layout>
  )
}
