import { Outlet } from "react-router-dom"

import Sidebar from "./Sidebar"


function Layout(){

  return (

    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
      "
    >


      <Sidebar />


      <main
        className="
        mr-72
        p-8
        "
      >

        <Outlet />

      </main>


    </div>

  )

}


export default Layout