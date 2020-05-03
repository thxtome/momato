import React, {useState} from "react";
import {
    makeStyles,
    Button,
    FormControl,
    InputLabel,
    Select,
    Typography,
    TextField,
    NativeSelect
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {},
    name: {
        width: "30%"
    },
    div: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2)
    },

    title: {
        marginRight: theme.spacing(20)
    },

    editbtn: {
        margin: theme.spacing("auto"),
        textAlign: "center"
    },

    select: {
        width: "40%"
    }
}));

const useInput = (initVal) => {
    const [value, setValue] = useState(initVal);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return {value, onChange};
};

const TomatoEditModal = ({name, fullRegular, fullBreak}) => {
    const classes = useStyles();
    const tomatoName = useInput("");
    const tomatoFullRegular = useInput("");
    const tomatoFullBreak = useInput("");

    // const handleChange = (event) => {     const name = event.target.name;
    // setState({       ...state,       [name]: event.target.value,     });   };

    return (
        <> < TextField className = {
            classes.name
        }
        id = "standard-textarea" label = "" placeholder = {
            name
        }
        multiline {
            ...name
        } /> <p id="transition-modal-description">
            <FormControl className={classes.formControl}>
                <div className={classes.div}>
                    <InputLabel htmlFor="age-native-simple"></InputLabel>
                    <Typography className={classes.title}>재배 시간</Typography>
                    <NativeSelect
                        defaultValue={fullRegular / 60}
                        inputProps={{
                            name: 'tomatoFullRegular',
                            id: 'uncontrolled-native'
                        }}>
                        <option value={5}>5분</option>
                        <option value={10}>10분</option>
                        <option value={15}>15분</option>
                        <option value={20}>20분</option>
                        <option value={25}>25분</option>
                        <option value={30}>30분</option>
                    </NativeSelect>
                    </div>
                    <div className={classes.div}>
                        <InputLabel htmlFor="age-native-simple"></InputLabel>
                        <Typography className={classes.title}>휴식 시간</Typography>
                        <NativeSelect
                        defaultValue={fullBreak / 60}
                        inputProps={{
                            name: 'tomatoFullBreak',
                            id: 'uncontrolled-native'
                        }}>
                        <option value={5}>5분</option>
                        <option value={10}>10분</option>
                        <option value={15}>15분</option>
                        <option value={20}>20분</option>
                        <option value={25}>25분</option>
                        <option value={30}>30분</option>
                    </NativeSelect>
                    </div>
                    <div className={classes.editbtn}>
                        <Button variant="contained" color="secondary">수정</Button>
                    </div>
                </FormControl>
            </p>
        </>
    );
};

export default TomatoEditModal;