import './globals.css'
export const metadata = {
  title: 'Shahidul Alam Minhaz',
  description: "I'm Shahidul Alam Minhaz, a web developer with a passion for crafting user-focused web applications. With expertise in JavaScript, NodeJS and PHP and the MERN stack, I transform creative ideas into functional, efficient, and elegant web solutions.",
  image:"/images/me.jpg"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
