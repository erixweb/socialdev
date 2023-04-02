
import Head from "next/head"

import "/styles/styles.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Socialdev</title>
        <link rel="icon" href="next.svg" type="image/svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
