import { GoogleGenAI } from "@google/genai"



const ai = new GoogleGenAI({
    
  apiKey: import.meta.env.VITE_GEMINI_API_KEY

})

console.log(
    import.meta.env.VITE_GEMINI_API_KEY
  )



export async function analyzeCrisis(crisisData){


  try {


    const prompt = `

تو یک سیستم هوشمند مدیریت بحران هستی.

داده‌های زیر وضعیت فعلی یک مرکز بحران است:

${JSON.stringify(crisisData, null, 2)}


تحلیل کن و فقط JSON معتبر برگردان.

هیچ متن اضافه قبل یا بعد از JSON ننویس.

ساختار خروجی:

{
  "risk": "",
  "summary": "",
  "actions": [],
  "resourcePlan": [],
  "prediction": ""
}

`



    const response = await ai.models.generateContent({


        model:"gemini-3.1-flash-lite",


      contents:prompt,


      config:{


        responseMimeType:"application/json",


        responseSchema:{


          type:"OBJECT",


          properties:{


            risk:{
              type:"STRING"
            },


            summary:{
              type:"STRING"
            },


            actions:{
              type:"ARRAY",
              items:{
                type:"STRING"
              }
            },


            resourcePlan:{
              type:"ARRAY",
              items:{
                type:"STRING"
              }
            },


            prediction:{
              type:"STRING"
            }


          },


          required:[

            "risk",

            "summary",

            "actions",

            "resourcePlan",

            "prediction"

          ]

        }


      }


    })



    return JSON.parse(response.text)



  }

  catch(error){

    console.error("Gemini Error:", error)
  
    alert(
      error.message ||
      error.toString()
    )
  
  
    return {
  
      risk:"UNKNOWN",
  
      summary:"خطا در تحلیل هوش مصنوعی",
  
      actions:[],
  
      resourcePlan:[],
  
      prediction:"داده‌ای دریافت نشد"
  
    }
  
  }


}