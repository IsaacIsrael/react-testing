import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        {`Hello ${name}, how are you?`}
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

export default Hello;
