import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@puppet/react-components';

import './TableFooter.scss';

const propTypes = {
  /** Optional feature to display number of rows in table. Provide both the count and 'item' label in a string. */
  rowCountText: PropTypes.string,
  /** Optional feature to display number of rows selected in table. Provide both the count and 'selected' label in a string. */
  selectedRowCountText: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  rowCountText: null,
  selectedRowCountText: null,
  children: undefined,
};

function TableFooter({ children, rowCountText, selectedRowCountText }) {
  return (
    <div className="dg-table-footer-container">
      {children === undefined ? (
        <Text color="medium" size="small" className="dg-table-row-count">
          {rowCountText || null}
          {rowCountText && selectedRowCountText ? ' - ' : null}
          {selectedRowCountText || null}
        </Text>
      ) : (
        children
      )}
    </div>
  );
}

TableFooter.propTypes = propTypes;
TableFooter.defaultProps = defaultProps;

export default TableFooter;
