import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Sayac from './Sayac';
import PropsGosterimi from './PropsGosterimi';
import EfektEkrani from './EfektEkrani';
import LiftingState from './LiftingState';
import RefEkrani from './RefEkrani';
import ContextEkrani from './ContextEkrani'; 
import PerformansEkrani from './PerformansEkrani';
import OzetEkrani from './OzetEkrani'; // 1. YENİ EKRANI IMPORT ETTİK!

function App() {
  const kullaniciAdi = "Genç Yazılımcı";
  const ogrenilecekler = ["Props Mantığı", "Component Parçalama", "Veri Akışı"];

  return (
    <BrowserRouter>
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
        <h1>React Öğrenme Paneli</h1>

        {/* Üst Menü / Navigasyon */}
        <nav style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <NavLink to="/" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Özet</NavLink>
          <NavLink to="/sayac" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>useState</NavLink>
          <NavLink to="/props" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Props</NavLink>
          <NavLink to="/efekt" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>useEffect</NavLink>
          <NavLink to="/lifting" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Lifting State</NavLink>
          <NavLink to="/ref" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>useRef</NavLink>
          <NavLink to="/context" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>useContext</NavLink>
          <NavLink to="/performans" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Performans</NavLink>
        </nav>

        {/* Ekran Değişim Alanı */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Routes>
            {/* 2. BURAYI DEĞİŞTİRDİK: Doğrudan yeni bileşeni element olarak verdik */}
            <Route path="/" element={<OzetEkrani />} /> 
            
            <Route path="/sayac" element={<Sayac />} />
            <Route path="/props" element={<PropsGosterimi isim={kullaniciAdi} liste={ogrenilecekler} />} />
            <Route path="/efekt" element={<EfektEkrani />} />
            <Route path="/lifting" element={<LiftingState />} />
            <Route path="/ref" element={<RefEkrani />} />
            <Route path="/context" element={<ContextEkrani />} /> 
            <Route path="/performans" element={<PerformansEkrani />} />     
            
            <Route path="*" element={<h2>404 - Yolunu mu kaybettin?</h2>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Buton Stil Tanımlamaları
const btnStyle = { 
  padding: '10px', 
  textDecoration: 'none', 
  color: 'black', 
  borderRadius: '5px', 
  border: '1px solid #ccc', 
  fontWeight: 'bold',
  backgroundColor: '#f0f0f0'
};

const activeBtnStyle = { 
  ...btnStyle, 
  backgroundColor: '#2196f3', 
  color: 'white', 
  borderColor: '#1976d2' 
};

export default App;