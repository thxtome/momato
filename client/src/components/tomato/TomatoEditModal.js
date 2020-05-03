import React from "react";
import { makeStyles, Button, FormControl, InputLabel, Select, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
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
        width: "40%",
    }
}));


const TomatoEditModal = ({ name }) => {
    const classes = useStyles();
    
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    return (
        <>
            <h2 id="transition-modal-title">
                {name}
            </h2>
            <p id="transition-modal-description">
                <FormControl className={classes.formControl}>
                <div className={classes.div}>
                <InputLabel htmlFor="age-native-simple"></InputLabel>
                    <Typography className={classes.title} >재배 시간</Typography>
                    <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option selected value={25}>25</option>
                    </Select>
                </div>
                <div className={classes.div}>
                    <InputLabel htmlFor="age-native-simple"></InputLabel>
                    <Typography className={classes.title}>휴식 시간</Typography>
                    <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>5</option>
                    <option value={20}>10</option>
                    <option value={30}>15</option>
                    </Select>
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