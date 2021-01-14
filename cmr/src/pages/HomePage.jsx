import React, {useContext, useMemo} from 'react'
import CustomerCreateComponent from '../components/CustomerCreateComponent'
import CustomerListComponent from '../components/CustomerListComponent'
import UserInfoComponent from '../components/UserInfoComponent'
import { UserInputContext } from '../contexts/UserInputContext'
import HomePageStyles from "../styles/HomePageStyles";
export default function HomePage() {

    
    return (
        <>
<HomePageStyles>
<UserInfoComponent/>
<CustomerListComponent />
<CustomerCreateComponent />
</HomePageStyles>

        </>
    )
}