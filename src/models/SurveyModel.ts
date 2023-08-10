
interface QuestionModel {
  id: number;
  question: string;
  type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  options: string[]; // Array of options for the question
}

interface ResponseModel{
id: number;
questionId: number;
answer: string;
}


interface SurveyModel {
  id: number;
  name: string;
  description: string;
  questions: QuestionModel[];
  responses: ResponseModel[];
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

export default SurveyModel;