const { Observable, async } = require('rxjs');
const { filter } =  require ('rxjs/operators');
//Promesas
const doSomething = () => {
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve('valor 3');
    }, 3000)
  })
}


( async ()=> {
  const rta = await  doSomething();
  console.log(rta);
})();





//Observable

const doSomething$ = () => {
  return new Observable(observer => {
    observer.next('valor 1 $')
    observer.next('valor 2 $')
    observer.next('valor 3 $')
    observer.next(null)
    setTimeout(()=>{
      observer.next('valor 5 $');
    }, 4000)
    observer.next(null)
    setTimeout(()=>{
      observer.next('valor 5 $');
    }, 7000)
  });
}




(()=>{
  const obs$ = doSomething$();
  obs$.pipe(
    filter(value => value === null)
  )
  obs$.subscribe(rta =>{
    console.log(rta);
  })
})();
