import {
  AlertTriangle,
  Home
} from "lucide-react"

import { useNavigate } from "react-router-dom"



function NotFound(){


  const navigate = useNavigate()





  return (


    <div className="
    min-h-[70vh]
    flex
    items-center
    justify-center
    ">



      <div className="
      text-center
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-10
      max-w-lg
      ">



        <AlertTriangle

          size={70}

          className="
          mx-auto
          text-red-400
          "

        />




        <h1 className="
        mt-6
        text-7xl
        font-bold
        text-red-400
        ">

          404

        </h1>





        <h2 className="
        mt-4
        text-2xl
        font-bold
        ">

          Page Not Found

        </h2>





        <p className="
        mt-3
        text-slate-400
        ">

          The requested crisis system module does not exist.

        </p>






        <button


          onClick={() => navigate("/")}



          className="
          mt-8
          flex
          items-center
          gap-3
          mx-auto
          rounded-xl
          bg-blue-500/20
          border
          border-blue-400/20
          px-6
          py-3
          hover:bg-blue-500/30
          transition
          "


        >


          <Home size={20}/>


          Back to Dashboard


        </button>




      </div>




    </div>


  )


}



export default NotFound