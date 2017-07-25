import { Injectable,Inject } from '@angular/core';
import { Car } from '../car.model';
@Injectable()
export class SortCarService {

  constructor() { }
  sortNameInAlphabeticalOrder(unsorted:Car[]){
    let toSort = unsorted.slice(0);
    toSort.sort(function(a,b)
    {
      let x = a.carName.toLowerCase();
      let y = b.carName.toLowerCase();
      return x<y ? -1 : x>y ? 1:0;
    });
    return toSort;
  }
  sortNameInReversedAlphabeticalOrder(unsorted:Car[]){
    let toSort = unsorted.slice(0);
    toSort.sort(function(a,b)
    {
      let x = a.carName.toLowerCase();
      let y = b.carName.toLowerCase();
      return x<y ? 1 : x>y ? -1:0;
    });
    return toSort;
  }
  sortRegInAlphabeticalOrder(unsorted:Car[]){
    let toSort = unsorted.slice(0);
    toSort.sort(function(a,b)
    {
      let x = a.carRegistration.toLowerCase();
      let y = b.carRegistration.toLowerCase();
      return x<y ? -1 : x>y ? 1:0;
    });
    return toSort;
  }
  sortRegInReversedAlphabeticalOrder(unsorted:Car[]){
    let toSort = unsorted.slice(0);
    toSort.sort(function(a,b)
    {
      let x = a.carRegistration.toLowerCase();
      let y = b.carRegistration.toLowerCase();
      return x<y ? 1 : x>y ? -1:0;
    });
    return toSort;
  }
}
