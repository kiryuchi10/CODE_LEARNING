import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Resume from './Resume';
import CV from './CV';
import Projects from './Projects';
import ContactForm from './ContactForm';

export default function Book() {
  return (
    <HTMLFlipBook width={500} height={600}>
      <div className="page"><Resume /></div>
      <div className="page"><CV /></div>
      <div className="page"><Projects /></div>
      <div className="page"><ContactForm /></div>
    </HTMLFlipBook>
  );
}
