import React, { useState } from 'react';
import axios from 'axios'
function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://backend.yt.local:3001/');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch Data:</button>
      {data ? JSON.stringify(data) : 'No data fetched yet'}
    </div>
  );
}

export default App;