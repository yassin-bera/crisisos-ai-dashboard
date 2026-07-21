import { useCrisis } from "../context/CrisisContext"



function Volunteers(){


  const { data } = useCrisis()



  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-4xl font-bold">
          Volunteers
        </h1>


        <p className="mt-2 text-slate-400">
          مدیریت نیروهای داوطلب بحران
        </p>

      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        {
          data.volunteers.map(volunteer => (


            <div

              key={volunteer.id}

              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              "

            >


              <h2 className="text-2xl font-bold">

                {volunteer.name}

              </h2>



              <div className="mt-5 space-y-3 text-slate-300">


                <p>

                  تخصص:
                  {" "}
                  {volunteer.skill}

                </p>



                <p>

                  منطقه:
                  {" "}
                  {volunteer.area}

                </p>



                <p>

                  وضعیت:
                  {" "}
                  <span className="text-green-400">

                    {volunteer.status}

                  </span>

                </p>


              </div>


            </div>


          ))
        }


      </div>



    </div>

  )

}



export default Volunteers