import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const SlideUp = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 75 }
    };

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);
    return (
        <div>
            <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
                {children}
            </motion.div>
        </div>
    );
};

export default SlideUp;
