import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import * as userActions from '../actions/userActions';
import * as postActions from '../actions/postActions';

class Posts extends Component {

    async componentDidMount() {

        if (!this.props.userReducer.users.length) {
            this.props.getUsers();
        }
        this.props.getPostsById(this.props.match.params.key);
    }

    render() {

        if (this.props.userReducer.error || this.props.postReducer.error) {
            return  (<Error message={this.props.postReducer.error || this.props.userReducer.error} />)
        }
        if (this.props.userReducer.loading || this.props.postReducer.loading) {
            return  (<Loading/>)
        }

        const currentUser = this.props.userReducer.users.find((user) => {
            return user.id == this.props.match.params.key
        })

        if (!currentUser) {
            return (<Error message={'No user found'} />)
        }

        return (
            <React.Fragment>
                <h2 className="title is has-text-centered">{currentUser.name}</h2>
                <div className="posts__grid">
                    {this.props.postReducer.posts.map((post) => {
                        return (
                            <div className="notification post-hover" key={post.id}>
                                <h2 className="title is-4">{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default connect(({ userReducer, postReducer }) => {
    return {
        userReducer, postReducer
    }
}, { ...userActions, ...postActions })(Posts);
