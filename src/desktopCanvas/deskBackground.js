import React from 'react'
import Lottie from 'react-lottie'

export default function LottieAnimationTwo({lottie, width, height}){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings : {
            preserveAspectRatio: "xMidYMid slice",
        },
        }
    

    return(
        <div>
            <Lottie options={defaultOptions} height = {height} width = {width} />
        </div>
    )
    }
