module.exports = (survey) =>{
 return `<html>
 <body>
    <div style="text-align: center">
       <h3> We would love to hear your opinion </h3>
       <h4> Please answer the following questions </h4>
       <p> ${survey.body} </p>
       <div> 
       <a href="http://localhost:3000"> Yes</a>
       </div>
       <div> 
       <a href="http://localhost:3000"> No</a>
       </div>
    </div>
 </body>
 </html>`
}