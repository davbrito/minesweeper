import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
