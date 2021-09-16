
export const animationOne = {
    in: {
        opacity: 1,
        y: "-100vh",
        scale: 1,
        x: 0
    }, out: {
        opacity: 0.3,
        y: "100vh",
    }
}

export const animationTwo = {
    in: {
        opacity: 1,
        y: "-100vh",
        scale: 1,
        x: 0
    }, out: {
        opacity: 1,
        y: "130vh",
    }
}


export const newsContainer = {
    hidden: { opacity: 1, scale: 0 },
    out: {
        scale: 1.5
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1.8,
            staggerChildren: 0.2
        }
    }
}

export const PageOpen ={
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      delay:1.5,
      transition: {
        delayChildren: 1.8
      }
    }
}

export const newsItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const transitionOne = {
    duration: 1.5
}
export const transitionTwo = {
    duration: 1.8
}