import React from 'react';
import logo from './logo.svg';
import ComponentDidMount_Map from './components/Map/Map';
import RoadView from './components/Map/Road';
const mapScript = document.createElement('script');

mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=55e73f67fb269fca0a013c9fb0fa6eb6&autoload=false`;

document.head.appendChild(mapScript);

function App() {
  return (
    <div className='App'>
      <ComponentDidMount_Map/>
      {/*<RoadView/>*/}
    </div>
  );
}

export default App;
