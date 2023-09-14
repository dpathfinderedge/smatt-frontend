import { search, settings } from "../assets";

const Search = () => {
  return (
    <div className="flex justify-between items-center w-full space-x-2 bg-slate-200 rounded-lg h-10 mt-2 p-2">
      <div className="w-2/4 rounded-lg bg-white relative">
        <input type="search" placeholder="Search" className="w-full h-full border-0 outline-0 rounded-lg text-xs pl-3" />
        <span className="absolute right-3 top-[50%] -translate-y-[50%]"><img src={search} alt="search" className="w-4 h-4" /></span>
      </div>
      <div className="flex">
        <p className="text-xs font-semibold text-slate-700 whitespace-nowrap">Wed, 12th July</p> {/** {format(new Date(), 'mm/dd/yy')}*/}
        {/* <span><img src={arrowDown} alt="" className="w-4 h-4" /></span> */}
      </div>
      <img src={settings} alt="settings" className="w-4 h-4" />
    </div>
  )
}

export default Search;