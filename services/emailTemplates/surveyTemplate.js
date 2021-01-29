const keys = require('../../config/keys');
module.exports = (survey) =>{
 return `<html>
 <body>
    <div style="text-align: center">
       <h3> We would love to hear your opinion </h3>
       <h4> Please answer the following questions </h4>
       <p> ${survey.body} </p>
       <div> 
       <a href="${keys.redirectDomain}/api/survey/feedback"> Yes</a>
       </div>
       <div> 
       <a href="${keys.redirectDomain}/api/survey/feedback"> No </a>
       </div>
    </div>
 </body>
 </html>`
}