import PropTypes from 'prop-types'

function Header(props) {
  const headerStyle = {
    backgroundColor: props.bgColor,
    color: props.textColor
  }

  return (
    <header style={headerStyle}>
      <div className="container"></div>
      <h2>{props.text}</h2>
    </header >
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header
