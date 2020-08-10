import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import {Redirect} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    bottomNav: {
        marginRight: "auto",
        marginLeft: "auto",
    },
});

export default function ClientDetailBottomNav() {
    const classes = useStyles();
    const [value, setValue] = useState('ConsilBoard');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function goToConsilBoard() {
        return <Redirect to={'/api'}/>;
    }

    return (
        <div className={classes.root}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav}>
            <BottomNavigationAction label="ConsilBoard" value="ConsilBoard" icon={<HomeIcon  />} onClick={goToConsilBoard} />
            <BottomNavigationAction label="Comments" value="comments" icon={<CreateOutlinedIcon />} />
            <BottomNavigationAction label="Documents" value="documents" icon={<FolderIcon />} />
        </BottomNavigation>
        </div>
    );
}
