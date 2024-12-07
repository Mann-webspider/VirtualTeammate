// "use client";
import './globals.css'

export const metadata = {
  title: 'virtual Teammate',
  description: 'Your virtual partner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth '>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Open+Sans:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
