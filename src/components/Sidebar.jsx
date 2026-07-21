import {
    LayoutDashboard,
    BrainCircuit,
    Package,
    ClipboardList,
    Users,
    BarChart3,
    FileText
  } from "lucide-react"
  
  import { NavLink } from "react-router-dom"
  
  
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },
    {
      title: "AI Command Center",
      path: "/ai-command-center",
      icon: BrainCircuit
    },
    {
      title: "Resources",
      path: "/resources",
      icon: Package
    },
    {
      title: "Requests",
      path: "/requests",
      icon: ClipboardList
    },
    {
      title: "Volunteers",
      path: "/volunteers",
      icon: Users
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: BarChart3
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ]
  
  
  function Sidebar() {
  
  
    return (
  
      <aside
        className="
        fixed
        right-0
        top-0
        h-screen
        w-72
        border-l
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        "
      >
  
        <h1 className="text-3xl font-bold mb-10">
          CrisisOS
        </h1>
  
  
        <nav className="space-y-3">
  
  
          {
            menuItems.map((item)=>{
  
  
              const Icon = item.icon
  
  
              return (
  
                <NavLink
                  key={item.path}
                  to={item.path}
  
                  className={({isActive})=>
  
                    `
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition
  
                    ${
                      isActive
                      ?
                      "bg-white/15 text-white"
                      :
                      "text-slate-400 hover:bg-white/10"
                    }
  
                    `
                  }
                >
  
                  <Icon size={22}/>
  
                  <span>
                    {item.title}
                  </span>
  
  
                </NavLink>
  
              )
  
            })
          }
  
  
        </nav>
  
  
      </aside>
  
    )
  
  }
  
  
  export default Sidebar