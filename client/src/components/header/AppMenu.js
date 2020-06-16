import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import TemplateListContainer from '../../containers/template/TemplateListContainer';
import Modals from '../common/Modal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'black',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const AppMenu = ({ isLogin }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <IconButton edge='start' className={classes.menuButton} aria-label='menu' onClick={handleClick}>
        <MenuIcon />
      </IconButton>

      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to='tomato' className={classes.link}>
          <MenuItem onClick={handleClose}>오늘의 토마토</MenuItem>
        </Link>
        {isLogin ? (
          <div>
            <Link to='member-info' className={classes.link}>
              <MenuItem onClick={handleClose}>농사꾼 정보</MenuItem>
            </Link>
            <Link to='calendar' className={classes.link}>
              <MenuItem onClick={handleClose}>토마토 달력</MenuItem>
            </Link>
            <TemplateListContainer onClose={handleClose} />
            <Modals onClose={handleClose} type='addTemplate' />
          </div>
        ) : (
          <div>
            <Modals onClose={handleClose} type='loginForCalendarInMenu' />
            <Modals onClose={handleClose} type='loginForTemplateInMenu' />
          </div>
        )}
      </Menu>
    </div>
  );
};

export default AppMenu;
