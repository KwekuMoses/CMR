import React from 'react'
import CustomerCreateComponent from '../components/CustomerCreateComponent'
import CustomerList from '../components/CustomerList'
import UserInfoComponent from '../components/UserInfoComponent'

export default function HomePage() {
    return (
        <>
<h1>HomePage</h1>

<CustomerCreateComponent />
<CustomerList/>
<div>
<UserInfoComponent/>
</div>

        </>
    )
}
