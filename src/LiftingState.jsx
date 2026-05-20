import { useState } from 'react';
import InputBileseni from './InputBileseni';
import GoruntulemeBileseni from './GoruntulemeBileseni';

function LiftingState() {
  const [paylasilanMetin, setPaylasilanMetin] = useState("");

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0', borderRadius: '12px', border: '2px solid #ff9800' }}>
      <h3 style={{ color: '#e65100', marginTop: 0 }}>⬆️ State'i Yukarı Taşıma</h3>
      <p style={{ fontSize: '14px' }}>Veri aşağıda değil, bu turuncu kutunun (Baba) hafızasında duruyor.</p>
      
      <InputBileseni metin={paylasilanMetin} setMetin={setPaylasilanMetin} />
      <GoruntulemeBileseni metin={paylasilanMetin} />
    </div>
  );
}
export default LiftingState;