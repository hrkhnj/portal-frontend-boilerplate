import React from 'react'

class Layout extends React.Component {
  public render() {
    return (
      <div id="bodyInner">
        {this.props.children}
      </div>
    )
  }
}

export default Layout
