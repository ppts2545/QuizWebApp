import React, { useState } from 'react';

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Handle form submission logic here
  const formData: FormData = {
    username: name,
    email: email,
    password: password,
  };

  console.log("Form submitterd:", formData);

  //Send to bakcend using fetch or axios
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
};

export default handleSubmit;