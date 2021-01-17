import React, { useState, useEffect, useContext } from 'react'
import { UserInputContext } from '../contexts/UserInputContext'
import { useHistory } from 'react-router-dom'
import { client } from '../client/client'
import {TomatoButton} from '../styles/ButtonStyled'

export default function CustomerUpdatePage(props) {
const  customerId = props.match.params.id 
const { setCustomerList} = useContext(UserInputContext)
  
  const [formData, setFormData] = useState({})
  const history = useHistory()

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setFormData(data))
  }

  useEffect( () => {
    getCustomerItem()
  },[])

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
          value={formData[name] || ""}
          onChange={handleOnChange}
        />
      </div>
    )
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(() =>{
      client.getCustomerList().then((data) => setCustomerList(data.results));
      history.push(`/home`)
    })
    
  }

  return (
    <div>
      <h1>Update Customer</h1>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <TomatoButton type="submit">Update Customer</TomatoButton>

      </form>

    </div>
  )
}
