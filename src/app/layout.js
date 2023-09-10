import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Page rendered on {new Date().toLocaleString()} Copyright Vic Caruso
          2023
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
