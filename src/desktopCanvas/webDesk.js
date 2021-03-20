import React from 'react'
import LottieAnimationTwo from './deskBackground.js'
import desktopBack from './desktopBack'

const DesktopBackWeb = () => {
    return(
        <React.Fragment>
        <div className = "lottie-back">
        {<LottieAnimationTwo lottie = {desktopBack} />}
        </div>
        </React.Fragment>
    )
}

export default DesktopBackWeb