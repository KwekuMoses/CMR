import React, {useState,useEffect, useContext} from 'react'

import { useHistory } from 'react-router-dom'
import {UserInputContext} from '../contexts/UserInputContext'
import UserInfoComponent from '../components/UserInfoComponent'
import CustomerList from '../components/CustomerList'
import CustomerCreateComponent from '../components/CustomerCreateComponent'

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({})
  const history = useHistory()
  const {customerList, setCustomerList} = useContext(UserInputContext) 

  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...formData, [name]: value}
    setFormData(newObj)
  }

  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}</label>
        <input 
          type={type || "text"} 
          name={name} 
          onChange={handleOnChange}
        />
      </div>
    )
  }

  function handleOnSubmit(e){
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then( res => res.json())
    .then( data => {
      history.push('/homepage')
    })
  }


 


  return (
    <div>
      <h1>Create Customer</h1>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <button type="submit">Create Customer</button>

      </form>
      <code>{JSON.stringify(formData)}</code>
    </div>
  )
}
