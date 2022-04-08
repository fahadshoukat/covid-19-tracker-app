import { useEffect, useState } from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './components/api'

const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    async function getData(){

      const data = await fetchData();
      setData(data);
    }
    getData();
  },[])

  return (
    <div>
      <h1>Covid-19 Tracker App</h1>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
