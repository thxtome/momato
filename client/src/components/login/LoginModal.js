import React from "react";
import { makeStyles, TextField, Typography, Button, Avatar, Modal } from "@material-ui/core";
import Modals from "../common/Modal";

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
    },

    mButton: {
        fontSize: 15,
    }

}));
const LoginModal = () => {
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
                    />
                </div>
                <div className={classes.div}>
                    <Typography className={classes.titlePass}>비밀번호</Typography>
                    <TextField
                    id="standard-textarea"
                    label=""
                    placeholder="password"
                    multiline
                    />
                </div>
                {/* <div className={classes.mButton}>
                    <Modals type="signin" />
                    <Modals type="pass" />
                </div> */}
                <div className={classes.button}>
                    <Button variant="contained" color="secondary">로그인</Button>
                </div>
            </form>
        </>
    );
};

export default LoginModal;