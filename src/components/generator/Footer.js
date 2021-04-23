import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import CreateIcon from '@material-ui/icons/Create'

const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

const Footer = (props) => {

    const classes = useStyles()

    let [dialogOpen, setDialogOpen] = useState(false)
    let [newStudent, setNewStudent] = useState('')

    const handleStudentSubmit = () => {
        props.setStudents([...props.students, newStudent])
        setDialogOpen(false)
    }

    return(
        <>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Add a student</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Add student's name below
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Student's name"
                        onChange={(e) => setNewStudent(e.target.value)}
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleStudentSubmit()} color="primary">
                        Save
                    </Button>
                </DialogActions>

            </Dialog>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <AddIcon onClick={() => setDialogOpen(true)}/>
                    </Fab>
                    <div className={classes.grow} />
                    <IconButton edge="end" color="inherit">
                        <Button style={{color: 'white', backgroundColor: 'green'}}>Generate!</Button>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer