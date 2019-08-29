import React, {useEffect} from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import {useStyles} from "../SkillsPage/SkillForm/stylesComponent";

const UserPage = props => {

    const classes = useStyles();

    const {
        user,
        getSkillUser,
        skills,
        fetchSkill,
        editSkillUser
    } = props;

    useEffect(() => {
        const params = {
            'id' : props.match.params.id,
        };
        getSkillUser(params);

        fetchSkill({
            'order' : 'id',
            'orderBy' : 'desc',
        });

    }, [getSkillUser, fetchSkill]);


    const getValues =  () => {
        console.log('USER', user.skills);
        let map = {};
        skills.map(skill => {
            console.log('MAP', skill.id, (-1 !== user.skills.findIndex(element => element === skill.id)));
            map[skill.id] = (-1 !== user.skills.findIndex(element => element === skill.id));
        });
        return map;
    };
    const [values, setValues] = React.useState(getValues());
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.checked});
    };
    const onClickSubmit = () => {
        let user = {};
        user.id = props.match.params.id;
        user.skills = [];

        skills.map(skill => {
            if (values[skill.id]) {
                user.skills.push(skill.id);
            }
        });

        editSkillUser(user);

        // console.log(user);
    };


  return (
    <div>
      User Id {props.match.params.id}
        {
            skills.map(skill => (
                <FormControlLabel
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
        <div>{user.skills}</div>
    </div>
  );
}

export default UserPage;