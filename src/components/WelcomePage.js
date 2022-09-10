import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Library "\n"</h1>
                <h2>Sign in to see available books</h2>
            </div>
        )
    }
}

export default withAuth0(WelcomePage);