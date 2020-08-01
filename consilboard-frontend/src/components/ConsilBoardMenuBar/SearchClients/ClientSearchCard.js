import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {addClientToConsilBoard} from "../../../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../../../context/consilboard/ConsilBoardContext";


const useStyles = makeStyles({
    root: {
        margin: 5,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        '&:hover': {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
        },
    },
});

function ClientSearchCard({ client }) {

    const dispatch = useContext(ConsilBoardDispatchContext);
    function handleDelete() {

        console.log(dispatch, client.id);
   /*     event.stopPropagation();
        removeClientFromDb(dispatch, client.id)*/
    }
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
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() =>
                        addClientToConsilBoard(dispatch, client)
                    }>
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ClientSearchCard;