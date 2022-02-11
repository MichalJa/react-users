import Display from './Display';
import './Users.css';
import React, { useState } from "react";

function Users() {


    const [name, setName] = useState('');
    const [usersList, setUsersList] = useState([]);

    const submitValue = () => {

        if (name.trim() !== '') {
            const user = {
                id: Date.now(),
                userName: name.trim(),
            }    
                return user;
        }
    }

    const add = e => {
        e.preventDefault();
        const user = submitValue();

        if (user) {
            setUsersList(prevList => {
                return prevList.concat(user)
            })
            setName("");
        }

    }


    const removeUser = (userId) => {
        setUsersList(prevList => {
            return prevList.filter((user) => {
                return (user.id !== userId)
            })
        })

    }

    return (
        <div className='users'>
            <h1>User's List</h1>
            <form onSubmit={add}>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                <button type="submit">Add user</button>
            </form>
            <Display usersList={usersList} removeUserFunction={removeUser} />
        </div>
    )
}


export default Users;