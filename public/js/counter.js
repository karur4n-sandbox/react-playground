var CountForm = React.createClass({
  clickCountUp: function() {
    this.props.handleCount(1);
  },
  clickCountDown: function() {
    this.props.handleCount(-1);
  },
  render: function() {
    return (
      <div className="countForm">
        <button onClick={this.clickCountUp}>Up</button>
        <button onClick={this.clickCountDown}>Down</button>
      </div>
    );
  }
});

var Counter = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  changeCount: function(n) {
    if (this.state.count > 0 || (n >= 0 && this.state.count >= 0)) {
      this.setState({count: this.state.count + n});
    }
  },
  render: function() {
    return (
      <div className="counter">
        {this.state.count}
        <CountForm handleCount={this.changeCount} />
      </div>
    );
  }
});

React.render(
  <Counter />,
  document.getElementById('content')
);
