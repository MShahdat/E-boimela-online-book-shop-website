import { scale } from "framer-motion"


export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction == 'up' ? 30 : direction == 'down' ? -30 : 0,
      x: direction == 'left' ? -30 : direction == 'right' ? 30 : 0,
      opacity: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.8,
        delay: delay,
        type: 'spring',
        ease: [.25, .25, .25, .75]
      }
    }
  }
}


export const Zoom = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: delay,
        ease: 'easeInOut',
      }
    }
  }
}


export const Stagger = {
    hidden: {opacity: 0},
    show: {opacity: 1, 
      transition: {
        staggerChildren: .15
      }
    }
  }

export const StaggerChild = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0,
      transition: {duration: 1},
    },
  };