"use client"
import React from 'react'
import Hero from './components/home/Hero'
import AboutUs from './components/home/AboutUs/AboutUs'
import OurProgram from './components/home/OurProgram/OurProgram'
import KnowledgeCenter from './components/home/KnowledgeCenter/KnowledgeCenter'
import Blog from './components/home/Blog/Blog'
import News from './components/home/News/News'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <OurProgram/>
      <KnowledgeCenter/>
      <Blog/>
      <News/>
    </div>
  )
}

export default Home
