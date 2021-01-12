import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { UserInputContext } from "./contexts/UserInputContext";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FetchUserData from "./Fetches/FetchUserData";
function App() {
  useEffect(() => {
    getCustomerList();
    <FetchUserData />;
  }, []);

  return (
    <>
      <Switch>
        <Route path="/homepage/:id2" component={DetailPage} />

        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
