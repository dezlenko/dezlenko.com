import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="container home">
        <nav className="flex row center v">
          <i className="large color-pink fa-solid fa-code logo" />
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
          <h1 className="large">
            dezlenko<span className="color-pink">,</span>{' '}
            where <span className="color-cyan">half</span>-
            <span className="color-pink">assed</span> web
            projects are born
          </h1>
          <p className="large">
            And a bunch of other random things:
            <br />
            <strong>
              widgets, black magic, tests, plugins... you
              name it.
            </strong>
          </p>
        </div>
      </main>
    </>
  )
}
