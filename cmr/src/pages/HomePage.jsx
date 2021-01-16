import CreateCustomer from '../components/CreateCustomer'
import CustomerList from '../components/CustomerList'
import UserInfoComponent from '../components/UserInfo'
export default function HomePage() {
console.log("hej")
    
    return (
        <>
                <UserInfoComponent/>
                <CustomerList />
                <CreateCustomer/>
        </>
    )
}