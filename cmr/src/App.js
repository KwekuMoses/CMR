import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { UserInputContext } from "./contexts/UserInputContext";
import DetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";
import "./App.css";
import DeleteButton from "./components/DeleteButton";
import CustomerDetailPage from "./pages/CustomerDetailPage";
function App() {
  const [userInfo, setUserInfo] = useState("");
  const [customerList, setCustomerList] = useState([]);
  const [customerId, setCustomerId] = useState([]);
  const [formData, setFormData] = useState(null);
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
    getMe();
  }, []);

  useEffect(() => {
    getCustomerList();
  }, []);

  const userInputContextValue = {
    userInfo,
    setUserInfo,
    customerList,
    setCustomerList,
    customerId,
    setCustomerId,
    formData,
    setFormData,
  };

  return (
    <>
      <UserInputContext.Provider value={userInputContextValue}>
        <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
        <Route path="/customers/:id/" component={DetailPage} />
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </UserInputContext.Provider>
    </>
  );
}

export default App;
