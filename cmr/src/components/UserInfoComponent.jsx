import React, {useContext} from 'react'
import {UserInputContext} from '../contexts/UserInputContext'
export default function UserInfoComponent() {
    const {userInfo, setUserInfo} = useContext(UserInputContext) 
    return (
        <>
            <p>{userInfo.firstName}</p>
            <p>{userInfo.lastName}</p>
            <p>{userInfo.email}</p>
        </>
    )
}
