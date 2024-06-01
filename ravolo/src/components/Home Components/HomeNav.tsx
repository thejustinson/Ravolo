"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import { AnimationVariants } from "@/utils/AnimationVariants"
import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"

const HomeNav = () => {
  return (
    <motion.div 
        className="px-10 py-5 flex justify-between items-center"
        variants={AnimationVariants.dropNav}
        initial='initial'
        animate='animate'
    >
        <Link href={''}>
            <div className="flex gap-2 items-center overflow-x-hidden min-w-[200px]">
                <Image src={'/logo-white.svg'} width={100} height={100} alt="Ravolo Logo" className="max-w-[35px]"/>
                <motion.span 
                    className="text-xl"
                    variants={AnimationVariants.textSlideRight}
                    initial='initial'
                    animate='animate'
                >
                    Ravolo
                </motion.span>
            </div>
        </Link>

        <div className="flex gap-4 items-center">
            <Link href={'events'}>
                <button className="flex items-center gap-1 group duration-200">
                    <span>Browse Events</span>
                    <RiArrowRightUpLine className="w-4 group-hover:ml-1 group-hover:w-5 duration-200"/>
                </button>
            </Link>
            <button className="bg-neutral-50 text-neutral-950 p-[1px] rounded active:scale-95 hover:bg-gradient-to-br hover:from-purple-900 hover:to-purple-500  hover:text-neutral-50 group duration-200">
                <div className="px-4 py-2 bg-neutral-50 text-neutral-950 group-hover:bg-neutral-900 group-hover:text-neutral-50 rounded duration-200">
                    Connect Wallet               
                </div>
            </button>
        </div>
    </motion.div>
  )
}

export default HomeNav
