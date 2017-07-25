import { Injectable,Inject } from '@angular/core';
import { Car } from '../car.model';
@Injectable()
export class SortCarService {

  constructor() { }
  sortInAlphabeticalOrder(unsorted:Car[]){
    let toSort = unsorted.slice(0);
    toSort.sort(function(a,b)
    {
      let x = a.carName.toLowerCase();
      let y = b.carName.toLowerCase();
      return x<y ? -1 : x>y ? 1:0;
    });
    console.log('from function', toSort);
    return toSort;
  }
}
