import React from 'react'

function PropsGosterimi({ isim, liste }) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #ffca28', 
      borderRadius: '12px', 
      backgroundColor: '#fff9e6',
      textAlign: 'center' 
    }}>
      <h2 style={{ color: '#ffa000' }}>🎁 Props (Veri Taşıma)</h2>
      <p>Merhaba <strong>{isim}</strong>, App.jsx'ten gelen liste:</p>
      
      <ul style={{ textAlign: 'left', display: 'inline-block', color: '#333' }}>
        {liste && liste.map((oge, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>{oge}</li>
        ))}
      </ul>
      
      <div style={{ marginTop: '15px', fontSize: '13px', color: '#666' }}>
        <em>(Bu liste .map() fonksiyonu ile otomatik oluşturuldu)</em>
      </div>
    </div>
  )
}

export default PropsGosterimi