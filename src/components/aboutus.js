import React , {useContext, useState} from 'react';
import { UserContext, useUser } from './usecontext';
import { UserProvider } from './usecontext';

function DisplayData() {
  const { userData } = useUser();
  const [usedata,setdata] = useState();

  const data = useContext(UserContext)
  
  console.log(data)
  
  return (
    <div>
      <h2>Display Data</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default DisplayData;
