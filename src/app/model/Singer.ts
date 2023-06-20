export class Singer {
  public name?: string;
  private avatar?:string;
  private description?:string;
  private birthDay: any;

  constructor(name: string, avatar: string, description: string, birthDay: any) {
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.birthDay = birthDay;
  }
}
