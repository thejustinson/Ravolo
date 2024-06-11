export const AnimationVariants = {
    dropNav: {
        initial: {y: -100},
        animate: {y: 0}
    },
    textSlideRight:{
        initial:{x: -100},
        animate:{
            x: 0,
            transition:{
                delay: 0.3
            }
        }
    },
    slideUp:{
        initial:{y: 200, opacity: 0},
        animate:{
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.3
            }
        }
    },
}

export const AestheticDivAnimations = {
    gradientBlurScaleUp:{
        initial: {
            scaleX: 0,
            translateX: '-50%'
        },
        animate: {
            scaleX: 1,
            translateX: '-50%',
            transition:{
                delay: 0.5,
                duration: 1
            }
        }
    }
}