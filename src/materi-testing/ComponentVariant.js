import React, { useEffect, useState } from 'react'

export const data = [
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu",
];

const ComponentVariant = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Zidane");
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        {user && <p>Selamat Datang {user} !</p>}
      </div>
      <div>
        <h5>Hari hari yg ada</h5>
        <ul>
          {data.map((hari, index) => (<li data-testid="hari" key={index}>{hari}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default ComponentVariant