import { logoDark } from "../assets";
import { Hero, Navbar } from "../components"

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar src={logoDark} />
      <Hero />
    </div>
  )
}

export default Home;