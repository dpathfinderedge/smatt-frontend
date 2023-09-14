import { study } from "../assets";

const Widget = () => {  

  return (
    <div className="bg-white md:p-5 p-3 shrink-0 rounded-lg">
      <h5 className="text-xs font-semibold text-slate-700">CSC 412</h5>
      <div className="flex items-center space-x-2 mt-1">
        <div className="bg-slate-300 md:w-10 w-8 md:h-10 h-8 rounded-full flex items-center justify-center shrink">
          <img src={study} alt="study" className="md:w-5 w-4 md:h-5 h-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">A.I</p>
          <p className="text-xs font-semibold text-slate-700">Dr. R.S. Babatunde</p>
        </div>
      </div>
    </div>
  )
};

export default Widget;