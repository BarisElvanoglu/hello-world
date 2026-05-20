import React, { createContext, useContext, useState } from 'react';

// 1. Veri havuzunu (Context) oluşturuyoruz
const TemaContext = createContext();

export default function ContextEkrani() {
  const [dark, setDark] = useState(false);

  // 2. Provider ile alt bileşenleri sarmalayıp veriyi dağıtıyoruz
  return (
    <TemaContext.Provider value={{ dark, setDark }}>
      <div style={{
        padding: '20px', 
        borderRadius: '10px',
        backgroundColor: dark ? '#333' : '#f9f9f9',
        color: dark ? '#fff' : '#333',
        border: '1px solid #ddd',
        marginTop: '20px',
        transition: 'all 0.3s ease'
      }}>
        <h2>useContext Öğrenme Paneli</h2>
        <p>Aşağıdaki buton ve yazıya hiçbir "prop" gönderilmedi!</p>
        
        {/* Alt bileşenleri çağırıyoruz, prop geçmiyoruz */}
        <TemaButonu />
        <TemaDurumu />
      </div>
    </TemaContext.Provider>
  );
}

// Alt Bileşen 1: Temayı değiştiren buton
function TemaButonu() {
  // 3. useContext hook'u ile merkezi havuzdan verileri çekiyoruz
  const { dark, setDark } = useContext(TemaContext); 
  return (
    <button 
      onClick={() => setDark(!dark)}
      style={{
        padding: '10px 20px',
        backgroundColor: dark ? '#fff' : '#222',
        color: dark ? '#222' : '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {dark ? 'Gündüz Moduna Geç' : 'Gece Moduna Geç'}
    </button>
  );
}

// Alt Bileşen 2: Mevcut temayı yazdıran metin
function TemaDurumu() {
  // Merkezi havuzdan sadece 'dark' durumunu çekiyoruz
  const { dark } = useContext(TemaContext);
  return (
    <p style={{ marginTop: '15px' }}>
      Şu an aktif tema: <b>{dark ? 'Karanlık (Dark Mode)' : 'Aydınlık (Light Mode)'}</b>
    </p>
  );
}