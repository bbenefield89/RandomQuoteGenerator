import React from 'react';

const Anchor = props => {
  return (
    <a
      href={ props.tweetURL }
      target={ props.targetATTR }
      title={ props.title }
    >
      { props.value }
    </a>
  );
}
 
export default Anchor;