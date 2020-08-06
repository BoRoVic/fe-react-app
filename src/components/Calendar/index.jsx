import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function Calendar(props) {
  const { currentDate } = props;
  return <div>{format(currentDate, 'EEEE')}</div>;
}

Calendar.propTypes = { currentDate: PropTypes.instanceOf(Date) };
Calendar.defaultProps = { currentDate: new Date() };
export default Calendar;
*