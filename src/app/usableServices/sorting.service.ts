import { Injectable,Inject} from '@angular/core';

@Injectable()
export class SortingService {

  constructor() { }

  sortInAlphabeticalOrder(unsortedList:any, name:string, isCar:boolean){
    let toSort = unsortedList.slice(0);

    if(isCar){
      toSort.sort(function(a,b)
      {

            let x = a[name].toLowerCase();
            let y = b[name].toLowerCase();
            return x<y ? -1 : x>y ? 1:0;

      });
      return toSort;
    } else {
      toSort.sort(function(a,b)
      {

            let x = a[name.split('.')[0]][name.split('.')[1]].toLowerCase();
            let y = b[name.split('.')[0]][name.split('.')[1]].toLowerCase();
            return x<y ? -1 : x>y ? 1:0;

      });
      return toSort;
    }
  }



  sortInReversedAlphabeticalOrder(unsortedList: any, name:string, isCar:boolean){
    let toSort = unsortedList.slice(0);

    if(isCar){
      toSort.sort(function(a,b)
      {

            let x = a[name].toLowerCase();
            let y = b[name].toLowerCase();
            return x<y ? 1 :x>y ? -1:0;

      });
      return toSort;
    } else {
      toSort.sort(function(a,b)
      {
            let x = a[name.split('.')[0]][name.split('.')[1]].toLowerCase();
            let y = b[name.split('.')[0]][name.split('.')[1]].toLowerCase();
            return x<y ? 1 :x>y ? -1:0;
      });
      return toSort;
    }
  }

  sortDatesFromAsc(toSort:any,name:string,isCar:boolean){
    let sorted = toSort.slice(0);
    sorted.sort(function (a,b){
      var x = a[name];
      var y = b[name];
      return x-y;
    })
    return sorted;
  }
  sortDatesFromDesc(toSort:any,name:string,isCar:boolean){
    let sorted = toSort.slice(0);
    sorted.sort(function (a,b){
      var x = a[name];
      var y = b[name];
      return y-x;
    })
    return sorted;
  }

filterOutStatus(toSort:any,name:string,isCar:boolean){
  let sorted;
  if(isCar){
     sorted = toSort.filter(function (el){
      return el[name.split('.')[0]][name.split('.')[1]].toLowerCase()==='in status'
    });
  } else {
     sorted = toSort.filter(function (el){
      return el[name].toLowerCase()==='in status'
    })
  }
  return sorted;
  }
}
