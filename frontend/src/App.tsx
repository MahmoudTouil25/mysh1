import { useEffect, useState } from 'react';
import type { Equipment } from './services/api';
import { getEquipment } from './services/api';

function App() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getEquipment()
      .then((data) => {
        setEquipment(data);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load equipment');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: 40 }}>Loading equipment...</p>;
  }

  if (error) {
    return <p style={{ padding: 40, color: 'red' }}>{error}</p>;
  }

  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>MYSH Equipment</h1>

      {equipment.length === 0 && <p>No equipment found.</p>}

      {equipment.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: 12,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <h2>{item.name}</h2>
          <p>
            {item.brand} — {item.model} — {item.year}
          </p>
          <p>Location: {item.location}</p>
          <p>Availability: {item.availability}</p>
          <p>Daily rate: {item.dailyRate}</p>
          <p>Weekly rate: {item.weeklyRate}</p>
          <p>Monthly rate: {item.monthlyRate}</p>
        </div>
      ))}
    </main>
  );
}

export default App;