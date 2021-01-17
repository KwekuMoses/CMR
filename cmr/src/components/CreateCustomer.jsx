import React, {useContext, useState} from 'react'
import { client } from '../client/client'
import { UserInputContext } from '../contexts/UserInputContext'
import {Button} from '../styles/ButtonStyled'

const VAT_REGEXP = new RegExp("^SE [0-9]{10}$")

export default function CreateCustomer() {
 const [formData,setFormData] = useState(null)// TODO Use useState
  const {setCustomerList} = useContext(UserInputContext)

  function vatValidator(value) {
    return VAT_REGEXP.test(value)
  }
 async function  handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...formData, [name]: value}
   await setFormData(newObj)
  }
  function renderInput(name, label, type,) {

    return (
      <div className="createCustomer">
        <label>{label}</label>
        <input 
          type={type || "text"} 
          name={name} 
          onChange={handleOnChange}
          required
        />
      </div >
    )
  }
  function renderVat(name, label, type, validator,) {
    return (
      <div className="createCustomer">
        <label>{label}</label>
        <input 
          type={type || "text"} 
          name={name} 
            onChange={(e) => {
            const valid = validator && validator(e.target.value)
            if (valid) {
            document.getElementById('create').removeAttribute("disabled")
            document.getElementById("message").innerHTML="toppen"
            document.getElementById("message").style.color="green"

              handleOnChange(e)
            }
            else {
              console.log(document.getElementById("create").setAttribute("disabled", true))
              document.getElementById("message").innerHTML="SE och 10 Siffror"
              document.getElementById("message").style.color="red"
              console.log(`${label} not valid`)
              handleOnChange(e)
            }
          }
 }
        />
      </div>
    )
  }
  function handleOnSubmit(e){
    e.preventDefault()
    client.getCustomerList().then((data) => setCustomerList(data.results));
   client.createCustomer(formData).then(client.getCustomerList().then((data) => setCustomerList(data.results)),
)
  }

  return (
    <div>
      <h1>Create Customer</h1>
      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name",)}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("paymentTerm", "Payment Term", "number" )}
        {renderInput("phoneNumber", "Phone Number", "phone")}
        {renderInput("reference", "Reference")}
        {renderVat("vatNr", "Vat Number", "text", vatValidator)}
      <p id="message"></p>

        {renderInput("website", "Website", "url")}
        <Button id="create" disabled type="submit">Create Customer</Button>
      </form>
     {/*<code>{JSON.stringify(formData)}</code> */}
    </div>
  )
}
//SE [0-9]{10}