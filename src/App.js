import { useEffect } from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './components/api'

const App = () => {

  useEffect(() => {
    async function getData(){
      const data = await fetchData();
      console.log(data);
    }
    getData();
  },[])

  return (
    <div>
      <h1>Covid-19 Tracker App</h1>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
