import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {

  const [isSignedIn, setSignIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token) {
      setSignIn(true);
    } else {
      setSignIn(false);
    }
  }, [])

  // var data = () => fetch('http://127.0.0.1:5000/header')
  // .then(response => response.json())
  // // .then((jsonData) => {
  // //   console.log(jsonData)
  // // })
  // .catch((error) => {
  //   console.error(error)
  // });

  // async function getDataFromServer() {
  //   try {
  //     let response = await fetch('http://127.0.0.1:5000/header');
  //     let responseJson = await response.json();
  //     return responseJson;
  //    } catch(error) {
  //     console.error(error);
  //   }
  // }

  let data = {
    "header": {
      "color": "blue",
      "logo": "https://brave-together.com/wp-content/uploads/2020/04/%D7%A2%D7%95%D7%AA%D7%A7-%D7%A9%D7%9C-Copy-of-%D7%9C%D7%95%D7%92%D7%95-%D7%97%D7%93%D7%A9-%D7%A8%D7%A7%D7%A2-%D7%A9%D7%A7%D7%95%D7%A3.png",
      "links": [
        {
          "name": "",
          "diaplayName": "התחבר",
          "rout": "/login",
          "color": "white"
        },
        {
          "name": "",
          "diaplayName": "התנתק",
          "rout": "/",
          "color": "white"
        },
        {
          "name": "",
          "diaplayName": "בית",
          "rout": "/",
          "color": "white"
        },
        {
          "name": "",
          "diaplayName": "עיצוב ציטוט",
          "rout": "/",
          "color": "white"
        },
        {
          "name": "",
          "diaplayName": "הוספת סיפור",
          "rout": "/",
          "color": "white"
        },
        {
          "name": "",
          "diaplayName": "אודות",
          "rout": "/about",
          "tooltip": "עלינו...",
          "color": "white"
        },],
    }
  }

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg">
        {data.header.links.filter(isSignedIn ? (link => !(link.diaplayName == "התחבר")) : (link => !(link.diaplayName == "התנתק")))
          .map((link, index) => <ul><li className="nav-item">
            <NavLink style={{ color: "white", display: "flex", flexDirection: "row", justifyContent: "center" }} className="nav-link link-dark" to={link.rout}>
              {link.diaplayName}
            </NavLink></li></ul>)}
      </nav>
    </div>
  );

}

export default Header;