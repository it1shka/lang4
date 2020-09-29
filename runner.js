const codeArea = document.getElementById('codeArea');

codeArea.onkeydown = function(e){
    if(e.keyCode==9 || e.which==9){
        e.preventDefault();
        let s = this.selectionStart;
        this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
        this.selectionEnd = s+1; 
    }
}

function runCode(){
    const source = codeArea.value;
    run(source);
}

const myConsole = document.getElementById('console');

function readlineToConsole(text){
    myConsole.value += text += '\r\n';
}

console.log = readlineToConsole;