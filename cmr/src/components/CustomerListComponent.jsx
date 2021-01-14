import React, {useContext, useEffect} from 'react'
import CustomerListItem from './CustomerListItem'
import {UserInputContext} from '../contexts/UserInputContext'
import CustomerCreateComponent from '../components/CustomerCreateComponent'
import App from '../App'
export default function CustomerListComponent() {

  const {customerList, setCustomerList} = useContext(UserInputContext)

  useEffect( () => {
    getCustomerList()

  },[])

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerList(data.results))
  }

  return (
    <div>
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </div>
  )

  
}
