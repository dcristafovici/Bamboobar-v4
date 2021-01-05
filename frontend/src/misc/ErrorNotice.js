import React from "react"

const ErrorNotice = (props) => {
  console.log(props)
  return(
    <div className="error-notice">
      <span>{props.error}</span>
    </div>
  )
}

export default ErrorNotice
