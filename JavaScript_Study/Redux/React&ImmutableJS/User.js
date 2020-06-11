import React, { Component } from 'react';

class User extends Component {
    shouldComponentUpadate(nextProps, nextState){
        return this.props.user !== nextProps.user;
    }
    render() {
        const { username } = this.props.user.toJS();
        console.log('%s가 렌더링 되고 있음', username);

        return (<div>
            {username}
        </div>);
    }
}

export default User;