import React, { Fragment } from "react";
import { render } from "react-dom";
import  ReactDOM  from "react-dom/client";
import Container from "./src/components/Container";
import FoodBoard from "./src/components/FoodBoard";
// const root= ReactDOM.createRoot(document.getElementById('root'));

// const heading = React.createElement("h1", {
//   id:'header'
// }, "Hello World");

//  const text = React.createElement("p", {}, "Welcome to React World");

//  const container = React.createElement("div", {
//    className:'container'
//  }, [heading, text])

//  console.log(container)
// root.render(container);

const Header =()=>{
   return (
    <header className="header">  
       <h2>Food Villa</h2>
       <nav>
         <ul>
            <li>Home</li>
            <li>Cart</li>
         </ul>
       </nav>
    </header>
   )
   
}

const Footer =()=>{
  return (
    <footer className="footer">Copyright @ Pradnya</footer>
  )
}


const App =()=>{
    return(
       <Fragment>
         <Header/>
          <Container/>
          <Footer/>
         
       </Fragment>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);