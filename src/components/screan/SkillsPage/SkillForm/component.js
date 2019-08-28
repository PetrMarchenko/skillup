import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "./stylesComponent";


const SkillForm = props => {

    const {
        addSkill,
    } = props;

    const [values, setValues] = React.useState([]);
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };
    const onClickSubmit = () => {
       console.log(values);
        addSkill(
            {
                name: values.name,
                department: values.department
            }
        );
    };
    const classes = useStyles();

  return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        type="text"
                        value={values['name']}
                        onChange={handleChange('name')}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="department"
                        label="department"
                        autoComplete="current-password"
                        type="text"
                        value={values['department']}
                        onChange={handleChange('department')}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onClickSubmit}
                    >
                        SAVE
                    </Button>
                </form>
            </div>
        </Container>
  );
}

export default SkillForm;