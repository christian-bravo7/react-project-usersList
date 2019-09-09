import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import * as userActions from '../actions/userActions';
import '../scss/_table.scss';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

class Users extends Component {

    componentDidMount = () => {
        if (!this.props.users.length) {
            this.props.getUsers();
        }
    }

    render () {
        if (this.props.loading) {
            return (<Loading />)
        }
        if (this.props.error) {
            return (<Error message={this.props.error} />)
        }
        return (<Table />)
    }
}

export default connect((reducers) => { return reducers.userReducer }, userActions)(Users);
