import { createContext, useContext, useState } from "react"


const CrisisContext = createContext()



const initialData = {


  resources: [

    {
      id:1,
      name:"Water",
      amount:78,
      unit:"%"
    },

    {
      id:2,
      name:"Medicine",
      amount:64,
      unit:"%"
    },

    {
      id:3,
      name:"Food",
      amount:85,
      unit:"%"
    },

    {
      id:4,
      name:"Fuel",
      amount:42,
      unit:"%"
    },

    {
      id:5,
      name:"Generator",
      amount:55,
      unit:"%"
    }

  ],



  requests:[

    {
      id:1,
      title:"Emergency water request",
      priority:"HIGH",
      status:"Reviewing",
      time:"10:30"
    },

    {
      id:2,
      title:"Emergency medicine request",
      priority:"CRITICAL",
      status:"Sent",
      time:"11:15"
    }

  ],



  volunteers:[

    {
      id:1,
      name:"Ali Rezaei",
      skill:"Doctor",
      area:"North Zone",
      status:"Active"
    },


    {
      id:2,
      name:"Sara Mohammadi",
      skill:"Rescue Worker",
      area:"Central Zone",
      status:"Ready"
    }

  ],



  risk:"HIGH"


}




export function CrisisProvider({children}){


  const [data,setData] = useState(initialData)




  function simulateHour(){


    setData(prev=>({


      ...prev,


      resources: prev.resources.map(item=>({


        ...item,


        amount: Math.max(

          0,

          Math.floor(
            item.amount - Math.random()*15
          )

        )


      })),



      risk:

        Math.random()>0.5

        ?

        "HIGH"

        :

        "MEDIUM"



    }))


  }




  function updateRequestStatus(id){


    setData(prev=>({


      ...prev,


      requests: prev.requests.map(request=>{


        if(request.id === id){


          return {

            ...request,

            status:

              request.status === "Reviewing"

              ?

              "Completed"

              :

              "Reviewing"

          }


        }


        return request


      })


    }))


  }




  return (

    <CrisisContext.Provider

      value={{

        data,

        simulateHour,

        updateRequestStatus

      }}

    >

      {children}

    </CrisisContext.Provider>

  )


}




export function useCrisis(){

  return useContext(CrisisContext)

}