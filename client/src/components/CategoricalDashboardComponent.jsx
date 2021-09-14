import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter} from 'react-router-dom'

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NoteIcon from '@material-ui/icons/Note';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

import './css/CategoricalDashboard.css'

import LoadingComponent from './LoadingComponent';

const bcg = {
    minWidth :`100%`,
    minHeight: `100%`,
    backgroundColor: `#3EECAC`,
    backgroundImage: `linear-gradient(19deg, #3EECAC 0%, #f2abea 100%)`,
    height : `100%`,

    backgroundSize : `cover`
}

const greenBackground = {
    color : `rgb(89, 207, 89)`
}

const verified = {
    color : `rgb(136, 221, 9)`
}

const purpleBackground = {
    color : `rgb(170, 43, 170)`
}

const orange2Background = {
    color : `orange`
}

const orangeBackground = {
    color : `rgb(221, 157, 39)`
}


class CategoricalDashboardComponent extends Component {
    
    state = {
        'Message ' : '',
        'questions' : []
    }

    async fetchData(category){
        const url = `/api/questions/${category}`
        try{
            const {data} = await axios.get(url)
            this.setState({
                'questions' : data
            })
        }catch(err){
            console.log("Error at fetching data from ",err);
        }
    }


    async getInformation(url){
        try{
            const {data} = await axios.get(url);
            this.setState({
                'Message' : data
            })

            this.fetchData(data)

        }catch(error){
            this.setState({
                'Message' : 'Error occured !'
            })
        }

        
    }

    
    async componentDidMount(){
            const path = this.props.match.url
            const url = `/api${path}`
            this.getInformation(url);
    }

    render(){
        
        return(
            this.state.questions.length === 0 ? <LoadingComponent /> :
            <div style = {bcg}>
                {
                    this.state.questions.map((question,index) => {

                        const { _id, description, linktoquestion, linktovideosolution, linktoblogsolution, notes} = question;
                        return(
                            <div className = "container " key = {_id}>
                                <div className="list-group " >
                                    <Link to="#" className="list-group-item list-group-item-action headers active">
                                        <h4>{index+1}. {description} <VerifiedUserIcon style = {verified}/> </h4>
                                    </Link>
                                    <a href = {linktoquestion} className = "list-group-item list-group-item-action" target="_blank" rel = "noreferrer"><h5 style = {orange2Background}><AssignmentTurnedInIcon /> Link To Question : {linktoquestion} </h5></a>
                                    <a href = {linktovideosolution} className="list-group-item list-group-item-action" target="_blank" rel = "noreferrer"><h5 style = {greenBackground}><YouTubeIcon /> Link To Video Solution : {linktovideosolution}</h5></a>
                                    <a href = {linktoblogsolution} className="list-group-item list-group-item-action" target="_blank" rel = "noreferrer"><h5 style = {purpleBackground}><NoteIcon /> Link To Blogs : {linktoblogsolution}</h5></a>
                                    <Link to="#" className="list-group-item list-group-item-action"><h5 style = {orangeBackground}><SpeakerNotesIcon /> Notes : {notes}</h5></Link>
                                </div>
                                <br /><br />
                            </div>
                        )
                        
                        
                    })
                }
            </div>
        )
    }


























    // render() {
    //     console.log("We are here", this.props.match.params.category)
    //     return(
    //         <>
    //             {
    //                 this.state.questions.map(question => {
    //                     const { _id , description, linktovideosolution, linktoblogsolution, notes } = question ;
    //                         <div className = "list-group">
    //                         <a to="/" className="list-group-item list-group-item-action active">{description}</a>
    //                         <a to="/" className="list-group-item list-group-item-action">{linktovideosolution}</a>
    //                         <a to="/" className="list-group-item list-group-item-action">{linktoblogsolution}</a>
    //                         <a to="/" className="list-group-item list-group-item-action">{notes}</a>
    //                     {/* <a to="#" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">Vestibulum at eros</a> */}
    //                     </div>
    //                 })
    //             }
    //         </>
    //     )
    // }







        // return (

        //     <>
        //     {this.state.questions.map(question => {
        //         const { _id, description, linktovideosolution, linktoblogsolution, notes } = question 
        //         }) 
        //     }
        //     </>
        // )
        
    
}

export default withRouter(CategoricalDashboardComponent)
