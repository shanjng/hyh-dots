//user model for twitter users
export class TwitterUser {
  public id: number;
  public id_str: string;
  public name: string;
  public screen_name: string;
  public location: string;
  public description: string;
  public profile_image_url: string;
  public followers_count: number;
  public friends_count: number;
  public status: JSON;
}
