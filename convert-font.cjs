const fs = require("fs")


const font = fs.readFileSync(
  "./src/assets/fonts/Vazirmatn-Regular.ttf"
)


const base64 = font.toString("base64")


const output = `export default "${base64}"`


fs.writeFileSync(
  "./src/assets/fonts/VazirmatnBase64.js",
  output
)


console.log(
  "Font converted successfully"
)