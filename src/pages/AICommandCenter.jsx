import { useState } from "react"

import {
  Brain,
  AlertTriangle,
  CheckCircle,
  LoaderCircle,
  Sparkles
} from "lucide-react"

import { useCrisis } from "../context/CrisisContext"

import { analyzeCrisis } from "../services/geminiService"



function AICommandCenter(){


  const { data } = useCrisis()


  const [result,setResult] = useState(null)

  const [loading,setLoading] = useState(false)

  const [error,setError] = useState("")




  async function handleAnalyze(){


    setLoading(true)

    setError("")

    setResult(null)



    try {


      const response = await analyzeCrisis(data)



      if(response){

        setResult(response)

      }

      else{

        setError("No AI response received")

      }


    }

    catch(error){


      console.error(error)


      setError(
        "AI analysis failed. Check Gemini connection."
      )


    }

    finally{

      setLoading(false)

    }


  }





  return (


    <div className="space-y-8 animate-in fade-in duration-500">



      <div dir="ltr">


        <h1 className="text-4xl font-bold flex items-center gap-3">

          <Brain />

          AI Command Center

        </h1>


        <p className="mt-2 text-slate-400">

          Gemini powered crisis decision system

        </p>


      </div>





      <div className="
      rounded-2xl
      border
      border-green-400/20
      bg-green-400/10
      p-5
      flex
      items-center
      gap-3
      ">


        <CheckCircle className="text-green-400"/>


        <span dir="ltr">

          Gemini AI Connected

        </span>


      </div>






      <button

        dir="ltr"

        onClick={handleAnalyze}

        disabled={loading}

        className="
        rounded-xl
        bg-blue-500/20
        border
        border-blue-400/30
        px-7
        py-3
        flex
        items-center
        gap-3
        hover:bg-blue-500/30
        transition
        disabled:opacity-50
        "

      >


        {

          loading

          ?

          <>

            <LoaderCircle className="animate-spin"/>

            Analyzing...

          </>


          :

          <>

            <Sparkles/>

            Analyze Crisis

          </>

        }


      </button>







      {
        error && (


          <div className="
          rounded-xl
          bg-red-500/10
          border
          border-red-400/20
          p-5
          text-red-300
          ">


            <AlertTriangle className="inline mr-2"/>


            <span dir="ltr">

              {error}

            </span>


          </div>


        )

      }








      {
        result && (


          <div className="space-y-6" dir="ltr">





            <div className="
            rounded-2xl
            border
            border-red-400/20
            bg-red-400/10
            backdrop-blur-xl
            p-6
            ">


              <h2 className="text-xl font-bold">

                Risk Level

              </h2>


              <p className="text-4xl mt-3 font-bold text-red-400">

                {result.risk || "UNKNOWN"}

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


              <h2 className="text-xl font-bold">

                AI Summary

              </h2>


              <p className="mt-4 text-slate-300">

                {result.summary || "No summary"}

              </p>


            </div>








            <div className="grid md:grid-cols-2 gap-6">



              <ResultCard

                title="Recommended Actions"

                items={result.actions}

              />




              <ResultCard

                title="Resource Plan"

                items={result.resourcePlan}

              />



            </div>









            <div className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            ">


              <h2 className="text-xl font-bold">

                Prediction

              </h2>


              <p className="mt-4 text-slate-300">

                {result.prediction || "No prediction"}

              </p>


            </div>






          </div>


        )

      }





    </div>


  )


}





function ResultCard({title,items}){


  return (


    <div

      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-6
      "

    >


      <h2 className="text-xl font-bold">

        {title}

      </h2>



      <ul className="mt-4 space-y-3 text-slate-300">


        {

          Array.isArray(items)

          ?

          items.map((item,index)=>(

            <li key={index}>

              • {item}

            </li>

          ))

          :

          <li>

            No data

          </li>

        }


      </ul>



    </div>


  )


}





export default AICommandCenter