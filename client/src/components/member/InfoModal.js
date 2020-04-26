import React from "react";
import { Avatar, makeStyles, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    div: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2)
    },
    
    name: {
        marginRight: theme.spacing(10)
    },
    
    pass: {
        marginRight: theme.spacing(8)
    },

    confirm: {
        marginRight: theme.spacing(3.5)
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

const InfoModal = () => {
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
                    <Typography className={classes.name}>닉네임</Typography>
                    <TextField
                    id="standard-textarea"
                    label=""
                    placeholder="nickname"
                    multiline
                    />
                </div>

                <div className={classes.div}>
                    <Typography className={classes.pass}>비밀번호</Typography>
                    <TextField
                    id="standard-textarea"
                    label=""
                    placeholder="password"
                    multiline
                    />
                </div>

                <div className={classes.div}>
                    <Typography className={classes.confirm}>비밀번호 확인</Typography>
                    <TextField
                    id="standard-textarea"
                    label=""
                    placeholder="password"
                    multiline
                    />
                </div>
                <div className={classes.button}>
                    <Button variant="contained" color="secondary">수정</Button>
                </div>
            </form>
        </>
    );
};

export default InfoModal;