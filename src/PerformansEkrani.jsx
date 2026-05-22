import React, { useState, useMemo, useCallback } from 'react';

export default function PerformansEkrani() {
  const [sayac, setSayac] = useState(0);
  const [metin, setMetin] = useState("");

  // 1. useMemo: Ağır bir matematiksel hesabı hafızaya alır
  const buyukHesaplama = useMemo(() => {
    console.log("Ağır hesaplama çalıştı... ⏳");
    let sonuc = 0;
    for (let i = 0; i < 50000000; i++) {
      sonuc += i;
    }
    return sonuc;
  }, []); // Boş dizi: Sadece sayfa ilk açıldığında çalışır

  // 2. useCallback: Fonksiyonun hafızadaki referansını korur
  const sayaciArttir = useCallback(() => {
    setSayac((onceki) => onceki + 1);
  }, []); 

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', marginTop: '20px' }}>
      <h2>Performans Hook'ları</h2>
      <h3>(useMemo & useCallback)</h3>
      
      <p style={{ color: '#666', fontSize: '13px' }}>
        F12 basıp konsolu aç! Input'a yazı yazarken ağır hesaplama tetiklenmez.
      </p>

      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#eaeaea', borderRadius: '5px' }}>
        <strong>useMemo Sonucu:</strong> {buyukHesaplama}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={metin} 
          onChange={(e) => setMetin(e.target.value)} 
          placeholder="Buraya yazı yazın..."
          style={{ padding: '8px', width: '80%', marginBottom: '10px' }}
        />
        <p>Yazılan Metin: {metin}</p>
      </div>

      <ArttirmaButonu tiklandiginda={sayaciArttir} sayi={sayac} />
    </div>
  );
}

// Alt bileşeni React.memo ile sarmalayarak koruma altına alıyoruz
const ArttirmaButonu = React.memo(function ArttirmaButonu({ tiklandiginda, sayi }) {
  console.log("Buton bileşeni render oldu! 🔘");
  return (
    <div style={{ borderTop: '1px dashed #ccc', paddingTop: '10px' }}>
      <p>Sayaç Değeri: <strong>{sayi}</strong></p>
      <button onClick={tiklandiginda} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Sayaç +1 (useCallback)
      </button>
    </div>
  );
});