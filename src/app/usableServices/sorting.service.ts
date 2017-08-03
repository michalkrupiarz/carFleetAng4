import { Injectable,Inject} from '@angular/core';

@Injectable()
export class SortingService {

  constructor() { }


  generalSortFunct(toSort:any[],action:string,fieldName:string,isCar:boolean){
    if (action === 'Alpha'){
      return this.sortInAlphabeticalOrder(toSort,fieldName,isCar);
    } else if (action === 'rAlpha'){
      return this.sortInReversedAlphabeticalOrder(toSort,fieldName,isCar);
    } else if (action === 'dateAsc'){
      return this.sortDatesFromAsc(toSort,fieldName,isCar);
    } else if (action === 'dateDesc'){
      return this.sortDatesFromDesc(toSort,fieldName,isCar);
    }
  }

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
    console.log('this is unsorted list',unsortedList);
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
    console.log('from asc',toSort)
    sorted.sort(function (a,b){
      var x = a[name];
      var y = b[name];
      return x-y;
    })
    return sorted;
  }
  sortDatesFromDesc(toSort:any,name:string,isCar:boolean){
    let sorted = toSort.slice(0);
    console.log('from desc',toSort)
    sorted.sort(function (a,b){
      var x = a[name];
      var y = b[name];
      return y-x;
    })
    return sorted;
  }
/**
 * [filterOutStatus description]
 * @param  {any}     toSort [array to filter]
 * @param  {string}  name   [field that will be used to filter]
 * @param  {boolean} isCar  [wheter it it sub array of in array]
 * @return {[type]}         [description]
 */
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
  /**
   * [generalFilter description]
   * @param  {any}     toSort [array to filter]
   * @param  {string}  name   [field name that will be used to filter]
   * @param  {string}  value  [value that will be left for name]
   * @param  {boolean} isCar  [wheter it is sub array or not]
   * @return {[type]}         [filtered input array]
   */
  generalFilter(toSort:any,name:string,value:string,depth:number){
    let sorted= [];
    if(depth==1){
       sorted = toSort.filter(function (el){
        return el[name.split('.')[0]][name.split('.')[1]].toLowerCase()===value;
      });
    } else if (depth ==0){
       sorted = toSort.filter(function (el){
        return el[name].toLowerCase()===value;
      })
    } else if (depth ==2){
        for (let item in toSort){

          let thing = this.maxId(toSort[item][name.split('.')[0]]);
          if (thing === undefined && value === 'done'){
            sorted.push (toSort[item]);
          }
          if(thing !== undefined){
            if (thing[name.split('.')[1]][name.split('.')[2]] === value){
              sorted.push(toSort[item]);
            }
          };
        }
      }
      return sorted;
  }
  maxId(tab:any){
    const maxValueOfId = Math.max(...tab.map(o => o['id']),1);
    for (let item in tab){
      if (tab[item]['id'] === maxValueOfId){
        return tab[item];
      }
    }

  }


}
