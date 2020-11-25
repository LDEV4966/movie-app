import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true ,
    movies : []
  };
  getMovie = async () =>{
    const {
      data:{
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies:movies , isLoading : false});
  }
  componentDidMount(){
    console.log("Mounted");
    this.getMovie();
  }
  render(){
    const { isLoading , movies } = this.state;
    return (
    <section class = "container">
      {isLoading ? (
        <div class = "loader">
          <span class = "loader__text">"Loading"</span>
        </div> 
        ) : ( 
          <div class = "movies">
          {
            movies.map(movie => {
            return <Movie 
            key = {movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            />})
          }
          </div>
      )}
    </section>
    );
  }
}
export default App;

// React는 가상 dom 을 이용해 dom 내부의 변화를 최소화 시켜 성능을 향상 시켜줌
//component = js and html
// component를 사용해 Js를 통해 html을 동작 가능하게 하고 , 또 component를 통해 반복이 필요한 html code를 줄여줌
// React를 사용하기 위해서는 항상 코드 최상단에  "import React from "react";"를 삽입해야함
// 외부 코드로 보낼때는 'export default {component.name}'을 삽입해야한다;
// 외부 코드를 받을때는 'import {component.name} from '{component.name}의 위치';'
// component는 jsx의 하나 밖에 없는 커스터마이즈로,<Abcd property = value /> 형식을 띈다.
// 위와 같이 component의 이름의 시작은 대문자로 주고 props : property = value ;를 object 형식으로 자식 component에게 전달가능하다
// 자식component는 해당 props를 'props'로 직접 받거나, 해당 property의 이름 { property } 와 같이 직접 호출도 가능하다. 
// <html></html>코드 내에서 Js사용시 {} 필요. ex) {FoodIlike.map( dish => < Test name = {dish.name} />)}
// map은 각 array 의 item들을 object로 반환한다. 
// map Recap : React의 모든 각각의 element들은 서로 다를 필요가 있다. 그래서 각 각의 object 내에 id값을 줘 React내부에서 요소들의 차이를 두게한다.
//그렇지 않으면, Warning: Each child in a list should have a unique "key" prop. 이러한 고유성을 상실했다는 오류가 발생한다.
// 그래서 만약 component의 props로 자료형이 같은 배열을 가지게 되면 error가 발생.그래서 각 각의 object 내에 id값을 줘 React내부에서 요소들의 차이를 두게한다.
// npm i proptypes 후 import Proptypes from "prop-types";
// propTypes를 통해 props의 promising을 걸어 filtering 가능.
//예시) Test.propTypes = { rating  : PropTypes.number.isRequired };
//React는 자동적으로 모든 class component의 render() method를 실행한다.
//그래서 class component는 render method 내에 기능을 추가해야한다
//class component를 function component 대신 사용하는 이유는 state 때문이다
//class {className} extends React.Component를 해줘야React.Component의 메서드를 사용할 수 있음.
//state는 객체형태로 존재하며, class component의 데이터를 동적으로 바꾸기 위해 사용함
//setState()를 호출할 때마다 react는 새로운 state와 함께 render() function을 호출한다.
// 즉 다시말해, setState()를 사용해 state값을 호출하지 않으면 state값은 바뀌지 않는다.
//Using: this.setState((current) => ({ count: current.count + 1 })); you can always be sure you will get the 'current' state
//axios.get은 느리기 때문에 비동기적(async)으로 처리 해 줘야함
// await를 통해 axios.get 으로 다 받아오면 그 후를 처리하는 비동기적 방식으로 실행