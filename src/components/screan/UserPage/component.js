import React from 'react';

const UserPage = props => {

    console.log(props);

  return (
    <div>
      User Page
        {props.match.params.id}
    </div>
  );
}

export default UserPage;