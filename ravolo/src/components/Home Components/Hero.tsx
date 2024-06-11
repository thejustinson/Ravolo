"use client"

import { useEffect, useState } from "react"
import AestheticDiv from "./AestheticDiv"
import HeroMessage from "./HeroMessage"
import HomeNav from "./HomeNav"

const Hero = () => {
  const [aestheticGradientTop, setAestheticGradientTop] = useState(100)

  useEffect(()=>{
    console.log(aestheticGradientTop)
  }, [aestheticGradientTop])

  return (
    <section className="relative h-screen">
        <AestheticDiv aestheticGradientTop={aestheticGradientTop}/>
        <HomeNav/>
        <HeroMessage setAestheticGradientTop={setAestheticGradientTop}/>
    </section>
  )
}

export default Hero
