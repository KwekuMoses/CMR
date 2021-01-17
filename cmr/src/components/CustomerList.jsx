import React, {useContext} from 'react'
import CustomerListItem from './CustomerListItem'
import {UserInputContext} from '../contexts/UserInputContext'
export default function CustomerList() {

  const {customerList} = useContext(UserInputContext)



  return (
    <div className="customerList">
      <h2>CustomerList</h2>
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </div>
  )

  
}
