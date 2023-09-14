const Notifications = () => {
  return (
    <div className="md:w-2/5 w-full md:ml-10">
        <div className="bg-white">
            <div className="flex items-center bg-slate-300 w-full h-6 p-2">
            <h5 className="text-sm font-medium">Notifications</h5>
            </div>
            <div className="w-full p-2">
            <div>
                <p className="text-xs font-medium">Attendance</p>
                <li className="list-none text-xs">
                <ul>CSC 406: You were marked absent. Click here to view your records.</ul>
                </li>
            </div>
            <div className="mt-1">
                <p className="text-xs font-medium">Attendance</p>
                <li className="list-none text-xs">
                <ul>CSC 406: You were marked absent. Click here to view your records.</ul>
                </li>
            </div>
            </div>
            
        </div>
        </div>
  )
}

export default Notifications