import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../Pages/index'
import Layout from '../Layout'
import About from '../../Pages/About'
import Explore from '../../Pages/Explore'
import Learning from '../../Pages/Learning'
import Pricing from '../../Pages/Pricing'
import Blog from '../../Pages/Blog'
import Careers from '../../Pages/Careers'

function Index() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
      </Route>

    </Routes>
  )
}

export default Index
