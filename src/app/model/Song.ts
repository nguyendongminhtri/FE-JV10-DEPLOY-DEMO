import {Category} from "./Category";
import {Singer} from "./Singer";

export class Song {
  public id?:number;
  public name?:string;
  public avatar?:string;
  public lyrics?:string;
  public mp3Url?:string;
  public category?:Category;
  public singerList: Singer[] = [];

  constructor(name: string, avatar: string, lyrics: string, mp3Url: string, category: Category, singerList: Singer[]) {
    this.name = name;
    this.avatar = avatar;
    this.lyrics = lyrics;
    this.mp3Url = mp3Url;
    this.category = category;
    this.singerList = singerList;
  }
}
