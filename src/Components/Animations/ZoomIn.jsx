import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ZoomIn = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: 'spring',
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }
        },
        hidden: { opacity: 0, scale: 0.5 }
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

export default ZoomIn;
