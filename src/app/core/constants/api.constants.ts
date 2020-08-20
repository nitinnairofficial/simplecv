import { environment } from 'src/environments/environment';

export class API {
  public static SERVER_URL = environment.serverUrl;

  public static GENERATE_TOKEN = `${API.SERVER_URL}/generate-token`;

  public static GET_RESUME_DETAILS = `${API.SERVER_URL}`;
  public static UPDATE_RESUME_DETAILS = `${API.SERVER_URL}`;
  public static GET_RESUME_STATS = `${API.SERVER_URL}`;
  public static UPDATE_RESUME_STATS = `${API.SERVER_URL}`;
  public static DOWNLOAD_RESUME = `${API.SERVER_URL}`;

  public static UPDATE_USER_PASSWORD = `${API.SERVER_URL}`;
  public static DELETE_USER = `${API.SERVER_URL}`;
}
