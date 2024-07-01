import Link from "next/link"
import {motion} from "framer-motion"
import Image from "next/image"
import { AnimationVariants } from "@/utils/AnimationVariants"

const Logo = () => {
  return (
    <Link href={'/'}>
        <div className="flex gap-2 justify-center md:justify-start items-center overflow-x-hidden md:min-w-[200px]">
            <Image src={'/logo-white.svg'} width={100} height={100} alt="Ravolo Logo" className="max-w-[25px] md:max-w-[35px]"/>
            <motion.span 
                className="hidden md:block text-xl"
                variants={AnimationVariants.textSlideRight}
                initial='initial'
                animate='animate'
            >
                Ravolo
            </motion.span>
        </div>
    </Link>
  )
}

export default Logo
