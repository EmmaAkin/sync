import axios from 'axios'
import _ from 'lodash'

export default {
  makeCall(requestedData, callBack){



    var config = {
          // auth: {
          //   username: 'csca',
          //   password: 'n8@i3M03lik3En3C5c@'
          // },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // "JSONRequest":`[[\"Ref\",\"Name\",\"IDNr\",\"DateOfBirth\",\"Gender\",\"MaritalStatus\",\"PostalCode\",\"Education\",\"SelfEmployed\",\"OccupationGrouper\",\"IncomeInput\",\"AddIncome\",\"EmploymentStatus\",\"OccGrpFW\",\"BMI\",\"SmokingStatus\",\"NrKids\",\"NrAdults\"],[${requestedPersonalData["Ref"]},\"${requestedPersonalData["Name"]}\",${requestedPersonalData["IDNr"]},\"${requestedPersonalData.DateOfBirth}\",\"${requestedPersonalData.Gender}\",\"${requestedPersonalData.MaritalStatus}\",${requestedPersonalData.PostalCode},\"${requestedPersonalData.Education}\",\"${requestedPersonalData.SelfEmployed}\",\"${requestedPersonalData.OccupationGrouper}\",${requestedPersonalData.IncomeInput},${requestedPersonalData.AddIncome},\"${requestedPersonalData.EmploymentStatus}\",\"${requestedPersonalData.OccGrpFW}\",${requestedPersonalData.BMI},\"${requestedPersonalData.SmokingStatus}\",${requestedPersonalData.NrKids},${requestedPersonalData.NrAdults}],[0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null]]`,
            // "Authorization":"Basic Y3NjYTpuOEBpM00wM2xpazNFbjNDNWNA"
          },
          body: requestedData

    };

    console.log("This is the requested config file", requestedData);

    axios.post('https://344035ec.ngrok.io/v1/advert/post', config)
    .then(function (response) {
      console.log(response);
      callBack(response.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
}
