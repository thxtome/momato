import Calendar from '../../routes/Calendar';
import { getCalendarActions } from '../../store/modules/getCalendar';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getTomatoCntOfDate: yearAndMonth => {
      dispatch(getCalendarActions.GET_CALENDAR_REQUEST({ yearAndMonth }));
    },
    clearUpdated: () => {
      dispatch(getCalendarActions.GET_CALENDAR_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
