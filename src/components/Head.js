import React from 'react';

const Head = () => {
  return (
    <head className="head">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Little Lemon</title>
      <meta property="og:title" content="Little Lemon" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="lemon-logo.png" />
      <meta property="og:url" content="https://littlelemon" />
      <meta property="og:description" content="Little lemon is a family restaurant etc." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Little Lemon" />

      <meta name="description" content="A brief description" />
      <meta name="author" content="Little Lemon Restaurant" />
    </head>
  );
};

export default Head;
