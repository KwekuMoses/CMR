import React, {useEffect, useContext} from 'react'
import CustomerCreateComponent from '../components/CustomerCreateComponent'
import CustomerList from '../components/CustomerList'
import UserInfoComponent from '../components/UserInfoComponent'
import {UserInputContext} from '../contexts/UserInputContext'
export default function HomePage() {

const {customerList, setCustomerList} = useContext(UserInputContext) 

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
      }, []);



    return (
        <>
<h1>HomePage</h1>

<CustomerList/>
<div>
<UserInfoComponent/>
</div>
<CustomerCreateComponent />


        </>
    )
}
