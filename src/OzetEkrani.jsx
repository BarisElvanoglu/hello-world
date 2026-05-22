import React from 'react';

function OzetEkrani() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fafafa', maxWidth: '850px', margin: '0 auto' }}>
      <h2>Özet Ekranı</h2>
      <p style={{ color: '#666' }}>Projende kullandığın temel React konseptlerinin açıklamaları ve tek satırlık pratik kullanımları:</p>
      
      {/* Konu Özetleri Tablosu */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left', fontSize: '13px' }}>
        <thead>
          <tr style={{ backgroundColor: '#2196f3', color: 'white' }}>
            <th style={tableHeaderStyle}>Konu / Hook</th>
            <th style={tableHeaderStyle}>Ne İşe Yarar? (Detaylı Özeti)</th>
            <th style={tableHeaderStyle}>Tek Satır Örnek Kullanım</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}><strong>useState</strong></td>
            <td style={tableCellStyle}>Bileşen içinde zamanla değişebilen, güncellendiğinde ekranın o kısmını otomatik olarak yeniden çizen dinamik verileri (state) yönetir.</td>
            <td style={codeCellStyle}><code>const [sayac, setSayac] = useState(0);</code></td>
          </tr>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={tableCellStyle}><strong>Props</strong></td>
            <td style={tableCellStyle}>Üst bileşenden alt bileşene veri aktarır; aktarılan yapıda 1. eleman mevcut değişken, 2. eleman bunu değiştirecek metot (fonksiyon), 3. eleman ise varsayılan (default) değerdir.</td>
            <td style={codeCellStyle}><code>{"const { veri, metot, def = 'Varsayılan' } = props;"}</code></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><strong>useEffect</strong></td>
            <td style={tableCellStyle}>Bileşen ekrana ilk yüklendiğinde (mount), belirli bir veri değiştiğinde veya ekrandan kalkarken (unmount) çalışacak yan etkileri (API istekleri) yönetir.</td>
            <td style={codeCellStyle}><code>{"useEffect(() => { fetchAPI(); }, [bagimlilik]);"}</code></td>
          </tr>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={tableCellStyle}><strong>Lifting State</strong></td>
            <td style={tableCellStyle}>Aynı veriyi kullanması gereken kardeş bileşenlerin ortak durumunu, veriyi yönetebilmeleri için ortak olan en yakın üst babaya (parent) taşıma işlemidir.</td>
            <td style={codeCellStyle}><code>{"// State üst bileşene taşınır, alta props ile iletilir."}</code></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><strong>useRef</strong></td>
            <td style={tableCellStyle}>Ekranı (render) yeniden tetiklemeden hafızada kalıcı veri saklamayı ve HTML elemanlarına (input elementine odaklanma gibi) doğrudan erişim sağlamayı kolaylaştırır.</td>
            <td style={codeCellStyle}><code>const inputRef = useRef(null); inputRef.current.focus();</code></td>
          </tr>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={tableCellStyle}><strong>useContext</strong></td>
            <td style={tableCellStyle}>Verileri alt bileşenlere kat kat (`prop drilling`) taşımak yerine, tüm projedeki her bileşenin doğrudan erişebileceği global bir merkezi veri havuzu oluşturur.</td>
            <td style={codeCellStyle}><code>const tema = useContext(TemaContext);</code></td>
          </tr>
          <tr>
            <td style={tableCellStyle}><strong>Performans</strong></td>
            <td style={tableCellStyle}>`useMemo` ile ağır matematiksel hesaplamaları, `useCallback` ile fonksiyon referanslarını hafızada tutarak bileşenlerin gereksiz yere tekrar çizilmesini (re-render) engeller.</td>
            <td style={codeCellStyle}><code>{"const optimizeFonks = useCallback(() => {}, []);"}</code></td>
          </tr>
        </tbody>
      </table>

      {/* KRİTİK SORU-CEVAP BÖLÜMÜ */}
      <div style={{ marginTop: '30px', textAlign: 'left', borderTop: '2px solid #2196f3', paddingTop: '15px' }}>
        <h3>💡 Kritik Öğrenme Notları (Soru - Cevap)</h3>
        
        <div style={faqBoxStyle}>
          <strong>Q: <code>setSayac(prev =&gt; prev + 1)</code> kullanımındaki <code>prev</code> nedir, React bunu nasıl anlıyor?</strong>
          <p style={{ margin: '5px 0 0 0', color: '#333' }}>
            <strong>A:</strong> O bir <b>fonksiyondur (Arrow Function)</b>. İçine fonksiyon yazdığın an React, hafızasındaki <u>en güncel ve garanti</u> state değerini bu fonksiyona parametre olarak fırlatır. İsmine ne dediğin önemli değildir (prev, x, eskiDeger), React sıradan anlar.
          </p>
        </div>

        <div style={faqBoxStyle}>
          <strong>Q: <code>useState</code> komple sayfayı mı render eder? Neden <code>useState</code> butonuna basınca <code>useRef</code> alanı da güncellendi?</strong>
          <p style={{ margin: '5px 0 0 0', color: '#333' }}>
            <strong>A:</strong> Evet, <code>useState</code> güncellendiğinde bileşen yukarıdan aşağıya <b>komple yeniden çalışır (re-render)</b>. Ref alanının güncellenme sebebi ref'in kendi gücü değildir; <code>useState</code> sayfayı baştan aşağı yeniden çizerken o sırada ref'in güncel değerini de HTML'e basmış olur. Ref, rüzgardan faydalanır.
          </p>
        </div>

        <div style={faqBoxStyle}>
          <strong>Q: <code>useRef</code> sayfayı render etmiyorsa HTML elemanına (focus vb.) nasıl dokunabiliyoruz?</strong>
          <p style={{ margin: '5px 0 0 0', color: '#333' }}>
            <strong>A:</strong> Çünkü sayfayı baştan çizmiyoruz! Tarayıcının ekranda halihazırda canlı duran gerçek HTML elemanına arkadan gizli bir kablo (tünel) çekiyoruz. Sayfayı yıkıp yapmadan doğrudan o elemana gidip cımbızla müdahale ediyoruz.
          </p>
        </div>

        <div style={faqBoxStyle}>
          <strong>Q: <code>useState</code> ile de HTML'e focuslanabilir miyim? Neden tercih edilmez?</strong>
          <p style={{ margin: '5px 0 0 0', color: '#333' }}>
            <strong>A:</strong> Evet, <code>autoFocus={"{state}"}</code> ile yapılabilir. Ancak sadece imleci kutunun içine sokmak gibi fiziksel bir eylem için <b>tüm sayfayı baştan aşağı çöpe atıp yeniden çizdirmek (re-render)</b> büyük bir performans israfıdır. Ref ise sayfaya dokunmadan sadece imleci odaklar.
          </p>
        </div>
      </div>
    </div>
  );
}

// Stil Tanımlamaları
const tableHeaderStyle = {
  padding: '12px 10px',
  border: '1px solid #ddd',
  fontWeight: 'bold'
};

const tableCellStyle = {
  padding: '12px 10px',
  border: '1px solid #ddd',
  lineHeight: '1.5'
};

const codeCellStyle = {
  ...tableCellStyle,
  fontFamily: 'Courier New, monospace',
  backgroundColor: '#f4f4f4',
  color: '#c7254e',
  fontWeight: 'bold'
};

const faqBoxStyle = {
  backgroundColor: '#e3f2fd',
  padding: '12px',
  borderRadius: '6px',
  marginBottom: '10px',
  borderLeft: '5px solid #2196f3',
  fontSize: '13px',
  lineHeight: '1.5'
};

export default OzetEkrani;