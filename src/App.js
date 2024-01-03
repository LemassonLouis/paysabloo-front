import { useEffect, useState } from 'react';

import getDomains from './services/domains/domains';

import Domains from './components/domains/domains';

import './App.css';

function App() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    getDomains().then(domains => setDomains(domains));
  }, []);

  return (
    <>
      <header>
        <h1>PaysaBloo</h1>
      </header>

      <main>
        <Domains domains={domains} />
      </main>

      <footer>
        <p>Copyright</p>
      </footer>
    </>
  );
}

export default App;
