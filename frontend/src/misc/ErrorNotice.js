import React from "react"

const ErrorNotice = (props) => {
  return(
    <div className="error-notice">
      <span>{props.error}</span>
    </div>
  )
}

export default ErrorNotice
