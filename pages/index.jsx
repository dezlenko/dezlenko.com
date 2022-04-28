import Head from 'next/head'
import Link from 'next/link'
import Carousel from '../components/Carousel'
import ProjectLink from '../components/ProjectLink'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Prize Wheel',
      description: 'An asynchronous spin wheel with weighted prizes and randomization.',
      href: '/',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eveniet!',
      href: '/',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eveniet!',
      href: '/',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eveniet!',
      href: '/',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eveniet!',
      href: '/',
    },
  ]

  const renderedProjects = projects.map(project => {
    return (
      <ProjectLink href={project.href} title={project.title}>
        {project.description}
      </ProjectLink>
    )
  })

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="container home">
        <nav className="flex row center v">
          <i className="large text-color-pink fa-solid fa-code logo" />
          <Link href="/">Home</Link>
          <Link href="/">Sandbox</Link>
          <Link href="/">Plugins</Link>
          <Link href="/">Other</Link>
          <Link href="https://github.com/dezlenko">
            <a className="github" target="_blank">
              <i className="large fa-brands fa-github" />
            </a>
          </Link>
        </nav>
        <div className="hero">
          <h1>
            dezlenko<span className="text-color-pink">,</span> where{' '}
            <span className="text-color-cyan">half</span>-
            <span className="text-color-pink">assed</span> web projects are born
          </h1>
          <p className="large">
            And a bunch of other random things:
            <br />
            <strong>widgets, black magic, tests, plugins... you name it.</strong>
          </p>
        </div>
        <h2>Current Projects</h2>
        <Carousel items={renderedProjects} />
      </main>
    </>
  )
}
