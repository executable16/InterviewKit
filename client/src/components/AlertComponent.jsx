import React, {useState} from 'react'

import Alert from 'react-bootstrap/Alert'
import FormikContainer from './forms/FormikContainer';

const centered = {
    textAlign : `center`
}

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" style = {centered} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Problem Added Successfully !</Alert.Heading>
          <p>
            Congratulations ! You have bookmarked successfully. Now add all your favourites into one
            place and have a rocking prepartion for your Interviews. 
          </p>
        </Alert>
      );
    }
    return <FormikContainer />
  }
  
export default AlertDismissibleExample