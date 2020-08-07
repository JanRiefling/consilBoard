import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

function CommentList({comment}){
    return (
        <Grid item>
                <List variant="body2" color="textSecondary">
                    <ListItem>{comment.comment}</ListItem>
                </List>
        </Grid>
    );
}

export default CommentList;