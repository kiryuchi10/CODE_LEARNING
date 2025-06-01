import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/contact', form);
    alert('Message sent!');
  };

  return (
    <div>
      <h2>Contact</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <textarea placeholder="Message" onChange={e => setForm({ ...form, message: e.target.value })} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}
