
console.log(Finder2());
function Finder2(num){
    let arr1 =[8,10,25,36];
    for (let i = 0; i < arr1.length; i++) {
        if(num===arr1[i]){
          return "eded var"
        }
    }
        return "eded yoxdur"    
}
// ----------------------------------------------------------------------


let arr =[1,5,8,10,16,21,46];

console.log(Finder(10,arr));

function Finder(params,array){
    
    for (let i = 0; i < array.length; i++) {
          if(params===array[i]){
              return "eded var";
          }
    }
    return "eded yoxdur"
}


function Even(cut){
    for (let i = 0; i < cut.length; i++) {
         if(cut[i]%2===0) {
             console.log(cut[i]);
         }
    }
}
Even(arr);


// ------------------------------------------------------------------






function Calcultor(a,o,b){
       switch (o) {
           case '+':
               return a+b;
               break;
            case '-':
                return a-b;
                break;
            case '*':
                return a*b;
                break;
            case '/':
                return a/b;
                break;
               
       
            default:
               return('enter number');
               break;
       }
}


console.log(Calcultor(5,'*',6));




