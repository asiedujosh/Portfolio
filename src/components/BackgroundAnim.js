import React from 'react'
import LottieAnimation from '../canvas/backgroundInit'
import Backdoor from '../canvas/background'

const BackgroundAnim = () => {
    return(
        <React.Fragment>
        <div className = "lottie-back">
        {<LottieAnimation lottie = {Backdoor} />}
        </div>
        </React.Fragment>
    )
}

export default BackgroundAnim