import React from 'react'

const error = {
    color : `red`,
    fontStyle : `italic`
}
function TextError(props) {
    return (
        <div style = {error}>
            {props.children}
        </div>
    )
}

export default TextError
