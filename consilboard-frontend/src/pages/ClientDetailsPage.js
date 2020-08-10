import React, {useEffect, useState} from "react";
import {fetchClient} from "../utils/client-utils";
import {useParams} from "react-router-dom";
import ClientInfoTable from "../components/ClientDetail/ClientInfoTable";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CommentTable from "../components/ClientDetail/CommentTable";
import DocumentTable from "../components/ClientDetail/DocumentTable";
import ClientDetailBottomNav from "../components/ClientDetail/ClientDetailBottomNav";


const useStyles = makeStyles(() => ({

    clientDetailContainer: {
        flexDirection: "column",
        position: "relative",
        paddingTop: 50,
        height: "100vh",
    },
    bottomNav: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        marginRight: "auto",
    },
}));


function ClientDetailsPage() {

    const classes = useStyles();
    const {id} = useParams();
    const [client, setClient] = useState();

    useEffect(() => {
        fetchClient(id)
            .then((data) => {
                setClient(data)
                console.log(data)
            })
            .catch((e) => console.error(e));
    }, [id]);

    useEffect(() => {
        console.log(client)
    }, [client]);


    return (
        <Grid container className={classes.clientDetailContainer}>
            <Grid item>
                <ClientInfoTable client={client}/>
            </Grid>
            <Grid item>
                <CommentTable client={client}/>
            </Grid>
            <Grid item>
                <DocumentTable client={client}/>
            </Grid>
            <Grid item className={classes.bottomNav}>
                <ClientDetailBottomNav />
            </Grid>
        </Grid>

    );

}

export default ClientDetailsPage;