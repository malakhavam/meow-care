import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RESPONSE } from '../../utils/mutations';

const ResponseForm = ({ commentId }) => {
  const [responseBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addResponse, { error }] = useMutation(ADD_RESPONSE);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addResponse({
        variables: { responseBody, commentId },
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Leave your comment here: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Your information or comment here"
          value={responseBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Meow
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ResponseForm;
