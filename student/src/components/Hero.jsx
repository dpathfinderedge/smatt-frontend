import { heroImage } from "../assets"
// import Button from "./Button"

const Hero = () => {
  return (
    <div className="relative mt-4">
      <div className="absolute bg-scroll bg-gradient-to-b from-[#005BEA] to-[#00C6FB] w-[800px] md:w-[1000px] h-[800px] md:h-[1000px] rounded-full top-[-100px] md:top-[-300px] left-[-200px] md:left-[-200px] z-[-100] overflow-hidden" />
      <div className="flex flex-col justify-between items-center w-full max-w-[1200px] mx-auto md:px-0 px-4">
        <div className="flex justify-between space-x-2 md:space-x-8 w-full"> {/**bg-blue-500 */}
          <div className="w-3/5 md:w-2/5">
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-normal">Welcome to <br /> SMATT</h1>
            <div className="w-32 md:w-72 h-[1px] bg-gray-200 my-8" />
            <h3 className="text-sm font-light text-white">Our technologies offer the potential for accurate and efficient attendance tracking, eliminating the need for manual intervention and reducing the occurence of errors.</h3>
            <h3 className="text-sm font-light text-white mt-2">By leveraging technological advancements, we have focused on identifying, recognizing, recording, monitoring, positioning, and tracking students in a more efficient and accurate manner.</h3>
          </div>
          <div className="w-2/5 md:w-2/5 h-[400px]">
            <img src={heroImage} alt="hero image" className="w-auto h-[380px] md:h-full" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start md:items-center md:space-x-12 w-full h-full md:h-28 mt-2">
          <div className="w-full order-2 md:order-1"> {/**md:self-end */}
            <p className="text-lg md:text-sm font-semibold">Login as</p>
            <div className="flex justify-start items-center space-x-4 mt-2 w-full">
              <button
                type="button"
                onClick={() => {}}
                className="bg-main-blue-bg border-[2px] border-primary text-white text-sm font-semibold px-3 py-2 md:w-32 w-full rounded-lg uppercase"
              >
                Lecturer
              </button>
              <button
                type="button"
                onClick={() => {}}
                className="bg-white text-black text-sm font-semibold px-3 py-2 md:w-32 w-full border-[2px] border-primary rounded-lg uppercase"
              >
                Student
              </button>
              {/* <Button text={'lecturer'} classProps={'bg-main-blue-bg border-0 text-black '} handleClick={() => {}} />
              <Button text={'student'} classProps={'bg-main-light-bg border-1 text-black '} handleClick={() => {}} /> */}
            </div>
          </div>
          <div className="hidden md:block w-0.5 h-full bg-main-blue-bg order-2" />
          <div className="order-1 md:order-2 md:self-start my-4 md:mb-0">
            <h2 className="text-lg font-semibold">Overview</h2>
            <ul className="flex flex-col space-y-1 mt-1 list-disc list-inside">
              <li className="text-sm font-medium">View/Download Attendance Report On The Go</li>
              <li className="text-sm font-medium">Biometrics and GPS Integration</li>
              <li className="text-sm font-medium">Classroom Attendace Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero