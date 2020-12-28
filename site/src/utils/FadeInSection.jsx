import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-200px 0px',
    triggerOnce: true,
  });

  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'all 1.5s', willChange: 'opacity' }}>
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
