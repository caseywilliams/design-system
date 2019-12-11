import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@puppet/react-components';
import './TableHeader.scss';

const propTypes = {
  /** Optional feature to display number of rows in table. Provide both the count and 'item' label in a string. */
  rowCount: PropTypes.string,
  /** Optional feature to display number of rows selected in table. Provide both the count and 'selected' label in a string. */
  selectedRowCount: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  rowCount: null,
  selectedRowCount: null,
  children: undefined,
};

function TableHeader({ children, rowCount, selectedRowCount }) {
  return (
    <div className="dg-table-header-container">
      {children === undefined ? (
        <Text color="medium" size="small" className="dg-table-row-count">
          {rowCount || null}
          {rowCount && selectedRowCount ? ' - ' : null}
          {selectedRowCount || null}
        </Text>
      ) : (
        children
      )}
    </div>
  );
}

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
