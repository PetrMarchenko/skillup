import React, {useEffect} from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const UserPage = props => {

    const {
        user,
        getSkillUser,
        skills,
        fetchSkill
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
    }, [getSkillUser,fetchSkill]);


    const getValues =  () => {
        console.log('USER', user, user.skills);
        let map = {};
        skills.map(skill => {
            map[skill.id] = (-1 !== user.skills.findIndex(element => element === skill.id));
        });
        return map;
    };
    const [values, setValues] = React.useState(getValues());
    const handleChange = name => event => {
        console.log('values', values,'name', name);
        setValues({...values, [name]: event.target.checked});
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

        <div>{user.skill}</div>
    </div>
  );
}

export default UserPage;