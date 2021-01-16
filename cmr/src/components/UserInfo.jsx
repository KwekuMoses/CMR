import React, {useContext} from 'react'
import {UserInputContext} from '../contexts/UserInputContext'
export default function UserInfoComponent() {
    const { userInfo } = useContext(UserInputContext) 
    return (
            <div id="welcomeuser">
                <p>Welcome</p>
                <p>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                <p>{userInfo.email}</p>
            </div>
    )
}
