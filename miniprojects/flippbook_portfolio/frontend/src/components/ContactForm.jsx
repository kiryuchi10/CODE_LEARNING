import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('메시지가 전송되었습니다.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>📩 연락하기</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="메시지"
          rows="3"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default ContactForm;
