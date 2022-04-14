import { environment } from 'src/environments/environment';

export class API {
  public static DB_URL = environment.databaseURL;

  public static GET_RESUME_DETAILS = `${API.DB_URL}/users`;
  public static UPDATE_RESUME_DETAILS = `${API.DB_URL}/users.json`;

  public static UPDATE_USER_PASSWORD = `${API.DB_URL}/users.json`;
  public static DELETE_USER = `${API.DB_URL}/users.json`;
}
