import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

function Main() {
  return (
    <div className="div1">
      <h2 >Айвазовский, Иван Константинович</h2>
      <img src="./Aivazovsky.jpg" alt="Aivazovsky.jpg"></img>
    </div>
  );
}
function Autor() {
  return (
    <div className="div1">
      <h2 >Айвазовский, Иван Константинович</h2>
      <img src="./Aivazovsky.jpg" alt="Aivazovsky.jpg"></img>
      <div>
        <p>
        Ива́н Константи́нович Айвазо́вский (арм. Հովհաննես Այվազյան, Ованнес Геворкович Айвазян; 17 [29] июля 1817 года, Феодосия, Таврическая губерния, Российская империя — 19 апреля [2 мая] 1900 года, там же) — русский художник-маринист и баталист армянского происхождения, коллекционер, меценат.
Живописец Главного Морского штаба, действительный тайный советник, академик и почётный член Императорской Академии художеств, почётный член Академий художеств в Амстердаме, Риме, Париже, Флоренции и Штутгарте.
Наиболее выдающийся художник армянского происхождения XIX века[4][5]. Брат армянского историка и архиепископа Армянской Апостольской Церкви Габриэла Айвазовского.
Будучи художником с мировой известностью, Иван Константинович Айвазовский предпочитал жить и работать на своей родине — в Крыму. Айвазовский наиболее известен своими морскими пейзажами, которые составляют больше половины его работ. Художник считается одним из величайших маринистов всех времён.
        </p>
      </div>

    </div>
  );
}
function Picture() {
  return (
    <div className="div1">
      <h2 >КАРТИНА «ДЕВЯТЫЙ ВАЛ»</h2>
      <img src="nineVal.jpg" alt="nineVal.jpg"></img>      
    </div>
  );
}
function Galerry() {
  return (
    <div className="div1">
      <br/>
      <a href="https://artsandculture.google.com/asset/the-black-sea-a-storm-begins-to-whip-up-in-the-black-sea/BwG4NN3FH_vpnA?hl=ru&ms=%7B%22x%22%3A0.5%2C%22y%22%3A0.5%2C%22z%22%3A8.765634781110636%2C%22size%22%3A%7B%22width%22%3A1.788766039456235%2C%22height%22%3A1.2375000000000012%7D%7D">«ЧЕРНОЕ МОРЕ»</a>
      <br/>
      <a href="https://gallerix.ru/album/aivazovsky/pic/glrx-464718627">"Бриг Меркурий"</a>    
      <br/>
      <a href="https://izi.travel/ru/598f-sredi-voln-1898-holst-maslo-285h429/ru">"Среди волн"</a>
      <br/>
      <a href="https://muzei-mira.com/kartini_russkih_hudojnikov/2005-chesmenskiy-boy-ayvazovskiy-opisanie-kartiny.html">"Чесменский бой"</a>
    </div>
  );
}
function NotFound() {
  return <h2>Not found</h2>;
}
function NavMenu() {
  return (
    <>
      <Link to="/" className="links">
        Main
      </Link>
      <Link to="/autor" className="links">
      Autor
      </Link>
      <Link to="/picture" className="links">
      Picture
      </Link>
      <Link to="/galerry" className="links">
      Galerry
      </Link>
    </>
  );
}
export default function App() {  
  return (
    <div>       
      <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/autor" component={Autor} />
            <Route path="/picture" component={Picture} />
            <Route path="/galerry" component={Galerry} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
