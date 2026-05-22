import React, { useState, useEffect } from 'react';

function UserList() {
  // 1. Durum (State) Yönetimleri
  const [users, setUsers] = useState([]);       // Gelen kullanıcı listesini tutar
  const [loading, setLoading] = useState(true); // Sayfa ilk açıldığında yükleniyor modundadır
  const [error, setError] = useState(null);     // Olası hataları yakalar

  // 2. Yan Etki (Effect) Yönetimi
  useEffect(() => {
    // Asenkron veri çekme fonksiyonumuz
    const fetchUsers = async () => {
      try {
        setLoading(true); // İstek başlamadan önce yükleniyor durumunu garantiye alıyoruz
        
        // Açık API'ye istek atıyoruz
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // HTTP durum kodu 200-299 arasında değilse hata fırlat (Örn: 404 veya 500)
        if (!response.ok) {
          throw new Error(`Sunucu hatası: ${response.status}`);
        }
        
        const data = await response.json(); // Gelen ham veriyi JSON formatına çeviriyoruz
        setUsers(data);                     // Başarılıysa veriyi state'e aktar
      } catch (err) {
        setError(err.message);              // Hata yakalanırsa mesajı state'e kaydet
      } finally {
        setLoading(false);                  // İstek başarılı da olsa hatalı da olsa yüklenme bitti
      }
    };

    fetchUsers(); // Fonksiyonu tetikliyoruz
  }, []); // Boş bağımlılık dizisi: Bu istek bileşen ekrana ilk geldiğinde SADECE BİR KERE çalışır

  // 3. Koşullu Arayüz (Conditional Rendering) Yönetimi

  // Eğer veri hala yükleniyorsa ekranda sadece bunu göster, aşağıdaki kodlara geçme
  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Kullanıcı verileri yükleniyor...</div>;
  }

  // Eğer bir hata oluştuysa kullanıcıyı bilgilendir
  if (error) {
    return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>Hata Oluştu: {error}</div>;
  }

  // Her şey yolundaysa asıl listeyi ekrana bas
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Kullanıcı Listesi (API)</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user) => (
          <li 
            key={user.id} 
            style={{
              padding: '12px',
              margin: '8px 0',
              backgroundColor: '#f9f9f9',
              borderRadius: '6px',
              borderLeft: '4px solid #0070f3',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <strong>{user.name}</strong> — <span style={{ color: '#555' }}>{user.email}</span>
            <br />
            <small style={{ color: '#888' }}>Şirket: {user.company.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;