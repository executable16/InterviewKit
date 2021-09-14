import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'


import RootComponent from './components/RootComponent'
import './App.css'

class App extends Component{

    componentDidMount(){
        this.props.fetchUser()
    }

    render(){
        return(
            <div className = "App">
                <RootComponent />
            </div>
        )
    }
}

export default connect(null,actions)(App);
/* The actions will now be available to the App component as props ! */
