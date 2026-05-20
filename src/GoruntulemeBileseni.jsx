function GoruntulemeBileseni({ metin }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', backgroundColor: '#fff', marginTop: '10px' }}>
      <p style={{ fontSize: '12px', color: '#666' }}>Burası Child 2 (Görüntüleme)</p>
      <strong>Paylaşılan Veri:</strong> {metin || "Henüz bir şey yazılmadı..."}
    </div>
  );
}
export default GoruntulemeBileseni;