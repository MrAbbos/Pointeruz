import { motion } from 'framer-motion'
import React from 'react'
import { newsContainer, newsItem } from '../../Animation'
import PageAnimation from '../PageAnimation/PageAnimation'
import './News.css'

function News() {
    return (
        <div className={"News"}>
            <PageAnimation/>
            <motion.ul
                className={"container"}
                variants={newsContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                {
                    [0, 1, 2, 3, 4, 5, 6, 8, 9].map(index =>
                        <motion.li key={index} className={"item"} variants={newsItem} />
                    )
                }
            </motion.ul>
        </div>
    )
}

export default News
