import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />,document.getElementById('root')); // 해당 React component를 html DOM으로 전달 하는법 ReactDOM.render({Component.name},DOM);

//React실행전, (npm,node.js),npx,git 이 설치 되어있어야함
//npx는 npm의 실행을 직접적이고 쉽게 해주는 실행파일?
//작업 dir 내에서 ' npx create-react-app {dir.name} ' 으로 React 앱 환경구축 실행
//작업 dir 내 터미널에서 ' npm start ' 로 localHost or wifi-network주소값을 얻어 앱 실행을 가능하게한다.
