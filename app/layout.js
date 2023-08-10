import './globals.css'
export const metadata = {
  title: 'Mohammad Minhaz',
  description: 'Mohammad shahidul alam minhaz is a web developer, he develop application using MERN stack',
  image:"/images/me.jpg"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
