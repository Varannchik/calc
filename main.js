
let calc={
    //value1:'null',
    //value2:'null',
    sum:function(){
        
        document.querySelector('#val1').value=this.value1 + this.value2;
        document.querySelector('#val2').value=0;
        console.log(this.value1 + this.value2);
                
    },
    minus:function(){
               
        document.querySelector('#val1').value=this.value1 - this.value2;
        document.querySelector('#val2').value=0;
    },
    div:function(){ 
              
        document.querySelector('#val1').value=this.value1 / this.value2;
        document.querySelector('#val2').value=0;
    },
    mult:function(){
               
        document.querySelector('#val1').value=this.value1 * this.value2;
        document.querySelector('#val2').value=0;
    },
    read:function(){
        this.value1=+document.querySelector('#val1').value;
        this.value2=+document.querySelector('#val2').value;
    } 
};
calc.read();










