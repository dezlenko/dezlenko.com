import Link from 'next/link'

export default function ProjectLink({ title, href, children }) {
  const renderDescription = () => {
    const maxLength = 12

    const words = children.split(' ')

    if (words.length > maxLength) {
      words.length === maxLength

      return words.join(' ') + '...'
    } else {
      return children
    }
  }

  return (
    <Link href={href}>
      <a className="project-link">
        <h3>{title}</h3>
        <p>{renderDescription()}</p>
        <span>
          View project <i className="fas fa-arrow-right" />
        </span>
      </a>
    </Link>
  )
}
