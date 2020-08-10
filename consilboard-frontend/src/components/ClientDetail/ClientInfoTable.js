import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    clientInfo: {
        marginLeft: "right",
    },
    tableHead: {
        backgroundColor: "#a6c1b3",
        color: "grey",
    },
});


function ClientInfoTable({client}) {

    function createData(name) {
        return {
            name,
        };
    }

    function Row(props) {
        const {row} = props;
        const [open, setOpen] = React.useState(false);
        const classes = useRowStyles();


        return (
            <React.Fragment>
                <TableRow>
                    <TableHead className={classes.tableHead}>
                        <TableCell scope="row">
                            Esha Vega
                        </TableCell>
                    </TableHead>
                </TableRow>
                <TableRow className={classes.root}>
                    <TableCell component="th" scope="row" align="left" className={classes.clientInfo}>
                        <IconButton aria-label="expand row" size="small" color="primary" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </IconButton>
                        {row.name}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0,}} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Address:</TableCell>
                                            <TableCell>734 Left Str</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>City:</TableCell>
                                            <TableCell>Sky City</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>E-mail:</TableCell>
                                            <TableCell>esha.vega@e-mail.com</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Phone:</TableCell>
                                            <TableCell>0034050435</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Job:</TableCell>
                                            <TableCell>Artist</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Family:</TableCell>
                                            <TableCell>0034050435</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }


    const rows = [
        createData('Client Information'),
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ClientInfoTable;
