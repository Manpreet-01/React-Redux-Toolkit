import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sessionHandlerReducer } from '../features/user/userSlice';
import { sessionService } from '../services/services'

function Profile() {
    const { access_token, refresh_token, avatar, error, ...user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    async function getSession() {
        try {
            const userData = await sessionService(access_token);
            dispatch(sessionHandlerReducer(userData));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSession();
    }, []);


    return (
        <>
            <div>Profile</div>
            <ul>
                <img src={avatar} alt="avatar" />
                {Object.keys(user).map((prop, index) =>
                    <p key={index}>{prop}: {user[prop]}</p>
                )}
            </ul>
        </>
    )
}

export default Profile;