// HOC for protected pages

import React from 'react';
import Router from 'next/router';

export default function wihtAuth(Component) {
  return class Authed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      const signed = localStorage.getItem('user_signed');
      if (!signed) {
        Router.push('/login');
        return;
      }
      this.setState({ loading: false });
    }

    render() {
      const { loading } = this.state;
      return (
        <div>
          {loading ? <div>Loading...</div> : <Component {...this.props} />}
        </div>
      );
    }
  };
}
