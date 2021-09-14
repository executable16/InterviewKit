import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './css/HeaderComponent.css'

class HeaderComponent extends Component {

    findUserName(){
        if(this.props.auth){
            let username = this.props.auth.Name
            let firstName = username.replace(/ .*/,'');
            return `Hi, ${firstName} ! `
        }
        return '';
    }

    isUserLoggedIn(){
        return this.props.auth;
    }

    renderContent(){
        switch(this.props.auth){
            case null:  /* We don't know as the request is async so kind of hold on ! */
                return ''
            case false: /* User is Logged out so ask user to Sign in with Google */
                return <a className = "nav-link active " href = "/auth/google">Sign In With Google</a>
            default:    /* User is already Signed In, show user to Logout from App when required */
                return <a className = "nav-link active " href = "/api/logout">Logout</a>
        }
    }

    render() {
        /* Uncomment the below line, to debug the value of props passed from mapStateToProps below ! 
        
        console.log("Header says ", this.props)
        
        */
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-custom-2" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InterviewKit </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* {
                                    this.isUserLoggedIn() && 
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/home">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
                                    </li>
                                } */}

                                {
                                    this.isUserLoggedIn() && 
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/dashboard">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</Link>
                                    </li>
                                }

                                {
                                    this.isUserLoggedIn() && 
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/dashboard/add/new">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Problem</Link>
                                    </li>
                                }

                                {
                                    this.isUserLoggedIn() && 
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/references">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;References</Link>
                                    </li>
                                }

                                
                            </ul>
                            <ul className = "navbar-nav">
                                <div className = "nav-item">
                                    <li><Link className = "nav-link active" to="#">{this.findUserName()} </Link></li>
                                </div>
                            </ul>
                            <ul className = "navbar-nav">
                                <div className = "nav-item">
                                    <li>{this.renderContent()}</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({auth}){
    return {
        auth
    }
}

export default withRouter(connect(mapStateToProps)(HeaderComponent))
