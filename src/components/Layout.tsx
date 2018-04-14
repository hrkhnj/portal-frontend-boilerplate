import React from 'react'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  public render() {
    const statusStyle = {
      backgroundColor: '#fcc',
      borderBottom: '1px solid #000',
      padding: '10px',
    }
    return (
      <div id="bodyInner">
        <p style={statusStyle}>
          renderd by: {this.props.isServer ? 'Server' : 'Client'}
        </p>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
