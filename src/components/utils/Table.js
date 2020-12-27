import React from 'react'
import { Link } from 'react-router-dom'

const TableFormat = ({ users }) => {

    return (
        <table className="table table-dark border shadow">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {

                        const userName = user.name.split(" ")

                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{userName[0]}</td>
                                <td>{userName[1]}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to="/" className="btn btn-primary mr-2">View</Link>
                                    <Link to="/" className="btn btn-outline-primary mr-2">Edit</Link>
                                    <Link to="/" className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableFormat