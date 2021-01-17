import React, {useContext} from 'react' 
import {useHistory} from 'react-router-dom'
import { client } from "../client/client.js";
import {UserInputContext} from '../contexts/UserInputContext'
import {TomatoButton} from '../styles/ButtonStyled'


export default function DeleteButton({id}) {
  const {setCustomerList} = useContext(UserInputContext)

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
  .then(() => {
   client.getCustomerList().then((data) => setCustomerList(data.results));
    history.push('/home')
  })
}



  return (
    <div>
<TomatoButton onClick={deleteCustomer}>Delete</TomatoButton>
    </div>
  )
}
