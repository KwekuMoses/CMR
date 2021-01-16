import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { UserInputContext } from "./contexts/UserInputContext";
import LoginPage from "./pages/LoginPage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";
import "./App.css";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import { client } from "./client/client.js";
import HomePage from "./pages/HomePage";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [customerList, setCustomerList] = useState([]);
  const [customerId] = useState([]);
  const [formData, setFormData] = useState(null); // TODO Use useState

  useEffect(() => {
    client.getMe().then((data) => setUserInfo(data));
  }, []);

  useEffect(() => {
    client.getCustomerList().then((data) => setCustomerList(data.results));
  }, []);

  const userInputContextValue = {
    userInfo,
    customerList,
    setCustomerList,
    customerId,
    formData,
    setFormData,
  };

  return (
    <>
      <UserInputContext.Provider value={userInputContextValue}>
        <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
        <Route path="/customers/:id/" component={CustomerDetailPage} />
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
