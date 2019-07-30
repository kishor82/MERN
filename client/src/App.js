import React from "react";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModel from "./components/ItemModel";
import EuiTest from "./components/EuiTest";
import Card from "./components/Card";
import { Container } from "reactstrap";
import "./Bootswatch.css";

import { Provider } from "react-redux";
import store from "./strore";

import "bootstrap/dist/css/bootstrap.min.css";
import "@elastic/eui/dist/eui_theme_light.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <Card />
          <EuiTest />
          <ItemModel />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
