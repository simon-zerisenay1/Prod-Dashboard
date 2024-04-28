/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

const Delete = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteAccount = () => {
    // Perform deletion logic here
    setIsLoading(true); // Set loading state to true to hide the button
    // Simulate deletion process (setTimeout is used as an example, replace it with actual deletion logic)
    setTimeout(() => {
      // After some delay, you may want to redirect the user or show a confirmation message
      // For demonstration purposes, let's reset the loading state after 2 seconds
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div style={{ paddingBottom: '20px' }}>
        Confirm deleting your account. This action cannot be undone.
      </div>

      <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, auto)', gridTemplateColumns: '1fr', gap: '10px', maxWidth: '100px' }}>
        <input placeholder=''></input>
        <input placeholder='Password'></input>
        {!isLoading && (
          <button style={{ borderColor: 'black', color: 'red' }} onClick={deleteAccount}>Delete Account</button>
        )}
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Delete;
