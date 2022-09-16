import './App.css';
import { useEffect } from 'react';


//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
//2. 도시, 섭씨, 화씨, 날씨 상태정보가 보인다.
//3. 5개의 버튼이 있다.(1개는 현재위치, 4개는 다른도시)
//4. 도시버튼을 클릭할 때 마다 도시별 날씨가 보인다.
//5. 현재 위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반으로 돌아온다.
//6. 데이터를 들고온느 동안 로딩 스피너가 돈다.
function App() {
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
       getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b3ce9c967ff0e9fe57fbdf8463c6ee9`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };

  useEffect(()=>{
    getCurrentLocation()  
  },[]);
  return ( <div>hiiii</div> );
}

export default App;
