import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 램던하게 아이템 선택이 된다.
//5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 테두리 색이 바뀐다.(이기면-초록, 지면-빨강, 무승부-검정)

const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://cdn.imweb.me/thumbnail/20200514/7e7a1e8de28e2.png"
  },
  paper: {
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  },
};
function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoic();
    setComputerSelect(computerChoice);
  };

  const randomChoic=()=>{
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다.
    console.log("item array", itemArray);
    let randomItem =Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  };

  return( 
  <div>
    <div className='main'>
      <Box title="You" item={userSelect}/>
      <Box title="computer" item={computerSelect}/>
    </div>
    <div className='main'>
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
    </div>
  </div> 

    );
}

export default App;
