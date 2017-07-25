import { Injectable,Inject} from '@angular/core';

@Injectable()
export class SortingService {

  constructor() { }

  sortInAlphabeticalOrder(unsortedList:any, name:string){
    let toSort = unsortedList.slice(0);
    toSort.sort(function(a,b)
    {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      return x<y ? -1 : x>y ? 1:0;
    });
    console.log('sorted cars',toSort);
    return toSort;
    }
  }
