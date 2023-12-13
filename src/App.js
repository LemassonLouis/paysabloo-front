import './App.css';
import { useEffect, useState } from 'react';
import getDomains from './services/domains/domains';

function App() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    getDomains().then(domains => setDomains(domains));
  }, []);

  return (
    <>
      <h1>PaysaBloo</h1>
      {domains.map(domain => {
        return (
          <section key={domain.id}>
            <h2>{domain.title}</h2>
          </section>
        )
      })}
    </>
  );
}

export default App;
