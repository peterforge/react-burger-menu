'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CrossIcon extends Component {
  getCrossStyle(type) {
    return {
      position: 'absolute',
      width: 3,
      height: 14,
      transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
    };
  }

  render() {
    var icon;
    var buttonWrapperStyle = {
      position: 'absolute',
      width: 24,
      height: 24,
      right: 8,
      top: 8
    };
    var buttonStyle = {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: 0,
      background: 'transparent',
      cursor: 'pointer'
    };

    if (this.props.customIcon) {
      let extraProps = {
        className: `bm-cross ${this.props.customIcon.props.className ||
          ''}`.trim(),
        style: {
          ...{ width: '100%', height: '100%' },
          ...this.props.styles.bmCross
        }
      };
      icon = React.cloneElement(this.props.customIcon, extraProps);
    } else {
      icon = (
        <span style={{ position: 'absolute', top: '6px', right: '14px' }}>
          {['before', 'after'].map((type, i) => (
            <span
              key={i}
              className={`bm-cross ${this.props.crossClassName}`.trim()}
              style={{
                ...this.getCrossStyle(type),
                ...this.props.styles.bmCross
              }}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`bm-cross-button ${this.props.className}`.trim()}
        style={{
          ...buttonWrapperStyle,
          ...this.props.styles.bmCrossButton
        }}
      >
        <button
          type="button"
          id="react-burger-cross-btn"
          onClick={this.props.onClick}
          style={buttonStyle}
          {...(!this.props.isOpen && { tabIndex: -1 })}
        >
          Close Menu
        </button>
        {icon}
      </div>
    );
  }
}

CrossIcon.propTypes = {
  crossClassName: PropTypes.string,
  customIcon: PropTypes.element,
  isOpen: PropTypes.bool,
  styles: PropTypes.object
};

CrossIcon.defaultProps = {
  crossClassName: '',
  className: '',
  styles: {},
  isOpen: false
};
