import { useEffect, useState } from 'react';
import { getWeatherFrom } from '../../services/wheater';
import { Drawer, Button } from 'antd';
const Home = () => {
  const [wheaterRawData, setWheaterRawData] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  //abstract this to global context
  const [unit, setUnit] = useState('celsius');

  useEffect(() => {
    getWeatherFrom('Guadalajara')
      .then(res => res.json())
      .then(data => setWheaterRawData(data));
  }, []);
  return (
    <div>
      <h1>{wheaterRawData?.location?.name}</h1>
      {unit === 'celsius' ? (
        <h2>{`${wheaterRawData?.current?.temp_c} °C`}</h2>
      ) : (
        <h2>{`${wheaterRawData?.current?.temp_f} °F`}</h2>
      )}
      <Button onClick={() => setDrawerVisible(true)}>Ver</Button>
      <Drawer visible={drawerVisible} onClose={() => setDrawerVisible(false)}>
        <h1>{wheaterRawData?.location?.name}</h1>
      </Drawer>
    </div>
  );
};

export default Home;