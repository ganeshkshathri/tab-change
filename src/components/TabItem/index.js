import './index.css'

const TabItem = props => {
  const {tabDetails, changeOnclicking, isActive} = props
  const {displayText, tabId} = tabDetails
  const specialStyle = isActive ? 'active-tab-btn' : ''
  const callrespectivefun = () => {
    changeOnclicking(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${specialStyle}`}
        onClick={callrespectivefun}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
