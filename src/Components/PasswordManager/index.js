import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import PasswordDetails from '../PasswordDetails'
import './index.css'

const colorList = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
]

class PasswordManager extends Component {
  state = {
    yourWebsite: '',
    userName: '',
    password: '',
    listOfUser: [],
    isClicked: false,
    searchValue: '',
  }

  onDeleteItems = id => {
    const {listOfUser} = this.state
    const afterDeleteList = listOfUser.filter(eachList => eachList.id !== id)
    this.setState({listOfUser: afterDeleteList})
  }

  isChecked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {yourWebsite, userName, password} = this.state
    const newColor = colorList[Math.ceil(Math.random() * colorList.length - 1)]
    const newList = {
      id: uuidV4(),
      yourWebsite,
      userName,
      password,
      newColor,
    }

    this.setState(prevState => ({
      listOfUser: [...prevState.listOfUser, newList],
      yourWebsite: '',
      userName: '',
      password: '',
    }))
  }

  onSearchList = event => {
    this.setState({searchValue: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({yourWebsite: event.target.value})
  }

  render() {
    const {
      yourWebsite,
      userName,
      password,
      listOfUser,
      isClicked,
      searchValue,
    } = this.state

    const finalList = listOfUser.filter(eachList =>
      eachList.yourWebsite.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-manage-container">
          <form className="form-container" onSubmit={this.onSubmitDetails}>
            <h1 className="main-heading">Add New Password</h1>
            <div className="input-image-container">
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-image"
                />
              </div>
              <input
                placeholder="Enter Website"
                value={yourWebsite}
                onChange={this.onChangeWebsite}
                className="input"
                type="text"
              />
            </div>
            <div className="input-image-container">
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-image"
                />
              </div>
              <input
                placeholder="Enter Username"
                value={userName}
                onChange={this.onChangeUserName}
                className="input"
                type="text"
              />
            </div>
            <div className="input-image-container">
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-image"
                />
              </div>
              <input
                placeholder="Enter Password"
                value={password}
                className="input"
                onChange={this.onChangePassword}
                type="password"
              />
            </div>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
          <img
            className="main-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="sub-container">
          <div className="header-container">
            <div className="number-of-list-container-heading">
              <h1 className="sub-heading">Your Passwords</h1>
              <div className="number-of-list-container">
                <p>{finalList.length}</p>
              </div>
            </div>
            <div className="input-image-container">
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website-image"
                />
              </div>
              <input
                placeholder="Search"
                className="input-search"
                type="search"
                value={searchValue}
                onChange={this.onSearchList}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="check-box-container">
            <input
              type="checkbox"
              id="check"
              onClick={this.isChecked}
              className="check-box"
            />
            <label htmlFor="check" className="check-box-para">
              Show
            </label>
          </div>
          {finalList.length === 0 ? (
            <div className="no-list-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="sub-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="ul-list-container">
              {finalList.map(eachList => (
                <PasswordDetails
                  listOfPassword={eachList}
                  isClicked={isClicked}
                  key={eachList.id}
                  onDeleteItems={this.onDeleteItems}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
