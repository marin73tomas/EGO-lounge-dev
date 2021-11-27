import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet();
  //   const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
  //   const styleTags = sheet.getStyleElement();
  //   return { ...page, styleTags };
  // }

  render() {
    return (
      <html>
        <Head>XD</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
