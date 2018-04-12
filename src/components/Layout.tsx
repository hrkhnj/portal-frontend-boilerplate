import React from 'react'

class Layout extends React.Component {
  render () {
    return (
      <div id="bodyInner">
        {this.props.children}
      </div>
    )
  }
}

export default Layout
