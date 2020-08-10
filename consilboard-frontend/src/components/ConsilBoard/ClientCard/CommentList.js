import React, {useContext} from "react";
import {Typography} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {removeComment} from "../../../utils/client-utils";
import IconButton from "@material-ui/core/IconButton";
import {ClientDispatchContext} from "../../../context/clients/ClientContext";
import {REMOVE_COMMENT} from "../../../context/clients/client-actions";

function CommentList({comment, client}) {

    const dispatch = useContext(ClientDispatchContext);

    function handleRemove() {
        removeComment(comment.id, client.id)
            .then((data) => dispatch({type: REMOVE_COMMENT, payload: data}))
    }

    return (
        <Typography variant="body1">
            {comment.comment}
            <IconButton onClick={handleRemove} size="small">
                <DeleteForeverIcon fontSize="inherit" color="primary"/>
            </IconButton>
        </Typography>
    );
}

export default CommentList;