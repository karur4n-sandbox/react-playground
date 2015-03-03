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
        <button disabled={this.props.disabled} onClick={this.clickCountDown}>Down</button>
      </div>
    );
  }
});

var Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      disabled: true
    };
  },
  changeCount: function(n) {
    if (n > 0) {
      this.setState(
        {
          count: this.state.count + n,
          disabled: false
        }
      );
    } else {
      if (this.state.count > 0) {
        if (this.state.count == 1) {
          this.setState(
            {
              count: this.state.count + n,
              disabled: true
            }
          );
        } else {
          this.setState(
            {
              count: this.state.count + n,
              disabled: false
            }
          );
        }
      }
    }
  },
  render: function() {
    return (
      <div className="counter">
        {this.state.count}
        <CountForm disabled={this.state.disabled} count={this.state.count} handleCount={this.changeCount} />
      </div>
    );
  }
});

React.render(
  <Counter />,
  document.getElementById('content')
);
