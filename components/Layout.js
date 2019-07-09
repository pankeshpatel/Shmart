// this is a file for common components.

import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

// The CSS CDN is put into head
// (<Head> .... </Head>) section

// props.children -- specifies the
// child of specific content of a HTML page.


export default props => {
  return (
    <Container>
		<Head>
		<link rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
    />
		</Head>
		<Header/>
		{props.children}
	</Container>
  );
};
