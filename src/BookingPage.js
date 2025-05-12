import React, { useState } from 'react';

export default function BookingPage() {
  const [form, setForm] = useState({ name: '', phone: '', purpose: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("예약 완료! 이름: " + form.name + ", 날짜: " + form.date);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("/background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'sans-serif',
      padding: '40px'
    }}>
      <div style={{
        display: 'flex',
        maxWidth: '1100px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/map_banner.png" alt="지도" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1.1, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <img src="/logo.png" alt="로고" style={{ width: '240px', marginBottom: '30px' }} />
          <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#5B3D2E' }}>메종드명동 예약하기</h1>
          <input name="name" placeholder="이름" value={form.name} onChange={handleChange}
            style={{ padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} />
          <input name="phone" placeholder="연락처" value={form.phone} onChange={handleChange}
            style={{ padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} />
          <input name="date" type="date" value={form.date} onChange={handleChange}
            style={{ padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} />
          <textarea name="purpose" placeholder="사용 목적" value={form.purpose} onChange={handleChange}
            style={{ padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', height: '100px' }} />
          <button onClick={handleSubmit}
            style={{
              padding: '14px',
              backgroundColor: '#865439',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#a06b55'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#865439'}
          >
            예약하기
          </button>
        </div>
      </div>
    </div>
  );
}
