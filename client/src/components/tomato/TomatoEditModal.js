import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  Typography,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import { required } from '../../lib/validation';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'block',
  },
  name: {
    width: '100%',
  },
  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },

  title: {
    marginRight: theme.spacing(20),
  },

  editbtn: {
    m: 'auto',
    textAlign: 'center',
  },

  select: {
    width: '40%',
    cursor: 'pointer',
  },

  option: {
    cursor: 'pointer',
  },
}));

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const TomatoEditModal = ({
  isLogin,
  templateIdx,
  index,
  name,
  fullRegular,
  fullBreak,
  tomatoCanStart,
  isTomatoEditSucceed,
  editTomato,
  editTempTomato,
  getTempTomatoList,
  getTomatoList,
  clearEditTomatoResult,
  onClose,
}) => {
  templateIdx = templateIdx ? templateIdx : 0;
  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const CHARACTER_LIMIT = 15;

  const classes = useStyles();
  const tomatoName = useInput(name);
  const tomatoFullRegular = useInput(fullRegular);
  const tomatoFullBreak = useInput(fullBreak);

  // 토마토 수정 시 토마토 목록 다시 불러오기
  useEffect(() => {
    if (isLogin) {
      if (isTomatoEditSucceed === false) {
        return;
      }
      getTomatoList({
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        templateIdx: templateIdx,
      });
      clearEditTomatoResult();
      onClose();
    }
  }, [isTomatoEditSucceed]);

  const tomatoEditRequest = () => {
    if (required(tomatoName.value, '토마토 이름')) {
      //현재 로그인상태면 서버로 요청전송
      if (isLogin) {
        const editedTomato = {
          tomatoIdx: index,
          tomatoName: tomatoName.value,
          tomatoFullRegular: tomatoFullRegular.value,
          tomatoFullBreak: tomatoFullBreak.value,
          tomatoCanStart,
        };
        editTomato(editedTomato);

        //아니면 임시토마토를 가져와서 정보수정 후 추가 액션을 보냄
      } else {
        const editedTempTomato = {
          tomatoIdx: index,
          tomatoName: tomatoName.value,
          template: 0,
          tomatoCanStart: 1,
          tomatoDate: new Date(),
          tomatoEndTime: 0,
          tomatoStartTime: 0,
          tomatoFullRegular: tomatoFullRegular.value,
          tomatoLeftRegular: tomatoFullRegular.value,
          tomatoFullBreak: tomatoFullBreak.value,
          tomatoLeftBreak: tomatoFullBreak.value,
        };
        //수정요청 액션을 보내고
        editTempTomato(editedTempTomato);
        //리스트 렌더 요청
        getTempTomatoList();
      }
    }
  };
  return (
    <>
      {' '}
      <TextField
        className={classes.name}
        id='standard-textarea'
        label=''
        placeholder={name}
        multiline
        autoFocus
        inputProps={{
          maxLength: CHARACTER_LIMIT,
        }}
        helperText={`${tomatoName.value.length}/${CHARACTER_LIMIT}`}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('editButton').click();
          }
        }}
        {...tomatoName}
      />{' '}
      <p id='transition-modal-description' />
      <FormControl className={classes.formControl}>
        <div className={classes.div}>
          <InputLabel htmlFor='fullRegular'></InputLabel>
          <Typography className={classes.title}>재배 시간</Typography>
          <Select
            inputProps={{
              name: 'tomatoFullRegular',
              id: 'uncontrolled-native',
              classes: {
                input: classes.resize,
              },
            }}
            {...tomatoFullRegular}
          >
            {times.map(time => (
              <MenuItem key={time} value={time * 300}>
                {time * 5}분
              </MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
      <FormControl className={classes.formControl}>
        <div className={classes.div}>
          <InputLabel htmlFor='fullBreak'></InputLabel>
          <Typography className={classes.title}>휴식 시간</Typography>
          <Select
            inputProps={{
              name: 'tomatoFullBreak',
              id: 'uncontrolled-native',
            }}
            {...tomatoFullBreak}
          >
            {times.map((time, index) => {
              if (index <= 5) {
                return (
                  <MenuItem key={time} value={time * 300}>
                    {time * 5}분
                  </MenuItem>
                );
              }
            })}
          </Select>
        </div>
        <div className={classes.editbtn}>
          <Button variant='contained' color='secondary' onClick={tomatoEditRequest} id='editButton'>
            수정
          </Button>
        </div>
      </FormControl>
    </>
  );
};

export default TomatoEditModal;
