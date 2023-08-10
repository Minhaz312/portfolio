import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'
import Contact from './components/Contact'
import prisma from '@/prismaClient'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const projectList = await prisma.projects.findMany({
    orderBy:{
      priority:"asc"
    },
  })
  const aboutRes = await prisma.users.findMany()
  const about = aboutRes[0]
  const skillList = await prisma.skills.findMany({
    orderBy:{
      priority:"asc"
    },
  });
  return (
    <>
    <main id='home'>
      <Hero title={about.title} slogan={about.slogan} resume={about.resume} />
      <section className='relative my-5 bg-[url("/images/bg-stars.png")]'>
        <About about={about.about} />
        <Skills skillList={skillList} />
      </section>
      <section className='relative w-full pb-10'>
        <ProjectList projectList={projectList} />
        {/* <img src='/images/bg-stars.png' className='absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10' /> */}
        <img src='/images/bg-stars.png' className='absolute top-0 object-cover bottom-0 left-0 rotate-180 right-0 w-full h-full -z-10' />
        <Contact info={about} />
      </section>
    </main>
    </>
  )
}
