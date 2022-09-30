/* global kakao */
import React, {useState, useEffect} from "react"


const kakao = (window as any).kakao

const ComponentDidMount_Map = () =>{
    const [map, setMap] = useState({})

    useEffect(() => {
        const container = document.getElementById('map')
        const options = {
        center: new kakao.maps.LatLng(37.2475,127.0784),
        level: 3,
    }

    setMap(new kakao.maps.Map(container, options))
  }, [])
  
    return (
        <>
            <div id="map" style={{width: '500px', height: '400px'}}>
                
            </div>
        
        </>

    )
}

export default ComponentDidMount_Map;
