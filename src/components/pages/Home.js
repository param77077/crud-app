import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableFormat from '../utils/Table'

const Home = () => {
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("How are you bro!!")
        loadUsers();
    }, [])


    const loadUsers = async () => {
        setLoading(true)
        const results = await axios.get("http://localhost:4000/users");
        // const sleepawait = sleep(50000);
        setLoading(false)
        setUsers(results.data)
        console.log(results.data)
    }

    return (
        <div className="container">
            <div className="py-4">
                Home Page
                <p className='lead'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque molestias magni ipsum consequuntur odio rerum, optio dolor harum sit maxime tempore soluta, placeat nam eum quia hic mollitia velit?
                </p>
                {loading
                    ? <p>Loading</p>
                    : <TableFormat users={Users} />
                    // : Users.map((user, key) => {
                    //     return (
                    //         <p key={key}>{user.name}</p>
                    //     )
                    // })
                }
            </div>






        </div>
    )
}

export default Home