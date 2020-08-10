import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import consilBoardTheme from "../../../styling/muiTheme";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CommentList from "./CommentList";
import {getComments} from "../../../utils/client-utils";
import ClientMenu from "./ClientMenu";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        borderColor: consilBoardTheme.palette.primary.dark,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.35)',
    },
    littleMenuContainer: {
        padding: 0,
    },

    clientCardHead: {
        padding: 10,
        fontSize: "1.1rem"
    },

    clientMenu: {},
}));

function ClientCard({client}) {

    const classes = useStyles();
    const [commentArr, setCommentArr] = useState([]);


    useEffect(() => {
        getComments(client.id)
            .then((data) => {
                setCommentArr(data);
                console.log(client);
            })
            .catch((error) => {
                return error;
            });
    }, [client.id, setCommentArr, client]);


    return (
        <Card className={classes.root}>
            <CardHeader
                title={client.clientname}
                className={classes.clientCardHead}
            />
            <CardContent>
                <Typography variant="caption">Latest Comment</Typography>
                <Divider/>
            </CardContent>
            <CardContent>
                {commentArr.map((comment) =>
                    (
                        <CommentList
                            key={comment.id}
                            comment={comment}
                            client={client}
                        />
                    ))}
            </CardContent>
            <Divider/>
            <CardActions disableSpacing className={classes.clientMenu}>
                <ClientMenu client={client}/>
            </ CardActions>
        </Card>
    );
}

export default ClientCard;