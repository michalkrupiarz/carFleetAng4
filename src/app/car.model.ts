export class Car {
  id: number;
  carName:string;
  carRegistration:string;


  constructor(obj?:any){
    this.id=obj.id;
    this.carName=obj.carName;
    this.carRegistration = obj.carRegistration;
  }
}
