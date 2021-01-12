import React, {useState, useEffect, useContext} from 'react'
import {UserInputContext} from '../contexts/UserInputContext'
import CustomerListItem from '../components/CustomerListItem'
export default function CustomerListPage() {

    const {customerList, setCustomerList} = useContext(UserInputContext) 

  return (
    <div>
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </div>
  )
}
