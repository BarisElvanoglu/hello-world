import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Sayac from './Sayac';
import PropsGosterimi from './PropsGosterimi';
import EfektEkrani from './EfektEkrani';
import LiftingState from './LiftingState';

function App() {
  const kullaniciAdi = "Genç Yazılımcı";
  const ogrenilecekler = ["Props Mantığı", "Component Parçalama", "Veri Akışı"];

  return (
    <BrowserRouter>
      <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
        <h1>React Öğrenme Paneli</h1>

        {/* 1. Linkler: Sayfayı yenilemeden URL'i değiştirirler */}
        <nav style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <NavLink to="/" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Özet</NavLink>
          <NavLink to="/sayac" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>useState</NavLink>
          <NavLink to="/props" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Props</NavLink>
          <NavLink to="/efekt" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>useEffect</NavLink>
          <NavLink to="/lifting" style={({ isActive }) => isActive ? activeBtnStyle : btnStyle}>Lifting State</NavLink>
        </nav>

        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* 2. Routes: URL'e göre hangi bileşenin render edileceğini belirler */}
          <Routes>
            <Route path="/" element={
              <div>
                <h2>Özet Ekranı</h2>
                <p>Artık URL tabanlı navigasyon kullanıyoruz!</p>
              </div>
            } />
            <Route path="/sayac" element={<Sayac />} />
            <Route path="/props" element={<PropsGosterimi isim={kullaniciAdi} liste={ogrenilecekler} />} />
            <Route path="/efekt" element={<EfektEkrani />} />
            <Route path="/lifting" element={<LiftingState />} />
            
            {/* Yanlış bir URL girilirse burası çalışır */}
            <Route path="*" element={<h2>404 - Yolunu mu kaybettin?</h2>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Stil objeleri
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