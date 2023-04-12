import React from "react";
import './ErrorMessage.scss';

type Props = {
  errorMessage: string,
}

export const ErrorMessage: React.FC<Props> = ({ errorMessage }) => {
  return (
    <article className="notification is-danger is-light">
      <button className="delete" aria-label="delete"></button>
      <div className="notification-header">
        <p>Please, pay attention!</p>
      </div>
      <div className="notification-body">
        {errorMessage}
      </div>
    </article>
  )
}