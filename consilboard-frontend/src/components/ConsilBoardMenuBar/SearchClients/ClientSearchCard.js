import React, {useContext} from "react";
import {ClientDispatchContext} from "../../../context/clients/ClientContext";
/*import {removeClientFromDb} from "../../../utils/client-utils";*/
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        margin: 5,
        backgroundColor: 'lightgray',
        '&:hover': {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
        },
    },
});

function ClientSearchCard({ client }) {

    const dispatch = useContext(ClientDispatchContext);

    function handleDelete() {

        console.log(dispatch, client.id);
   /*     event.stopPropagation();
        removeClientFromDb(dispatch, client.id)*/
    }
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid item xs={10} sm={6} lg={3}>
            <Card
                className={classes.root}
                onClick={() => history.push(`/clients/${client.id}`)}
            >
                <CardContent>
                    <Typography variant="body1" component="p">
                        {client.clientname}
                    </Typography>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ClientSearchCard;