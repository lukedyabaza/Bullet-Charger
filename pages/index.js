import { useState } from 'react';

export default function Home() {
  const [signal, setSignal] = useState('');

  async function scanChart() {
    const res = await fetch('/api/scanner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ candles: sampleData })
    });
    const data = await res.json();
    setSignal(`${data.signal} — ${data.reason}`);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bullet Charger Trading Scanner</h1>
      <button onClick={scanChart}>Scan Chart</button>
      <p>{signal}</p>
    </div>
  );
}

const sampleData = [
  { type: 'normal' },
  { type: 'normal' },
  { type: 'engulfing' }
];
