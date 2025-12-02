import Hero from '../components/Hero'
import ValueGrid from '../components/ValueGrid'
import ProjectsPreview from '../components/ProjectsPreview'
import CTABlock from '../components/CTABlock'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container">
        <ValueGrid />
        <ProjectsPreview />
      </section>
      <CTABlock />
    </>
  )
}
