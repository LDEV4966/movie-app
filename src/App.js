import React from "react";
import { HashRouter , Route } from "react-router-dom"; 
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
function App(){
  return <HashRouter>
    <Navigation />
    <Route path = "/movie" component = {Home}  exact = {true} ></Route>
    <Route path = "/movie/:id" component = {Detail}></Route>
  </HashRouter>
}

export default App


// exact = {true} 는 오로지 현재 고유의 path 값을 가졌을 때만 component를 rendering 한다
//Navigation은 path 값으로 이동할 Route를 찾는다.
// 모든 Router 는 기본 props 를 가진다.(history,location,match ...)
