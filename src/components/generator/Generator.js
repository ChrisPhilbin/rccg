import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import BlockIcon from '@material-ui/icons/Block'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Footer from './Footer'



const useStyles = makeStyles((theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    icons: {
        float: 'right',
        paddingRight: '20px'
    },
    ratingCategory: {
        padding: '10px 0',
    }
  }))

const Generator = () => {

    const classes = useStyles()

    const removeStudent = (student) => {
        const index = students.indexOf(student)
        if (index > -1) {
            students.splice(index, 1)
            setStudents([...students])
        }
    }

    const handleToggle = (e) => {
        
    }

    // let [students, setStudents] = useState(['Sam', 'Mike', 'Chris', 'Mary'])
    let [students, setStudents] = useState([])
        if (students.length !== 0) {
            return(
                <>
                    <Container maxWidth="md">
                        <h4>Commet generator</h4>

                            {students.map((student) => (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <CheckCircleOutlineIcon style={{fill: 'green', paddingRight: 10}}/>
                                        <Typography className={classes.heading}>{student}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12}>
                                                <Typography>
                                                    Provide insight into {student}'s behaviors
                                                </Typography>
                                                <span><Button onClick={() => removeStudent(student)}>Remove</Button></span>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <div className={classes.ratingCategory}>
                                                    All academic areas <span className={classes.icons}><BlockIcon className="none" onClick={(e) => handleToggle(e)} /> <ThumbUpIcon /> <ThumbDownIcon /></span>
                                                </div>

                                                <div className={classes.ratingCategory}>
                                                    Homework completion <span className={classes.icons}><BlockIcon /> <ThumbUpIcon /> <ThumbDownIcon /></span>
                                                </div>

                                                <div className={classes.ratingCategory}>
                                                    Math <span className={classes.icons}><BlockIcon /> <ThumbUpIcon /> <ThumbDownIcon /></span>
                                                </div>

                                                <div className={classes.ratingCategory}>
                                                    Reading <span className={classes.icons}><BlockIcon /> <ThumbUpIcon /> <ThumbDownIcon /></span>
                                                </div>

                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))}

                    </Container>

                    <Footer students={students} setStudents={setStudents}/>
                </>
            )
        } else {
            return (
                <>
                    <Container>
                        <Typography>
                            It looks like you don't have any students added yet. Tap or click the add button below to get started!
                        </Typography>
                    </Container>

                    <Footer students={students} setStudents={setStudents}/>
                </>
            )
        }
}

export default Generator