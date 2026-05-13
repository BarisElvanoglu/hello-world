import { useState } from 'react'

function Sayac() {
  // --- 1. DEĞİŞKEN TANIMLAMA (STATE) ---
  // sayi: Mevcut veriyi tutar.
  // setSayi: Bu veriyi güncelleyip React'e "ekranı yenile" diyen fonksiyondur.
  // useState(0): Başlangıç değerini 0 yapar.
  const [sayi, setSayi] = useState(0)

  // --- 2. FONKSİYONLAR (MANTIK) ---
  const artir = () => setSayi(sayi + 1)
  const azalt = () => setSayi(sayi - 1)
  const sifirla = () => setSayi(0)

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#61dafb' }}>React State (Hafıza) Mantığı</h2>
      
      <div style={demoBoxStyle}>
        <h3>Canlı Uygulama</h3>
        <p style={{ fontSize: '32px', margin: '10px 0' }}>{sayi}</p>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={artir} style={btnStyle}>Artır (+)</button>
          <button onClick={azalt} style={btnStyle}>Azalt (-)</button>
          <button onClick={sifirla} style={{ ...btnStyle, backgroundColor: '#ff4757' }}>Sıfırla</button>
        </div>
      </div>

      <div style={infoBoxStyle}>
        <h4>💡 Teknik Notlar</h4>
        <ul style={{ textAlign: 'left' }}>
          <li>
            <strong>useState:</strong> React'in değişkenleri "hatırlamasını" sağlar. Normal değişkenler (`let x = 0`) değiştiğinde ekran güncellenmez.
          </li>
          <li>
            <strong>setSayi:</strong> Bu fonksiyon çağrıldığında React, <em>"Veri değişti, sadece sayının yazdığı kısmı tekrar çizmeliyim"</em> der (Re-render).
          </li>
          <li>
            <strong>Event Handling:</strong> <code>onClick</code> içine yazdığımız fonksiyonlar, kullanıcı etkileşimini yakalar.
          </li>
        </ul>
      </div>
    </div>
  )
}

// --- TASARIM (STILLER) ---
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
  textAlign: 'center'
}

const demoBoxStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '20px',
  borderRadius: '15px',
  border: '2px solid #61dafb',
  marginBottom: '20px'
}

const infoBoxStyle = {
  backgroundColor: '#f9f9f9',
  color: '#333',
  padding: '15px',
  borderRadius: '10px',
  fontSize: '14px',
  lineHeight: '1.6',
  borderLeft: '5px solid #61dafb'
}

const btnStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#61dafb',
  color: 'black',
  fontWeight: 'bold'
}

export default Sayac