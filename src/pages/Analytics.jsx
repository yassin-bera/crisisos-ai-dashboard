import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import {
  Activity,
  BarChart3,
  PieChart as PieIcon
} from "lucide-react"

import { useCrisis } from "../context/CrisisContext"



function Analytics(){


  const { data } = useCrisis()



  const barData = data.resources.map(item=>({

    name:item.name,

    value:item.amount

  }))





  const pieData = [

    {
      name:"Stable",
      value:data.resources.filter(
        item=>item.amount >= 70
      ).length
    },


    {
      name:"Warning",
      value:data.resources.filter(
        item=>item.amount >=40 && item.amount <70
      ).length
    },


    {
      name:"Critical",
      value:data.resources.filter(
        item=>item.amount <40
      ).length
    }

  ]





  const lineData = [

    {
      time:"08:00",
      risk:35
    },

    {
      time:"10:00",
      risk:55
    },

    {
      time:"12:00",
      risk:data.risk === "HIGH" ? 85 : 60
    }

  ]





  return (

    <div className="space-y-8 animate-in fade-in duration-500">



      <div>

        <h1 className="text-4xl font-bold flex items-center gap-3">

          <Activity />

          Analytics

        </h1>


        <p className="mt-2 text-slate-400">

          Crisis data analysis and resource monitoring

        </p>


      </div>





      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">





        <div className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        ">


          <h2 className="flex gap-2 items-center text-xl font-bold mb-5">

            <BarChart3 size={22}/>

            Resource Consumption

          </h2>



          <ResponsiveContainer width="100%" height={300}>


            <BarChart data={barData}>


              <CartesianGrid strokeDasharray="3 3"/>


              <XAxis dataKey="name"/>


              <YAxis domain={[0,100]}/>


              <Tooltip/>


              <Bar
                dataKey="value"
                radius={[8,8,0,0]}
              />


            </BarChart>


          </ResponsiveContainer>



        </div>






        <div className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        ">


          <h2 className="flex gap-2 items-center text-xl font-bold mb-5">

            <PieIcon size={22}/>

            Resource Status

          </h2>



          <ResponsiveContainer width="100%" height={300}>


            <PieChart>


              <Pie

                data={pieData}

                dataKey="value"

                nameKey="name"

                outerRadius={110}

              >


                {
                  pieData.map((item,index)=>(

                    <Cell key={index}/>

                  ))
                }


              </Pie>


              <Tooltip/>


            </PieChart>


          </ResponsiveContainer>



        </div>




      </div>






      <div className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      ">



        <h2 className="text-xl font-bold mb-5">

          Crisis Risk Timeline

        </h2>




        <ResponsiveContainer width="100%" height={300}>


          <LineChart data={lineData}>


            <CartesianGrid strokeDasharray="3 3"/>


            <XAxis dataKey="time"/>


            <YAxis domain={[0,100]}/>


            <Tooltip/>



            <Line

              type="monotone"

              dataKey="risk"

              strokeWidth={3}

            />


          </LineChart>


        </ResponsiveContainer>




      </div>




    </div>

  )


}



export default Analytics