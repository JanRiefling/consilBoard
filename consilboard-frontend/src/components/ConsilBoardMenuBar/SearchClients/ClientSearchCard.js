import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {addClientToConsilBoard} from "../../../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../../../context/consilboard/ConsilBoardContext";
import Chip from "@material-ui/core/Chip";
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
        padding: 3,
    },
    chipStyle: {
        fontSize: "1em",

    },
    addIcon: {
        fontSize: "0.9em",
        color: "green",
        borderWidth: 1,
    },
});

function ClientSearchCard({client}) {

    const dispatch = useContext(ConsilBoardDispatchContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Chip
                onClick={() =>
                    addClientToConsilBoard(dispatch, client)
                }
                label={client.clientname}
                clickable
                variant="outlined"
                size="medium"
                className={classes.chipStyle}
                icon={<AddIcon className={classes.addIcon} />}
            />
        </div>
    );
}

export default ClientSearchCard;