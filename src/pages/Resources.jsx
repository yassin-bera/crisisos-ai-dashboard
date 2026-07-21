import {
  Droplets,
  Pill,
  Utensils,
  Fuel,
  Zap
} from "lucide-react"

import { useCrisis } from "../context/CrisisContext"



const icons = {

  Water: Droplets,

  Medicine: Pill,

  Food: Utensils,

  Fuel: Fuel,

  Generator: Zap

}





function Resources(){


  const { data } = useCrisis()





  function getStatus(amount){


    if(amount >= 70){

      return {
        text:"Stable",
        color:"text-green-400 bg-green-400/10 border-green-400/20"
      }

    }



    if(amount >= 40){

      return {
        text:"Warning",
        color:"text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      }

    }



    return {

      text:"Critical",

      color:"text-red-400 bg-red-400/10 border-red-400/20"

    }


  }







  return (


    <div className="space-y-8 animate-in fade-in duration-500">





      <div>


        <h1 className="text-4xl font-bold">

          Resources

        </h1>


        <p className="mt-2 text-slate-400">

          Critical resource management system

        </p>


      </div>








      <div className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      overflow-x-auto
      ">


        <table className="w-full min-w-[700px]">



          <thead className="bg-white/10">


            <tr>


              <th className="p-5 text-right">

                Resource

              </th>


              <th className="p-5 text-right">

                Remaining

              </th>


              <th className="p-5 text-right">

                Status

              </th>



            </tr>



          </thead>






          <tbody>


            {

              data.resources.map(resource=>{


                const Icon =
                  icons[resource.name] || Zap


                const status =
                  getStatus(resource.amount)



                return (


                  <tr

                    key={resource.id}

                    className="
                    border-t
                    border-white/10
                    hover:bg-white/5
                    transition
                    "

                  >




                    <td className="p-5">


                      <div className="flex items-center gap-3">


                        <Icon
                          size={25}
                          className="text-blue-400"
                        />


                        <span>

                          {resource.name}

                        </span>


                      </div>


                    </td>






                    <td className="p-5">


                      <div className="flex items-center gap-4">



                        <div className="
                        w-48
                        h-3
                        rounded-full
                        bg-white/10
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




                        <span className="font-bold">

                          {resource.amount}%

                        </span>




                      </div>


                    </td>






                    <td className="p-5">


                      <span

                        className={`
                        px-4
                        py-2
                        rounded-xl
                        border
                        text-sm
                        ${status.color}
                        `}

                      >

                        {status.text}

                      </span>


                    </td>




                  </tr>


                )


              })

            }



          </tbody>



        </table>



      </div>




    </div>


  )


}




export default Resources