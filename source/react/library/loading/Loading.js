import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/Icon';

const propTypes = {
  className: PropTypes.string,
  /** Currently only `small` is supported */
  size: PropTypes.string,
};

const defaultProps = {
  className: '',
  size: '',
};

/**
 * `LoadingIndicator` does what you would think, it indicates a loading state.
 */

const LoadingIndicator = (props) => {
  const className = classnames('rc-loading', props.className);
  let size;

  switch (props.size) {
    case 'tiny':
      size = '40px';
      break;
    case 'small':
      size = '50px';
      break;
    default:
      size = '100px';
  }

  return (
    <div className={ className }>
      <Icon type="loader" height={ size } width={ size } />
    </div>
  );
};

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
