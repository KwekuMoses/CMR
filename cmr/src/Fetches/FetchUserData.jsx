import  {useState, useEffect} from 'react'

export default function FetchUserData() {
    const [ setUserInfo] = useState("")
   

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

   

}
