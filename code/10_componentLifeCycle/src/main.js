var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    projects: React.PropTypes.array,
    age: function(props,propName) {
      if(typeof props[propName] !== "number"){
        return new Error("Age must be a number");
      }
      if(props[propName] > 100){
        return new Error("Age entered is"+ props[propName]+", it should be less than or equal to 100");
      }
    }
  },
  getDefaultProps: function() {
    return {
      name: 'Arul'
    };
  },
  render: function () {
    return(
      <div>
        <h2> {this.props.children}</h2>
        <h4> check the warning messages in the javascript console </h4>
        <p>Name : {this.props.name} </p>
        <p>Projects : {this.props.projects} </p>
        <p>Age : {this.props.age} </p>
      </div>);
  }
});


ReactDOM.render(<ReactComponent projects={["shoppingCart"]} age={81}>PropTypes Demo</ReactComponent>, document.getElementById('mycontainer'));
