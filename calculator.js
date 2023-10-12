export function calculator (){
    return {
        input1: "",
        input2: "",
        result: "",
        firstInput: true,
        operation: "",
        getInput1(){
            return this.input1;
        },
        setInput1(input1){
            this.input1 = input1;
        },
        setInput2(input2){
            this.input2 = input2;
        },
        getInput2(){
            return this.input2;
        },
        getFirstInput(){
            return this.firstInput;
        },
        setFirstInputFalse(){
            this.firstInput = false;
        },
        setFirstInputTrue(){
            this.firstInput = true;
        },
        buildInput1(number){
            this.input1 += number;
        },
        buildInput2(number){
            this.input2 += number;
        },
        getResult(){
            return this.result;
        },
        setResult(result){
            this.result = result;
        },
        setOperation(operation){
            this.operation = operation;
        },
        getOperation(){
            return this.operation;
        }
    }
}