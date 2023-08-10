interface ResponseModel{
    id: number;
    questionId: number;
    answer: string;
    }

interface SurveyResponseModel {
    id: number;
    surveyId: number; // ID of the survey being responded to
    responses: ResponseModel[]; // An array of ResponseModel
    location: {
      latitude: number;
      longitude: number;
    };
  }

  export default SurveyResponseModel;