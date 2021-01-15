import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <li>Loading</li>;
      case false:
        console.log(this.props.auth);
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        console.log(this.props.auth);
        return (
          <>
            <li key="1">
              <Payments />
            </li>
            <li key="3" style={{margin: '0 10px'}} >
              Credits : {this.props.auth.credits}
            </li>
            <li key="2">
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  }
  render() {
    
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

//get corresponding props based on state
function mapStateToProps(state) {
  return {
    // the left auth is then accessed by props.auth above
    // the right state.auth is the whole object response.data from 
    // the backend when fetchUser() is called
    auth: state.auth,
  };
}


export default connect(mapStateToProps)(Header);
