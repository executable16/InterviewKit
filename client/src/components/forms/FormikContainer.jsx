import React, {Component} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import '../css/FormikContainerComponent.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import AlertComponent from '../AlertComponent'


class FormikContainer extends Component{

    state = {
        'isFormSubmitted' : false
    }

    
    render(){

        const dropDownOptions = [
            { key : 'Category', value : ''},
            { key : 'Arrays', value : 'array'},
            { key : 'Concurrency' , value : 'concurrency'},
            { key : 'Dynamic Programming', value : 'dp'},
            { key : 'Graphs', value : 'graph'},
            { key : 'Greedy Algorithms', value : 'greedy'},
            { key : 'Hashtable' , value : 'hashtable'},
            { key : 'Heap', value : 'heap'},
            { key : 'Linked List', value : 'linkedlist'},
            { key : 'Primitive', value : 'primitive'},
            { key : 'Recursion & Backtracking' , value : 'rb'},
            { key : 'Searching', value : 'searching'},
            { key : 'Sorting', value : 'sorting'},
            { key : 'Special Trees', value : 'specialtrees'},
            { key : 'Stack' , value : 'stack'},
            { key : 'String', value : 'string'},
            { key : 'Tree', value : 'tree'},
           
        ]
        const initialValues = {
            category : '',
            description : '',
            linktoquestion : '',
            linktovideosolution : '',
            linktoblogsolution : '',
            notes : ''
        }
        
        const validationSchema = Yup.object({
            category : Yup.string().required("A Category is Required"),
            description : Yup.string().min(6, "Min 6 Characters Required").required('A Description is Required !'),
            linktoquestion: Yup.string().url('Must be a Link').required("This field is Required"),
            linktovideosolution : Yup.string().url("Must be a Link"),
            linktoblogsolution : Yup.string().url("Must be a Link")
        })

        const formSubmit = async (url,values,googleUserId) => {
            values.googleUserId = googleUserId
            try{
                await axios.post(url,values)
            }catch(err){
                console.log("Error in post request ", err)
            }
        }
    
        const onSubmit = async (values) => {
            const url = `/api/dashboard/${values.category}`
            this.setState({
                'isFormSubmitted' : true
            })
            let googleUserId;
            try{
                googleUserId = await axios.get('/api/current_user');
            }catch(err){
                console.log("Error at fetching userGoogleId");
            }
            formSubmit(url,values,googleUserId.data.googleId);
        }        

    return(
        <div>
            {this.state.isFormSubmitted && <AlertComponent />}
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}
            >
                {
                    formik => (
                        <div className = "bg">
                        <div className = "get-in-touch">
                            <p className="title">Bookmark Problems !</p>
                            <Form className="contact-form row">
                                <div className="form-field col-lg-6">
                                    <FormikControl className="input-text js-input"
                                        control = 'select'
                                        label = ''
                                        name = 'category'
                                        options = {dropDownOptions}
                                    />
                                </div>

                                

                                <div className="form-field col-lg-6">
                                    <FormikControl  className="input-text js-input"
                                        control = 'input' 
                                        placeholder = 'Description'
                                        type='text' 
                                        label='' 
                                        name = 'description'
                                    />
                                </div>

                                <div className="form-field col-lg-6">
                                    <FormikControl  className="input-text js-input"
                                        control = 'input' 
                                        placeholder = 'Link to the Question'
                                        type='text' 
                                        label='' 
                                        name = 'linktoquestion'
                                    />
                                </div>


                                <div className="form-field col-lg-6">
                                    <FormikControl  className="input-text js-input"
                                        control = 'input' 
                                        placeholder = 'Link to video solution'
                                        type='text' 
                                        label='' 
                                        name = 'linktovideosolution'
                                    />
                                </div>

                                <div className="form-field col-lg-6">
                                    <FormikControl  className="input-text js-input"
                                        control = 'input' 
                                        placeholder = 'Link to any Article'
                                        type='text' 
                                        label='' 
                                        name = 'linktoblogsolution'
                                    />
                                </div>
                                <div className="form-field col-lg-12 margin-ui">
                                    <FormikControl  className="form-control"
                                        control = 'textarea' 
                                        placeholder = "Add your notes here ..."
                                        type='text' 
                                        label='' 
                                        name = 'notes'
                                    />
                                </div>
                                <div className = "form-field col-lg-12">
                                    <button className = "submit-btn" type = "submit">Submit</button>
                                </div>
                                
                            </Form>
                        </div>
                        </div>
                    )
                }

            </Formik>
            
        </div>

    )}
}

export default withRouter(FormikContainer)