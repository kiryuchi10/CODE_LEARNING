// Book.jsx
// 페이지 넘김 인터랙션 구현 컴포넌트

import React from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "./Cover";
import Resume from "./Resume";
import CV from "./CV";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

const Book = () => {
  return (
    <HTMLFlipBook width={500} height={600}>
      <Cover />
      <Resume />
      <CV />
      <Projects />
      <ContactForm />
    </HTMLFlipBook>
  );
};

export default Book;
