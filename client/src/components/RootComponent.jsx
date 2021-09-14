import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import DashboardComponent from './DashboardComponent'
import HomeComponent from './HomeComponent'
import CategoricalDashboardComponent from './CategoricalDashboardComponent'
import ReferencesComponent from './ReferencesComponent'


import categoricalDataStructures from './category/CategoricalDataStructures'
import FormikContainer from './forms/FormikContainer'

class RootComponent extends Component {
    render() {
        return (
            <Router>
                <HeaderComponent />
                <Switch>
                    <Route exact path = "/" component={HomeComponent} />    
                    <Route exact path = "/home" component={HomeComponent} />
                    <Route exact path = "/dashboard" component = {DashboardComponent} />
                    <Route exact path = "/references" component = {ReferencesComponent} />
                    <Route exact path = "/dashboard/add/new" component = {FormikContainer} />
                    {/* <Route exact path = "/idk" component = {Temp} /> */}
                    {/* <Route exact path = "/dashboard/formik/new" component = {FormikContainer} /> */}
                    {
                        categoricalDataStructures.map(category => 
                            <Route key = {category} exact path = "/dashboard/:category" 
                            component = {CategoricalDashboardComponent} />
                        ) // End of map() function, and map() also accepts a function as parameter.       

                    } 
                </Switch>
            </Router>
        )
    }
}

export default RootComponent
