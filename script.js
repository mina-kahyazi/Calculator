
class calc{

    constructor(preOp,curOp){

        this.preOp=preOp;
        this.curOp=curOp;
       
        this.clear();
    }

    clear(){
        console.log("clear"+this.curOp_2);
        this.curOp_2='';
        this.preOp_2='';
        this.operation=undefined;

    }
    delete(){
        console.log("del"+this.curOp_2);
        this.curOp_2=this.curOp_2.slice(0,-1);
    }
    appendNumber(number){
        if(number==="." && this.curOp_2.includes('.')) return;
        this.curOp_2=this.curOp_2+number;

    }

    chooseOp(operation){
        if(this.curOp_2==='')return
        if(this.preOp_2!==''){
            this.compute();
        }
        this.operation=operation;
        this.preOp_2=this.curOp_2;
        this.curOp_2='';

    }

    compute(){
        let result;
        const prev=parseFloat(this.preOp_2);
        const curr=parseFloat(this.curOp_2);
        switch(this.operation){
            case '+':
                result=prev+curr;
                break;
            case '-':
                result=prev-curr;
                break;
            case '*':
                result=prev*curr;
                break;
            case '/':
                result=prev/curr;
                break;
            default:
                return

        }
        this.curOp_2=result;
        this.operation=undefined;
        this.preOp_2='';

    }

    getDisplayNumber(number){

        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }

    }
    
    updateDisplay(){
        console.log("upd-dis"+this.curOp_2);
        this.curOp.innerText =
        this.getDisplayNumber(this.curOp_2)
      if (this.operation != null) {
        this.preOp.innerText =
          `${this.getDisplayNumber(this.preOp_2)} ${this.operation}`
      } else {
        this.preOp.innerText = ''
      }
    }
    

    }
    



const numberButtons= document.querySelectorAll('[data-n]');
const operationButtons=document.querySelectorAll('[data-op]');
const equalsButton=document.querySelector('[data-e]');
const deleteButton=document.querySelector('[data-del]');
const allClearButton=document.getElementById('data-ac');
let preOp=document.querySelector('[data-pre-op]');
let curOp=document.querySelector('[data-cur-op]');

const cal=new calc(preOp,curOp);

numberButtons.forEach(button=>{

    button.addEventListener('click',()=>{
        console.log("buton"+button.innerText);
        cal.appendNumber(button.innerText);
        cal.updateDisplay();

    })
});

operationButtons.forEach(button=>{

    button.addEventListener('click',()=>{

        cal.chooseOp(button.innerText);
        cal.updateDisplay();

    })
});

equalsButton.addEventListener('click',button=>{
    cal.compute();
    cal.updateDisplay();

});

allClearButton.addEventListener('click', button => {
    cal.clear()
    cal.updateDisplay()
  });

deleteButton.addEventListener('click',button=>{

    cal.delete();
    cal.updateDisplay();
});



