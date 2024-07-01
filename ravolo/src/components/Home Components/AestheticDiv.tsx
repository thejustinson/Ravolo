"use client"

import {motion} from "framer-motion"
import Comet from "../../utils/Comet"

interface AestheticDivProps{
  aestheticGradientTop: number
}

const AestheticDiv = ({aestheticGradientTop}: AestheticDivProps) => {
  return (
    <div className="w-screen h-screen absolute top-0 overflow-hidden">

        <Comet/>

        <motion.div 
            className={`w-[calc(102vw)] h-screen bg-purple-700 rounded-[50px] absolute left-1/2 -translate-x-1/2 shadow-2xl p-[2px] flex justify-center`}
            initial= {{
                scaleX: 0,
                translateX: '-50%',
                y: `${aestheticGradientTop}vh`
            }}
            animate= {{
              scaleX: 1,
              translateX: '-50%',
              y: aestheticGradientTop + 21
            }}
            transition= {{
                delay: 0.6,
                duration: 1
            }}
        >
                <div className="w-[calc(102vw)] h-screen bg-gradient-to-r from-purple-950 to-purple-700 blur-3xl top-0 rounded-[50px] shadow-2xl absolute">
                
                </div>
                <div className="relative w-[calc(102vw)] h-screen bg-neutral-950 rounded-[48px] shadow-2xl">
                    
                </div>
        </motion.div>
    </div>
  )
}

export default AestheticDiv
