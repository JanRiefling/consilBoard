import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {addClientToConsilBoard} from "../../../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../../../context/consilboard/ConsilBoardContext";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    root: {
        margin: 5,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
    },
    addButton: {
      fontSize: "0.7em",
    },
});

function ClientSearchCard({client}) {

    const dispatch = useContext(ConsilBoardDispatchContext);
    const classes = useStyles();
    return (

        <Grid item xs={10} sm={6} lg={3}>
            <Card
                className={classes.root}
            >
                <CardContent>
                    <Typography variant="body1" component="p">
                        {client.clientname}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Button
                        onClick={() =>
                        addClientToConsilBoard(dispatch, client)
                    }
                        size="small"
                        variant="outlined"
                    >
                        <Typography variant="caption" className={classes.addButton}>Add to Board</Typography>
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ClientSearchCard;