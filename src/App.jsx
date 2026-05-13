import { useState } from 'react'
import Sayac from './Sayac'
import PropsGosterimi from './PropsGosterimi'
import EfektEkrani from './EfektEkrani' // 1. Yeni bileşeni çağır

function App() {
  const [ekran, setEkran] = useState('ozet')

  const kullaniciAdi = "Genç Yazılımcı"
  const ogrenilecekler = ["Props Mantığı", "Component Parçalama", "Veri Akışı"]

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>React Öğrenme Paneli</h1>

      <nav style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => setEkran('ozet')} style={btnStyle}>Özet</button>
        <button onClick={() => setEkran('sayac')} style={btnStyle}>useState</button>
        <button onClick={() => setEkran('props')} style={btnStyle}>Props</button>
        {/* 2. Yeni Buton */}
        <button onClick={() => setEkran('efekt')} style={{...btnStyle, backgroundColor: '#4caf50', color: 'white'}}>useEffect</button>
      </nav>

      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        {ekran === 'ozet' && <div><h2>Özet Ekranı</h2><p>Kurulum tamamlandı!</p></div>}
        {ekran === 'sayac' && <Sayac />}
        {ekran === 'props' && <PropsGosterimi isim={kullaniciAdi} liste={ogrenilecekler} />}
        {/* 3. Yeni Ekran Alanı */}
        {ekran === 'efekt' && <EfektEkrani />}
      </div>
    </div>
  )
}

const btnStyle = { padding: '10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc', fontWeight: 'bold' }

export default App