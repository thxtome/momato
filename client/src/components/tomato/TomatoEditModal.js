import React, {useState, useEffect} from "react";
import {
    makeStyles,
    Button,
    FormControl,
    InputLabel,
    Typography,
    TextField,
    NativeSelect,
    Select,
    MenuItem
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        display: "block",
    },
    name: {
        width: "100%"
    },
    div: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2)
    },

    title: {
        marginRight: theme.spacing(20),
    },

    editbtn: {
        m: "auto",
        textAlign: "center"
    },

    select: {
        width: "40%",
        cursor: "pointer",
    },
    option: {
        cursor: "pointer",
    }
}));

const useInput = (initVal) => {
    const [value, setValue] = useState(initVal);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return {value, onChange};
};

const TomatoEditModal = (props) => {
    useEffect(() => {
        if (props.tomatoEdit.isTomatoEditSucceed) {
          props.getTomatos(new Date());
          props.clearEditResult();
        }
      });
    const classes = useStyles();
    const tomatoName = useInput(props.name);
    const tomatoFullRegular = useInput(props.fullRegular);
    const tomatoFullBreak = useInput(props.fullBreak);

    const tomatoEditRequest = () => {
        const data = {
            tomatoIdx: props.index,
            tomatoName: tomatoName.value,
            tomatoFullRegular: tomatoFullRegular.value,
            tomatoFullBreak: tomatoFullBreak.value,
        }
        props.tomatoEdit(data);
        props.onClose();
    }

    // const handleChange = (event) => {     const name = event.target.name;
    // setState({       ...state,       [name]: event.target.value,     });   };

    return (
        <> < TextField className = {
            classes.name
        }
        id = "standard-textarea" label = "" placeholder = {
            props.name
        }
        multiline 
            {...tomatoName}
        /> <p id="transition-modal-description"/>
            <FormControl className={classes.formControl}>
                <div className={classes.div}>
                    <InputLabel htmlFor="fullRegular"></InputLabel>
                    <Typography className={classes.title}>재배 시간</Typography>
                    <Select
                        defaultValue={props.fullRegular / 60}
                        inputProps={{
                            name: 'tomatoFullRegular',
                            id: 'uncontrolled-native'
                        }}
                        {...tomatoFullRegular}
                        >
                        <MenuItem value={300}>5분</MenuItem>
                        <MenuItem value={600}>10분</MenuItem>
                        <MenuItem value={900}>15분</MenuItem>
                        <MenuItem value={1200}>20분</MenuItem>
                        <MenuItem value={1500}>25분</MenuItem>
                        <MenuItem value={1800}>30분</MenuItem>
                    </Select>
                    </div>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        
                    <div className={classes.div}>
                        <InputLabel htmlFor="fullBreak"></InputLabel>
                        <Typography className={classes.title}>휴식 시간</Typography>
                        <Select
                        defaultValue={props.fullBreak / 60}
                        inputProps={{
                            name: 'tomatoFullBreak',
                            id: 'uncontrolled-native'
                        }}
                        {...tomatoFullBreak}
                        >
                        <MenuItem value={300}>5분</MenuItem>
                        <MenuItem value={600}>10분</MenuItem>
                        <MenuItem value={900}>15분</MenuItem>
                        <MenuItem value={1200}>20분</MenuItem>
                        <MenuItem value={1500}>25분</MenuItem>
                        <MenuItem value={1800}>30분</MenuItem>
                    </Select>
                    </div>
                    <div className={classes.editbtn}>
                        <Button variant="contained" color="secondary" onClick={tomatoEditRequest}>수정</Button>
                    </div>
                </FormControl>
        </>
    );
};

export default TomatoEditModal;