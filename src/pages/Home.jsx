import Amenities from "../components/Amenities"
import Compo2 from "../components/Compo2"
import Floorplan from "../components/Floorplan"
import Hero from "../components/Hero"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import Price from "../components/Price"
import ProjectHighlights from "../components/ProjectHighlights"
import Form1 from "../components/Form1"
import Experience from "../components/Experience"
import Scroll from "../components/Scroll"

export default function Home() {
  return (
    <>
      <Scroll />
      <Navbar />
      <Hero />
      <Compo2 />
      <Location />
      <Floorplan />
      <Price />
      <Amenities />
      <ProjectHighlights />
      <Experience />
      <Form1 />
    </>
  )
}
