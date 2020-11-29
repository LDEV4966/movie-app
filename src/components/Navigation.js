import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css";
function Navigation(){
    return <div className="nav">
        <Link to = "/">Home</Link>
    </div>
}
export default Navigation;


//<a href= "somewhere" >somewhere</a> 을 안쓰는 이유는?
// 클릭시 매번 새로고침이 되면서 리액트가 죽게된다.
// 그래서 Link 를  사용할 수 있는데.. import { Link } from "react-router-dom"
// Link는 반드시 Router 내에 있어야 한다
// Link는 Route를 통해서 Route의 지정 component로 data를 보낼수 있다. to = ~~ 를 사용해서 
