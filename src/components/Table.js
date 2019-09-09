import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = (props) => {

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th className="has-text-centered">Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user) => { 
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td className="has-text-centered">
                                    <Link to={`/posts/${user.id}`}>
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default connect((reducers) => { return reducers.userReducer },{})(Table);
