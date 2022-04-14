import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  document.body.classList.add('home-back');
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    option: ['Cat Owner']
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

      
      return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-md-6">
            <div className="card">
              <h4 className="card-header">Sign Up</h4>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  
                  <p> Select your profile type: 
                  <select value={formState.option} className="form-input" id="dropdown" onChange={handleChange}>
                  <option className="form-input" option="Cat Owner">Cat Owner</option>
                  <option className="form-input" option="Cat Sitter">Cat Sitter</option>
                  <option className="form-input" option="Can do both">Can do both</option>
                </select>
                             
                  </p>
                  
                  <button className="btn d-block w-100" type="submit">
                    Meow
                  </button>
                </form>

                {error && <div>Signup failed</div>}
              </div>
            </div>
          </div>
        </main>
      );
    
  
 };

export default Signup;
