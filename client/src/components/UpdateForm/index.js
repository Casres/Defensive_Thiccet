// this is where you will have the ability to search for an item
// and update the quanity if logged in

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_UPDATE } from '../../utils/mutations';

const UpdateForm = ({ itemId }) => {

    const [updateBody, setBody] = useState('');
    const [addUpdate, {error}] = useMutation(ADD_UPDATE);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
          }
    };
          // submit form
          const handleFormSubmit = async event => {
            event.preventDefault();

            try {
                await addReaction({
                  variables: { updateBody, itemId },
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
        <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave a reaction to this thought..."
          value={updateBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>

      </form>
      {error && <div>Error</div>}
    </div>
);
};
export default UpdateForm;