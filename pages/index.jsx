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
          <Link href="/">Home</Link>
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
