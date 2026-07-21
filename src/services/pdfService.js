import jsPDF from "jspdf"


export function generateReportPDF(data) {


  try {


    const doc = new jsPDF()



    doc.setFont("helvetica")



    doc.setFontSize(18)


    doc.text(
      "CrisisOS Crisis Management Report",
      20,
      20
    )



    doc.setFontSize(12)



    let y = 40



    doc.text(
      `Risk Level: ${data.risk}`,
      20,
      y
    )



    y += 20



    doc.text(
      "Resources:",
      20,
      y
    )



    y += 10



    data.resources.forEach(resource => {


      doc.text(
        `${resource.name}: ${resource.amount}${resource.unit}`,
        20,
        y
      )


      y += 10


    })



    y += 10



    doc.text(
      "Requests:",
      20,
      y
    )



    y += 10



    data.requests.forEach(request => {


      doc.text(
        `${request.title} - ${request.status}`,
        20,
        y
      )


      y += 10


    })



    y += 10



    doc.text(
      "Volunteers:",
      20,
      y
    )



    y += 10



    data.volunteers.forEach(volunteer => {


      doc.text(
        `${volunteer.name} - ${volunteer.skill}`,
        20,
        y
      )


      y += 10


    })



    doc.save(
      "CrisisOS_Report.pdf"
    )


  }


  catch(error) {


    console.error(
      "PDF ERROR:",
      error
    )


    alert(
      "PDF generation failed"
    )


  }


}