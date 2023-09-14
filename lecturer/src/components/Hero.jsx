import { heroBg } from "../assets"

const Hero = () => {
  return (
    <div className="w-full absolute left-0 -z-10 top-0 opacity-30 md:opacity-100 md:w-1/2">
      <img src={heroBg} alt="hero bg" className="w-full" />
    </div>
    
  )
}

export default Hero