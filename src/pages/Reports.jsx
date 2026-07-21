import { useCrisis } from "../context/CrisisContext"

import { generateReportPDF } from "../services/pdfService"



function Reports(){


  const { data } = useCrisis()



  return (

    <div className="space-y-8">


      <div>


        <h1 className="text-4xl font-bold">
          Reports
        </h1>


        <p className="mt-2 text-slate-400">
          تولید گزارش بحران
        </p>


      </div>





      <div

        className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        "

      >


        <h2 className="text-2xl font-bold">

          گزارش فعلی سیستم

        </h2>



        <p className="mt-4 text-slate-300">

          سطح خطر:
          {" "}
          {data.risk}

        </p>




        <button


          onClick={() => generateReportPDF(data)}


          className="
          mt-6
          rounded-xl
          bg-white/10
          px-6
          py-3
          hover:bg-white/20
          transition
          "

        >

          Generate Report

        </button>


      </div>



    </div>

  )

}


export default Reports