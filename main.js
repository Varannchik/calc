
let calc={
    value1:'null',
    value2:'null',
    sum:()=>{ 
        calc.read();
        document.querySelector('#val1').value=this.value1+this.value2;
        document.querySelector('#val2').value=0;            
    },
    minus:()=>{
        calc.read(); 
        document.querySelector('#val1').value=this.value1-this.value2;
        document.querySelector('#val2').value=0;
    },
    div:()=>{
        calc.read();
        document.querySelector('#val1').value=this.value1/this.value2;
        document.querySelector('#val2').value=0;
    },
    mult:()=>{
        calc.read(); 
        document.querySelector('#val1').value=this.value1*this.value2;
        document.querySelector('#val2').value=0;
    },
    read:function(){
        value1=+document.querySelector('#val1').value;
        value2=+document.querySelector('#val2').value;
    }
};




