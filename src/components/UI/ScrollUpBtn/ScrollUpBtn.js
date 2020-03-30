import React from 'react'
import classes from './ScrollUpBtn.module.css'
import { animateScroll as scroll } from 'react-scroll';

export const ScrollUpBtn = () => {
    return (
        <div className={classes.scrollToTopContainer} onClick={() => scroll.scrollToTop() }>
            <span>go up</span><i class="fas fa-chevron-up"></i>
        </div>
    )
}
