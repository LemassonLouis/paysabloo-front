import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    console.log("useEffect()");
    axios.get("http://localhost:1337/api/domains").then(result => {
      console.log("result", result);
      const domains = result.data.data.map(elm => {
        elm.attributes.id = elm.id;
        return elm.attributes;
      });
      setDomains(domains);
    });
  });

  return (
    <div className="App">
      <h1>Hello world !</h1>
      {domains.map(domain => {
        return <p key={domain.id}>{domain.title}</p>
      })}
    </div>
  );
}

export default App;
