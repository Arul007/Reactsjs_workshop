var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
  retrive: function() {
    var name = this.refs.mytext.value;
    alert("Retrived name from text box: "+name);
  },
  render: function () {
    return(
      <div>
        <h2> {this.props.children}</h2>
        <span>Enter your name: </span>
        <input type="text" ref="mytext"/><br/><br/>
        <button onClick={this.retrive} > Retrive name and display </button>
      </div>);
  }
});


ReactDOM.render(<ReactComponent>State Demo</ReactComponent>, document.getElementById('mycontainer'));
