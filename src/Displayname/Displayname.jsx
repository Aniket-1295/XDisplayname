import React, { useState } from 'react'

export const Displayname = () => {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div >
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          
        First Name:<input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            
          />
        </div>

        <div>
          
        Last Name:<input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            
          />
        </div>

        <button
          type="submit"
        >
          Submit
        </button>
      </form>

      {fullName && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          Full Name: {fullName}
        </div>
      )}
    </div>
  );
  
}
