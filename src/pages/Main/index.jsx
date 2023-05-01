import React from 'react'
import Intro from '../../components/Intro'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Portfolio from '../../components/Portfolio'
import Resume from '../../components/Resume'


export default function index() {
  return (
    <main className='lg:border-r lg:border-[#585d65]'>
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  )
}
