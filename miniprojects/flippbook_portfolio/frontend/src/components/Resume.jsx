// Resume.jsx
// 백엔드에서 이력서 데이터를 불러와서 렌더링

import React, { useEffect, useState } from "react";

const Resume = () => {
  const [resumeItems, setResumeItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/resume")
      .then((res) => res.json())
      .then((data) => setResumeItems(data));
  }, []);

  return (
    <div className="page">
      <h2>이력서 (Resume)</h2>
      {resumeItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Resume;
