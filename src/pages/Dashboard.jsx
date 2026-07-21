import {
  Droplets,
  Pill,
  Utensils,
  Fuel,
  Zap,
  Users,
  AlertTriangle,
  Activity
} from "lucide-react"

import { useCrisis } from "../context/CrisisContext"



const resourceIcons = {

  Water: Droplets,

  Medicine: Pill,

  Food: Utensils,

  Fuel: Fuel,

  Generator: Zap

}



function Dashboard(){


  const {
    data,
    simulateHour
  } = useCrisis()



  const cards = data.resources.map(resource => ({


    ...resource,


    icon:
      resourceIcons[resource.name] || Activity


  }))



  return (


    <div className="space-y-8 animate-in fade-in duration-500">



      <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-center">


        <div>


          <h1 className="text-4xl font-bold">

            Dashboard

          </h1>


          <p className="mt-2 text-slate-400">

            CrisisOS Emergency Command Center

          </p>


        </div>




        <button

          onClick={simulateHour}

          className="
          rounded-xl
          bg-blue-500/20
          border
          border-blue-400/30
          px-6
          py-3
          hover:bg-blue-500/30
          transition
          duration-300
          "

        >

          Simulate One Hour

        </button>



      </div>





      <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-5
      gap-5
      ">



        {
          cards.map(resource => {


            const Icon = resource.icon


            return (


              <div

                key={resource.id}

                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-5
                hover:bg-white/10
                transition
                "

              >


                <Icon
                  size={32}
                  className="text-blue-400"
                />



                <h3 className="mt-4 text-lg">

                  {resource.name}

                </h3>



                <p className="text-3xl font-bold mt-2">

                  {resource.amount}%

                </p>




                <div className="
                mt-4
                h-2
                bg-white/10
                rounded-full
                overflow-hidden
                ">


                  <div

                    className="
                    h-full
                    bg-blue-400
                    transition-all
                    duration-700
                    "

                    style={{
                      width:`${resource.amount}%`
                    }}

                  />


                </div>



              </div>


            )


          })
        }



      </div>






      <div className="grid md:grid-cols-3 gap-5">



        <div className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        ">


          <Users className="text-green-400"/>


          <p className="mt-4 text-slate-400">

            Volunteers

          </p>


          <p className="text-3xl font-bold">

            {data.volunteers.length}

          </p>


        </div>





        <div className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        ">


          <AlertTriangle className="text-yellow-400"/>


          <p className="mt-4 text-slate-400">

            Requests

          </p>


          <p className="text-3xl font-bold">

            {data.requests.length}

          </p>


        </div>





        <div className="
        rounded-2xl
        border
        border-red-500/20
        bg-red-500/10
        backdrop-blur-xl
        p-6
        ">


          <Activity className="text-red-400"/>


          <p className="mt-4 text-slate-300">

            Risk Level

          </p>


          <p className="text-3xl font-bold text-red-400">

            {data.risk}

          </p>


        </div>




      </div>





      <div className="
      rounded-2xl
      border
      border-orange-400/20
      bg-orange-400/10
      p-6
      ">



        <h2 className="text-xl font-bold">

          Active Alerts

        </h2>



        <div className="mt-4 space-y-3 text-slate-300">


          <p>
            ⚠ Resource consumption is being monitored
          </p>


          <p>
            ⚠ AI Command Center ready for analysis
          </p>


          <p>
            ⚠ Emergency response system active
          </p>


        </div>



      </div>




    </div>


  )

}



export default Dashboard