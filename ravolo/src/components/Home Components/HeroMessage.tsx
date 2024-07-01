"use client"

import {motion} from "framer-motion"
import { AnimationVariants } from "@/utils/AnimationVariants"
import { useRef } from "react"

interface HeroMessageProps{
    setAestheticGradientTop: (aestheticGradientTop: number) => void;
}

const HeroMessage = ({setAestheticGradientTop}: HeroMessageProps) => {

  const connectWalletBtn = useRef<HTMLButtonElement>(null);

  const afterAnimationIsComplete = () => {
      if (connectWalletBtn.current) {
        let {top, height} = connectWalletBtn.current.getBoundingClientRect()
        console.log(connectWalletBtn.current.getBoundingClientRect())
        console.log(top, height)

        setAestheticGradientTop(top)
      }
  }

  return (
    <motion.div 
        className="h-[calc(100vh-82px)] justify-center relative w-fit mx-auto flex flex-col items-center gap-3 px-10 lg:justify-start lg:mt-16"
        variants={AnimationVariants.slideUp}
        initial='initial'
        animate='animate'
        onAnimationComplete={afterAnimationIsComplete}
    >
        <p className="text-center">Event management at its best</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold bg-gradient-to-br from-zinc-50 to-zinc-400 bg-clip-text text-transparent py-1">
            Experience Events Reimagined <span className="md:hidden">with Ravolo</span> <br /> <span className="hidden md:block">Organize & Attend with Ravolo</span>
        </h1>
        <p className="max-w-[600px] text-center">
            Embrace the Web3 experience. Set up an event, invite your friends, start selling tickets - all within minutes. Start with Ravolo today.
        </p>

        <button ref={connectWalletBtn} className="bg-neutral-50 text-neutral-950 p-[1px] rounded-full mt-5 active:scale-95 hover:bg-gradient-to-br hover:from-purple-900 hover:to-purple-500  hover:text-neutral-50 group duration-200 min-w-[200px]">
            <div className="px-4 py-2 bg-neutral-50 text-neutral-950 group-hover:bg-neutral-900 group-hover:text-neutral-50 rounded-full duration-200">
                Connect Wallet               
            </div>
        </button>
    </motion.div>
  )
}

export default HeroMessage
