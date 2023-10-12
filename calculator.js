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
        getInput2(){
            return this.input2;
        },
        getFirstInput(){
            return this.firstInput;
        },
        setFirstInputFalse(){
            this.firstInput = false;
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
        setOperation(operation){
            this.operation = operation;
        },
        getOperation(){
            return this.operation;
        }
    }
}