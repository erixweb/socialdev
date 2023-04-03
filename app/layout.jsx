
import "./styles.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Socialdev</title>
        <link rel="icon" href="vercel.svg" type="image/svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
