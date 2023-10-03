import React, { useEffect } from 'react'
import Intro from '../../components/Intro'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Portfolio from '../../components/Portfolio'
import Resume from '../../components/Resume'


export default function Index() {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])
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
