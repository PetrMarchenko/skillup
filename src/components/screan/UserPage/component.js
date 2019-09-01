import React, {useEffect} from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import {useStyles} from "../SkillsPage/SkillForm/stylesComponent";

const UserPage = props => {

    const classes = useStyles();

    const {
        userSkills,
        getSkillUser,
        editSkillUser
    } = props;

    useEffect(() => {
        const params = {
            'id' : props.match.params.id,
        };
        getSkillUser(params);

    }, [getSkillUser]);


    const [onChange, setOnChange] = React.useState(false);
    const [values, setValues] = React.useState(userSkills.userSkills);
    const handleChange = name => event => {
        setOnChange(true);
        setValues({...values, [name]: event.target.checked});
    };
    const onClickSubmit = () => {
        let user = {};
        user.id = props.match.params.id;
        user.skills = [];

        userSkills.skills.map(skill => {
            if (values[skill.id]) {
                user.skills.push(skill.id);
            }
        });
        editSkillUser(user);
    };

    if (userSkills.userSkills !== values && !onChange) {
        setValues(userSkills.userSkills);
        setOnChange(false);
    }

  return (
    <div>
      User Id {props.match.params.id}
        {
            userSkills.skills.map(skill => (
                <FormControlLabel key = {skill.id}
                    control={
                        <Checkbox
                            checked={values[skill.id]}
                            onChange={handleChange(skill.id)}
                            value={skill.id}
                            color="primary"
                        />
                    }
                    label={skill.name}
                />
            ))
        }

        <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onClickSubmit}
        >
            SAVE
        </Button>
    </div>
  );
}

export default UserPage;