import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    render() {
        const { user } = this.props.auth0;
        return (
            <div id="profileCard">
                <Card id="innerCard" style={{ width: '18rem' }}>
                    <Card.Img className="img-me" variant="top" src={user.picture} />
                    <Card.Body>
                        <Card.Title>{user.nickname}</Card.Title>
                        <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default withAuth0(Profile);