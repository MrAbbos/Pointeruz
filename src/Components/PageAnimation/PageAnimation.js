import React from 'react'
import {animationOne, animationTwo, transitionTwo, transitionOne} from '../../Animation/index'
import { motion } from 'framer-motion';


function PageAnimation() {
    return (
        <div>
            <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transitionOne}
            className={'dinamicOne'}
            ></motion.div>
            <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationTwo}
            transition={transitionTwo}
            className={'dinamicTwo'}
            ></motion.div>
        </div>
    )
}

export default PageAnimation
