/**
 * Created by sbothe on 08.06.17.
 */
class User {

  public username : string;
  public age : number;


  constructor(_username:string, _age:number) {
    this.username = _username;
    this.age = _age;
  }
}
export { User };
