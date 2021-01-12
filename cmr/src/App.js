import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { UserInputContext } from "./contexts/UserInputContext";
import DetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FetchUserData from "./Fetches/FetchUserData";
function App() {
  const [userInfo, setUserInfo] = useState("");
  const [customerList, setCustomerList] = useState([]);
  const [customerId, setCustomerId] = useState(null);

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
    //Använd State för att använda variabeln
  }

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomerList(data.results));
  }

  useEffect(() => {
    getCustomerList();
    getMe();
  }, []);

  const userInputContextValue = {
    userInfo,
    setUserInfo,
    customerList,
    setCustomerList,
  };

  return (
    <>
      <UserInputContext.Provider value={userInputContextValue}>
        <Switch>
          <Route path="/customers/:id" component={DetailPage} />
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </UserInputContext.Provider>
    </>
  );
}

export default App;
