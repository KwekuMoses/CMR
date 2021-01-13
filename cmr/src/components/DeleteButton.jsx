import React from 'react' 
import {useHistory} from 'react-router-dom'
import {ButtonStyled} from '../styles/ButtonStyled'

export default function DeleteButton({id}) {
const customerId = id
const history = useHistory()




function deleteCustomer() {
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
  const token = localStorage.getItem("WEBB20")
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(() => history.push('/homepage'))
}



  return (
    <div>
<ButtonStyled onClick={deleteCustomer}>Delete</ButtonStyled>
    </div>
  )
}
