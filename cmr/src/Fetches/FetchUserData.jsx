import React, {useState, useEffect} from 'react'
import { UserInputContext } from "../contexts/UserInputContext";

export default function FetchUserData() {
    const [userInfo, setUserInfo] = useState("")
   

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
  
      useEffect(() => {
        getMe();
      }, []);

      const userInputContextValue = {
        userInfo,
        setUserInfo,
      };


}
