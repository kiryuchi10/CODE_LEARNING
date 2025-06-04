// Projects.jsx
// 이미지/영상 파일 업로드 및 프로젝트 목록 렌더링

import React, { useState, useEffect } from "react";

const Projects = () => {
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch("http://localhost:8000/upload_file", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploadedUrl(`http://localhost:8000/uploads/${data.filename}`);
    alert(`파일 업로드 성공: ${data.filename}`);
  };

  return (
    <div className="page">
      <h2>프로젝트</h2>
      <ul>
        <li>Smart Sensor Dashboard</li>
        <li>Pixel Art Generator</li>
        <li>Missing Person Finder</li>
      </ul>

      <hr />
      <h3>파일 업로드 (이미지/영상)</h3>
      <input type="file" onChange={handleUpload} />
      {uploadedUrl && (
        <div>
          <p>미리보기:</p>
          {uploadedUrl.match(/\.(mp4|webm)$/) ? (
            <video width="300" controls src={uploadedUrl}></video>
          ) : (
            <img src={uploadedUrl} alt="업로드된 미리보기" width="300" />
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
