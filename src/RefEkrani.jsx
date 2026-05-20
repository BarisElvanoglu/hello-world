import { useRef, useState } from 'react';

function RefEkrani() {
  // 1. DOM Erişimi için ref
  const inputRef = useRef(null);

  // 2. Render tetiklemeyen değer saklama (Hafıza) için ref
  const tiklamaSayisiRef = useRef(0);
  
  // Sadece farkı görmek için bir state
  const [renderSayisi, setRenderSayisi] = useState(0);

  const odaklan = () => {
    // Doğrudan HTML elementine müdahale ediyoruz
    inputRef.current.focus();
    inputRef.current.style.border = "2px solid red";
  };

  const refArtir = () => {
    tiklamaSayisiRef.current += 1;
    console.log("Ref değeri (Sayfa render olmadı):", tiklamaSayisiRef.current);
    // Not: Ekranda rakamın değişmediğini göreceksin çünkü Ref render tetiklemez!
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fffbe6' }}>
      <h2>useRef Dünyası</h2>
      
      <section style={{ marginBottom: '20px' }}>
        <h4>1. DOM'a Dokunmak</h4>
        <input ref={inputRef} type="text" placeholder="Odaklan butonuna bas..." style={{padding: '5px'}} />
        <button onClick={odaklan} style={sariBtnStyle}>Odaklan & Boya</button>
      </section>

      <hr />

      <section>
        <h4>2. Sessiz Hafıza (Render Tetiklemez)</h4>
        <p>Ref Değeri (Konsola Bak): {tiklamaSayisiRef.current}</p>
        <p>Görünür State: {renderSayisi}</p>
        
        <button onClick={refArtir} style={sariBtnStyle}>Ref'i Artır (Gizli)</button>
        <button onClick={() => setRenderSayisi(prev => prev + 1)} style={maviBtnStyle}>
          Sayfayı Render Et (State)
        </button>
        <p><small>Önce Ref'i birkaç kez artır, sonra Sayfayı Render Et butonuna bas. Değerin topluca geldiğini göreceksin.</small></p>
      </section>
    </div>
  );
}

const sariBtnStyle = { marginLeft: '10px', padding: '5px 10px', backgroundColor: '#ffc107', cursor: 'pointer', border: 'none', borderRadius: '4px' };
const maviBtnStyle = { marginLeft: '10px', padding: '5px 10px', backgroundColor: '#2196f3', color: 'white', cursor: 'pointer', border: 'none', borderRadius: '4px' };

export default RefEkrani;