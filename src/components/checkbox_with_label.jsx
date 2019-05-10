import React from 'react';

export default class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    // Testing a component
    this.state = {
      isChecked: false
    };
  }

  onChange = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  }

  render() {
    const { isChecked } = this.state;
    const { labelOn, labelOff } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={this.onChange}
        />
        {isChecked ? labelOn : labelOff}
      </label>
    );
  }
}
