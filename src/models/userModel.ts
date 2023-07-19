interface ResponseModel {
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
    answer7: string;
  }

  interface UbicationModel{
    lat: string;
    long: string;
  }

  export interface SaveResponseModel {
    responses: ResponseModel;
    ubication: UbicationModel;
  }
  
  export default ResponseModel;