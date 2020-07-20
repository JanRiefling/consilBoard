import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";

function ConsilBoardUserPage(){



    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
        <Typography>Hello User!</Typography>
        <Button>ConsilBoard</Button>
        <Button>Clients</Button>
        </Grid>
    );
}

export default ConsilBoardUserPage;