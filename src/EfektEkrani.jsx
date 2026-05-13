import { useState, useEffect } from 'react'

function EfektEkrani() {
  const [sayac, setSayac] = useState(0);
  const [metin, setMetin] = useState("");

  // 1. KULLANIM: Sayfa ilk açıldığında çalışır (Mounting)
  useEffect(() => {
    alert("Efekt Ekranına Hoş Geldin!  (Bu sadece 1 kez çalışır)");
    
    // 3. KULLANIM: Temizlik (Cleanup) - Bileşenden ayrılınca çalışır
    return () => {
      console.log("Efekt Ekranı kapatıldı, temizlik yapıldı.");
    };
  }, []); // Boş dizi []

  // 2. KULLANIM: Belirli bir değişken değişince çalışır (Updating)
  useEffect(() => {
    if (sayac !== 0) {
      console.log(`Sayaç güncellendi: ${sayac}`);
    }
  }, [sayac]); // Sadece 'sayac' değişince çalışır

  return (
    <div style={{ padding: '20px', border: '2px solid #4caf50', borderRadius: '12px', backgroundColor: '#f1f8e9' }}>
      <h2 style={{ color: '#2e7d32' }}>🧪 useEffect Laboratuvarı</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>1. Durum: Sayfa Açılışı</h4>
        <p style={{ fontSize: '14px' }}>Sayfa ilk açıldığında bir `alert` aldın. Bu <strong>[]</strong> kullanımıdır.</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>2. Durum: Sayaç Takibi (Değişim)</h4>
        <p>Sayaç: <strong>{sayac}</strong></p>
        <button onClick={() => setSayac(sayac + 1)} style={miniBtnStyle}>Artır</button>
        <p style={{ fontSize: '12px', color: '#666' }}>Artırdığında konsola (F12) bak, değişim izleniyor.</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>3. Durum: Temizlik (Cleanup)</h4>
        <p style={{ fontSize: '14px' }}>Başka bir ekrana geçtiğinde (Özet gibi) konsolda "temizlik yapıldı" yazısını göreceksin.</p>
      </div>
    </div>
  )
}

const miniBtnStyle = { padding: '5px 15px', cursor: 'pointer', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px' }

export default EfektEkrani