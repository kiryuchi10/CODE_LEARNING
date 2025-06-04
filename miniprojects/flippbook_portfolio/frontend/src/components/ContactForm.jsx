// ContactForm.jsx
// 사용자로부터 이름, 이메일, 메시지를 받아 백엔드로 전송

import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("메시지가 전송되었습니다.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <h2>연락하기</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="이름" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="이메일" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="메시지" value={form.message} onChange={handleChange} required />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

export default ContactForm;
