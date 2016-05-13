import React from 'react';
class App extends React.Component {
  render() {
    return <div className="container">
      <div>{this.props.children}</div>
    </div>
  }
}
export default App;
