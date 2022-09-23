import './index.css'

const PasswordDetails = props => {
  const {listOfPassword, isClicked, onDeleteItems} = props
  const {yourWebsite, password, newColor, userName, id} = listOfPassword

  const onDeleteList = () => {
    onDeleteItems(id)
  }

  return (
    <li className="li-container">
      <h1 className={`first ${newColor}`}>{yourWebsite[0].toUpperCase()}</h1>
      <div>
        <p className="web-name">{yourWebsite}</p>
        <p className="web-name">{userName}</p>
        {isClicked ? (
          <p className="web-name">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <button
        className="btn-delete"
        // testid="delete"
        onClick={onDeleteList}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordDetails
