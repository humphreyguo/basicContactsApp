import { React, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './Components/InfoCard';

function App() {
  const [data, setData] = useState();
  const fetchContacts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  document.body.className = 'bg-dark';

  return (
    <div className="App d-flex flex-column gap-3">
      {data &&
        data.map((info, i) => {
          return <InfoCard key={i} person={info} />;
        })}
    </div>
  );
}

export default App;
