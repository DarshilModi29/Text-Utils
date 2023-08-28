import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alertMessage.type)}</strong>: {props.alertMessage.msg}
    </div>
    
  )
}

export default Alert