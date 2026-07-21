import {
  AlertTriangle,
  Clock,
  CheckCircle,
  RefreshCw
} from "lucide-react"

import { useCrisis } from "../context/CrisisContext"



function Requests(){


  const {
    data,
    updateRequestStatus
  } = useCrisis()





  function priorityStyle(priority){


    if(priority === "CRITICAL"){

      return "text-red-400 bg-red-400/10 border-red-400/20"

    }


    if(priority === "HIGH"){

      return "text-orange-400 bg-orange-400/10 border-orange-400/20"

    }


    return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"


  }






  function statusStyle(status){


    if(status === "Completed"){

      return "text-green-400 bg-green-400/10 border-green-400/20"

    }


    if(status === "Sent"){

      return "text-blue-400 bg-blue-400/10 border-blue-400/20"

    }


    return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"


  }







  return (


    <div className="space-y-8 animate-in fade-in duration-500">





      <div>


        <h1 className="text-4xl font-bold flex items-center gap-3">


          <AlertTriangle />

          Requests


        </h1>



        <p className="mt-2 text-slate-400">

          Emergency response requests management

        </p>



      </div>







      <div className="grid gap-5">



        {

          data.requests.map(request=>(


            <div

              key={request.id}

              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              hover:bg-white/10
              transition
              "

            >




              <div className="flex flex-col md:flex-row justify-between gap-5">





                <div>


                  <h2 className="text-xl font-bold">

                    {request.title}

                  </h2>



                  <div className="flex items-center gap-2 mt-3 text-slate-400">


                    <Clock size={18}/>


                    {request.time}


                  </div>



                </div>







                <span

                  className={`
                  px-4
                  py-2
                  rounded-xl
                  border
                  h-fit
                  ${priorityStyle(request.priority)}
                  `}

                >

                  {request.priority}

                </span>




              </div>







              <div className="
              mt-6
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-4
              ">





                <div className="flex items-center gap-3">


                  <CheckCircle size={20}/>



                  <span>

                    Status:

                    {" "}

                    {request.status}


                  </span>


                </div>






                <span

                  className={`
                  px-4
                  py-2
                  rounded-xl
                  border
                  ${statusStyle(request.status)}
                  `}

                >

                  {request.status}

                </span>







                <button


                  onClick={() =>
                    updateRequestStatus(request.id)
                  }



                  className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-500/20
                  border
                  border-blue-400/20
                  px-5
                  py-2
                  hover:bg-blue-500/30
                  transition
                  "


                >

                  <RefreshCw size={18}/>

                  Update Status


                </button>




              </div>





            </div>


          ))

        }



      </div>





    </div>


  )


}




export default Requests