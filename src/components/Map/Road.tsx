import React from 'react';

const kakao = (window as any).kakao

const RoadView = () => {
    React.useEffect(() => {
        const roadviewContainer = document.getElementById('roadview');
        const roadview = new kakao.maps.Roadview(roadviewContainer);
        const roadviewClient = new kakao.maps.RoadviewClient();
        const position = new kakao.maps.LatLng(37.2475,127.0784);
    
        roadviewClient.getNearestPanoId(position, 50, function (panoId:any) {
          roadview.setPanoId(panoId, position);
        
        console.log(roadview)
        });
      },[]);
    return(
        <div id="roadview" style={{width: '500px', height: '400px'}}/>
    ) 

}
export default RoadView;

// 37.2475,127.0784