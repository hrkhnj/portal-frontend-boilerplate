import React from 'react'

interface IProp {
  isServer: boolean,
}

class Layout extends React.Component<IProp> {
  constructor(props: IProp) {
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
