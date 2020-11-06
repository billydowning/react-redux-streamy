import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '951233831999-a7u3q5mg9meou14mfevbkauqa8biiddh.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
