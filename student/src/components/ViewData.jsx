import { useState } from "react";
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

import { arrowDown } from "../assets";

const Course = () => {
    return(
      <div className="bg-white p-2 absolute top-8 right-4 z-[2] rounded drop-shadow-xl">
        <h5 className="text-xs font-semibold border-b">Course Lists</h5>
        <li className="list-none mt-2">
          <ul className="text-xs text-slate-700">CSC 304</ul>
          <ul className="text-xs text-slate-700">CSC 304</ul>
          <ul className="text-xs text-slate-700">CSC 304</ul>
        </li>
        
      </div>
    )
  };

export const ViewData = () => {
  const [openCourse, setOpenCourse] = useState(false);
  const [openDateFrom, setOpenDateFrom] = useState(false);
  const [openDateTo, setOpenDateTo] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
  return (
    <div className="flex justify-between items-center space-x-2 mt-2 w-full md:h-9"> {/**w-full  h-9*/}
      <div className="flex md:flex-row flex-col justify-between md:items-center md:space-x-1 space-x-0 md:space-y-0 space-y-1 bg-slate-200 rounded-md p-1 md:w-full w-4/5 h-full">
        <div
          onClick={() => setOpenCourse(!openCourse)}
          className="flex justify-between items-center bg-white w-full h-full relative p-1"
        >
          <p className="md:text-sm text-xs font-semibold text-slate-400">Course</p>
          <div className="flex justify-between items-center space-x-1">
            <p className="md:text-sm text-xs font-semibold text-slate-500">CSC 402</p>
            <img src={arrowDown} alt="arrow" className="w-3 h-3" />
          </div>
          {openCourse && <Course/>}
        </div>

        <div
          onClick={() => setOpenDateFrom(!openDateFrom)}
          className="flex justify-between items-center bg-white w-full h-full relative p-1"
        > 
          <p className="md:text-sm text-xs font-semibold text-slate-400">From</p>
          <div className="flex justify-between items-center space-x-1">
            <p className="md:text-sm text-xs font-semibold text-slate-500">{format(dates[0].startDate, 'mm/dd/yy')}</p>
            <img src={arrowDown} alt="arrow" className="w-3 h-3" />
          </div>
          {openDateFrom && <DateRange 
            editableDateInputs={true}
            onChange={item => setDates([item.selection])}
            // moveRangeOnFirstSlection={false}
            ranges={dates}
            minDate={new Date()}
            className="absolute top-8 md:right-4 right-0 z-[2] rounded drop-shadow-xl w-full h-56"
          />}
        </div>

        <div 
          onClick={() => setOpenDateTo(!openDateTo)}
          className="flex justify-between items-center bg-white w-full h-full relative p-1"
        >
          <p className="md:text-sm text-xs font-semibold text-slate-400">To</p>
          <div className="flex justify-end items-center space-x-1">                  
            <p className="md:text-sm text-xs font-semibold text-slate-500">{format(dates[0].startDate, 'mm/dd/yy')}</p>
            <img src={arrowDown} alt="arrow" className="w-3 h-3" />
          </div>
          {openDateTo && <DateRange 
            editableDateInputs={true}
            onChange={item => setDates([item.selection])}
            // moveRangeOnFirstSlection={false}
            ranges={dates}
            minDate={new Date()}
            className="absolute top-8 md:right-4 right-0 z-[2] rounded drop-shadow-xl w-full h-56"
          />}
        </div>
      </div>
      <button 
        type="button" 
        className="bg-primary text-white font-semibold text-xs p-2 rounded-md md:w-24 w-1/5 h-full"
        onClick={() => {}}
        >
          View
      </button> {/**w-24 */}
    </div>
  )
}

export default ViewData;