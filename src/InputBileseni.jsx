function InputBileseni({ metin, setMetin }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <p style={{ fontSize: '12px', color: '#666' }}>Burası Child 1 (Giriş)</p>
      <input 
        type="text" 
        value={metin} 
        onChange={(e) => setMetin(e.target.value)} 
        placeholder="Ortak veriyi değiştir..."
        style={{ padding: '8px', width: '80%' }}
      />
    </div>
  );
}
export default InputBileseni;