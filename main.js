
let calc={
    let value1:'null',
    let value2:'null',
    sum:function(){
        this.read();
        document.querySelector('#val1').value=value1 + value2;
        document.querySelector('#val2').value=0;
                
    },
    minus:function(){
        this.read();       
        document.querySelector('#val1').value=value1 - value2;
        document.querySelector('#val2').value=0;
    },
    div:function(){ 
        this.read();      
        document.querySelector('#val1').value=value1 / value2;
        document.querySelector('#val2').value=0;
    },
    mult:function(){
        this.read();         
        document.querySelector('#val1').value=value1 * value2;
        document.querySelector('#val2').value=0;
    },
    read:function(){
        value1=+document.querySelector('#val1').value;
        value2=+document.querySelector('#val2').value;
    } 
};










