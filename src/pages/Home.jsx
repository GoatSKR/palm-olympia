import Compo2 from "../components/Compo2"
import Hero from "../components/Hero"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import ProjectHighlights from "../components/ProjectHighlights"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Compo2 />
      <Location />
      <ProjectHighlights />
    </>
  )
}
