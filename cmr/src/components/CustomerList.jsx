import React, {useContext} from 'react'
import {UserInputContext} from '../contexts/UserInputContext'
import CustomerListItem from '../components/CustomerListItem'
export default function CustomerListPage() {

    const {customerList} = useContext(UserInputContext) 

  return (
    <div id="customerlist">
      <h1>Current CustomerList</h1>
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </div>
  )
}
