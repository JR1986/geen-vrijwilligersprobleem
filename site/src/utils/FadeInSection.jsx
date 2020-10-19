import React from "react";
import { useInView } from 'react-intersection-observer';

function FadeInSection(props) {
    const { ref, inView } = useInView({
        rootMargin: '-200px 0px',
        triggerOnce: true,
    });

    return (
        <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'all 1.5s', willChange: 'opacity', }}>
            {props.children}
        </div>
    );
}

export default FadeInSection;