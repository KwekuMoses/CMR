import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerListItem({customerData}) {
  return (
    <div>
      <h2>
        <Link to={`/customers/${customerData.id}`}>
          {customerData.name}
        </Link>
      </h2>
    </div>
  )
}
