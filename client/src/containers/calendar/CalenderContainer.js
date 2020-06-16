import Calendar from '../../routes/Calendar';
import { calendarActions } from '../../store/modules/calendar';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getTomatoCntOfDate: yearAndMonth => {
      dispatch(calendarActions.CALENDAR_REQUEST({ yearAndMonth }));
    },
    clearUpdated: () => {
      dispatch(calendarActions.CALENDAR_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
