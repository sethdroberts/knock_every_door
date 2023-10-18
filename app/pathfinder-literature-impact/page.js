import Link from 'next/link';

export default function Page() {
  return (
  <>
  <h1>Hello, Next.js!</h1>
  <p>Click <a href="https://www.misda.org/departments/literature-ministries/pathfinder-literature-impact">here</a> for more info.</p>
  <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </>
  )
}