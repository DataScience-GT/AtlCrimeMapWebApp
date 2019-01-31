import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    button: {
        marginLeft: 20,
    }
};

function NavBar(props) {
    const { classes, onPress } = props; // get styles from withStyles HOC
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        GT Crime Map
                    </Typography>
                    <Button color="inherit" className={classes.button} onClick={onPress("map")}>Map</Button>
                    <Button color="inherit" className={classes.button} onClick={onPress("other")}>Some Other Page</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(NavBar);