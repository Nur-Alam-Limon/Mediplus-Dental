import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import NavMenu from "./Components/NavMenu/NavMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
