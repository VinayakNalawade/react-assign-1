import './index.css'

const HistoryItem = props => {
  const {object, onDelete} = props

  const deleteItem = () => {
    onDelete(object)
  }

  return (
    <li className="li">
      <p className="time">{object.timeAccessed}</p>
      <div className="logonamesContainer">
        <img src={object.logoUrl} alt="domain logo" className="urlLogo" />
        <div className="contentContainer">
          <p className="urlName">{object.title}</p>
          <p className="url">{object.domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          className="button"
          type="button"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="deleteLogo"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
