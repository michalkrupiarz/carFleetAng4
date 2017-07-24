export class Status{
  id: number;
  progress: String;

  constructor (obj?:any){
    this.id = obj.id;
    this.progress = obj.progress;
  }
}
