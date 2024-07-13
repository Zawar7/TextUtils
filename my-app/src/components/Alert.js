import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show `} style={{backgroundColor: props.mode==="dark"?'grey':'green', color: props.mode==="dark"?"white":"black"}}role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>
  )
}
