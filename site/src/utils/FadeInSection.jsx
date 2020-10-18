import React, { useState, useEffect, useRef } from "react";
import styled from '@emotion/styled';

const Section = styled.div`
    opacity: 0;
    visibility: hidden;
    transition: opacity 2s ease-out, transform 2s ease-out;
    will-change: opacity, visibility;

    ${(props) => props.isVisible ?
        `opacity: 1;
        transform: none;
        visibility: visible;` : null
    }
`;

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <Section
            isVisible={isVisible}
            ref={domRef}
        >
            {props.children}
        </Section>
    );
}

export default FadeInSection;