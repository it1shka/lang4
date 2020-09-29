//CODE AREA
const codeArea = document.getElementById('codeArea');

codeArea.onkeydown = function(e){
    if(e.keyCode==9 || e.which==9){
        e.preventDefault();
        let s = this.selectionStart;
        this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
        this.selectionEnd = s+1; 
    }
}
let runCounter = 0;
function runCode(){
    runCounter++;
    console.log(`ЗАПУСК #${runCounter}`);
    const source = codeArea.value;
    const result = run(source);
    console.log('');

    if(result){
        console.warn(result);
    }
}

//CONSOLE
const myConsole = document.getElementById('console');

function readlineToConsole(text){
    myConsole.value += text += '\r\n';
    myConsole.scrollTop = myConsole.scrollHeight;
}

console.log = readlineToConsole;

//LOAD FILE
const invisibleInput = document.getElementById('file-input');

invisibleInput.onchange = e => {
    let file = invisibleInput.files[0];
    console.warn(file);
};

function loadFile(){
    invisibleInput.click();
}