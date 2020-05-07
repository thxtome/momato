import React from "react";
import { makeStyles, TextField, Typography, Button, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    div: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2)
    },
    
    titleId: {
        marginRight: theme.spacing(5)
    },
    
    titlePass: {
        marginRight: theme.spacing(3)
    },
    
    button: {
        margin: theme.spacing("auto"),
        textAlign: "center"
    },
    
    tomatoImg: {
        display: "block",
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(0, "auto"),
    },
    
    tomatoText: {
        display: "block",
        width: theme.spacing(15),
        margin: theme.spacing(3, "auto"),
    }

}));
const PassModal = () => {
    const classes = useStyles();

    return (
        <>
            <Avatar
            className={classes.tomatoImg}
            src="/images/homeMade.png"
            />
            <Typography className={classes.tomatoText} variant="h5">TOMATO</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.div}>
                    <Typography className={classes.titleId}>아이디</Typography>
                    <TextField
                    id="standard-textarea"
                    label=""
                    placeholder="example@tomato.com"
                    multiline
                    autoFocus 
                    />
                </div>
                <div className={classes.button}>
                    <Button variant="contained" color="secondary">이메일 전송</Button>
                </div>
            </form>
        </>
    );
};

export default PassModal;