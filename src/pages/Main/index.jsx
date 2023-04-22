import React from 'react'
import Intro from '../../components/Intro'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Portfolio from '../../components/Portfolio'
import Resume from '../../components/Resume'
import Spacer from '../../components/Spacer'


export default function index() {
  return (
    <main className='border-r border-[#585d65]'>
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Spacer />
    </main>
  )
}
