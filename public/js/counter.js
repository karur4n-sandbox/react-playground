var CountNum = React.createClass({
  getInitialState: function() {
    return {count: this.props.count};
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({count: nextProps.count});
  },
  render: function() {
    return (
      <div className="countNum">
        {this.state.count}
      </div>
    );
  }
});

var CountForm = React.createClass({
  getInitialState: function () {
    return {disabled: true};
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('this.props: '+ this.props.count);
    console.log('next props: '+ nextProps.count);
    if (nextProps.count > 0) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    }
  },
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
        <button disabled={this.state.disabled} onClick={this.clickCountDown}>Down</button>
      </div>
    );
  }
});

var Counter = React.createClass({
  getInitialState: function() {
    return {count: this.props.initialCount};
  },
  addable: function() {
    n > 0 || (n < 0 && this.state.count > 0)
  },
  changeCount: function(n) {
    if (this.addable) {
      this.setState({count: this.state.count + n});
    }
  },
  render: function() {
    return (
      <div className="counter">
        <CountNum count={this.state.count} />
        <CountForm count={this.state.count} handleCount={this.changeCount} />
      </div>
    );
  }
});

React.render(
  <Counter initialCount={0} />,
  document.getElementById('content')
);
