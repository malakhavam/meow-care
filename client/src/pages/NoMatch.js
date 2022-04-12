import React from 'react';

const NoMatch = () => {
  document.body.classList.add('home-back');
  return (
    <div>
      Oops, we couldn't find that page.
    </div>
  );
};

export default NoMatch;