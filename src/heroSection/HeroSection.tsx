import React from 'react';

interface HeroSectionProps {
  content: React.ReactNode;
}


const HeroSection: React.FC<HeroSectionProps> = ({content}) => {
  return (
    <> {content}   </>
  )
}

export default HeroSection