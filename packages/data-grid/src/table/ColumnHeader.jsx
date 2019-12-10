import React, { Component } from 'react';
import { func, any, string, shape, bool, node, arrayOf } from 'prop-types';
import classnames from 'classnames';
import { Checkbox, Icon } from '@puppet/react-components';

const propTypes = {
  columns: arrayOf(
    shape({
      /** Optional cell data getter method. By default it will grab data at the provided dataKey */
      cellDataGetter: func,
      /** Optional cell renderer method. */
      cellRenderer: func,
      /** Arbitrary additional data passed to the cell renderer for this column */
      columnData: any,
      /** Classname to apply to each data cell. Useful for setting explicit column widths */
      className: string,
      /** Unique string key defining this column */
      dataKey: string.isRequired,
      /** Column header text */
      label: node,
      /** Column header text */
      style: shape({}),
    }),
  ).isRequired,
  /** Boolean to render sorting icons in header */
  sortable: bool,
  /** Callback to return click action */
  columnHeaderCallBack: func,
  /** Object containing key fields of text describing which header should be active */
  sortedColumn: shape({
    /** The direction of the active icon */
    direction: string,
    /** The datakey of the active column */
    sortDataKey: string,
  }),
  /** Boolean to render select all checkbox */
  selectable: bool,
  /** Function which handles when the checkbox on click  */
  onHeaderChecked: func,
  /** Allows the state of the checkbox to be defined  */
  headerCheckState: bool,
};

const defaultProps = {
  sortable: false,
  columnHeaderCallBack: null,
  sortedColumn: { direction: '', sortDataKey: '' },
  selectable: false,
  onHeaderChecked: () => {},
  headerCheckState: false,
};

const SORT_DIRECTION = { ASC: 'asc', DESC: 'desc' };

class ColumnHeader extends Component {
  sortColumn = (e, dataKey) => {
    e.preventDefault();
    const { columnHeaderCallBack, sortedColumn } = this.props;

    let dir;
    if (sortedColumn.sortDataKey === dataKey) {
      dir =
        sortedColumn.direction === SORT_DIRECTION.ASC
          ? SORT_DIRECTION.DESC
          : SORT_DIRECTION.ASC;
    } else {
      dir = SORT_DIRECTION.ASC;
    }

    columnHeaderCallBack(dir, dataKey);
  };

  render() {
    const {
      columns,
      sortable,
      sortedColumn,
      selectable,
      onHeaderChecked,
      headerCheckState,
    } = this.props;
    const { direction, sortDataKey } = sortedColumn;

    return (
      <thead>
        <tr className="rc-table-header">
          {selectable ? (
            <th
              className={classnames(
                'rc-table-header-cell',
                `dg-table-header-checkbox`,
              )}
            >
              <Checkbox
                onChange={checked => onHeaderChecked(checked)}
                checked={headerCheckState}
                label=""
                name=""
                className="dg-table-header-checkbox-element"
              />
            </th>
          ) : null}
          {columns.map(
            ({ label, dataKey, className: cellClassName, style }) => (
              <th
                className={classnames(
                  'rc-table-header-cell',
                  `dg-table-header-${dataKey}`,
                  cellClassName,
                  { 'dg-column-header-sortable': sortable === true },
                )}
                key={dataKey}
                style={style}
                onClick={e => this.sortColumn(e, dataKey)}
              >
                <span
                  as="h6"
                  color="medium"
                  className={classnames({
                    'dg-column-header-label-active': dataKey === sortDataKey,
                  })}
                >
                  {label}
                </span>

                {sortable ? (
                  <span className="dg-column-header-icon-container">
                    <Icon
                      type="increment"
                      size="medium"
                      className={classnames('dg-column-header-icon-color', {
                        [direction]: dataKey === sortDataKey,
                      })}
                    />
                  </span>
                ) : (
                  <div />
                )}
              </th>
            ),
          )}
        </tr>
      </thead>
    );
  }
}

ColumnHeader.propTypes = propTypes;
ColumnHeader.defaultProps = defaultProps;

export default ColumnHeader;
