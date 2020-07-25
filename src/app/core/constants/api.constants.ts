import { environment } from "src/environments/environment";

export class API {
  public static SERVER_URL = environment.serverUrl;

  public static GET_CV_DATA = `${API.SERVER_URL}/getCvData`;
}
