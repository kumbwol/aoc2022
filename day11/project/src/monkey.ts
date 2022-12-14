export interface IOperation
{
    operator: string,
    value: string
}

export class Monkey
{
    public items: number[];
    public testValue: number;
    public trueIndex: number;
    public falseIndex: number;
    private operation: IOperation;

    constructor(items: number[], operation: IOperation, testValue: number, trueIndex: number, falseIndex: number) {
        this.items = items;
        this.operation = operation;
        this.testValue = testValue;
        this.trueIndex = trueIndex;
        this.falseIndex = falseIndex;
    }

    public doOperation(old: number): number
    {
        if(this.operation.operator === "+")
        {
            if(this.operation.value === "old")
            {
                return old + old;
            }
            else
            {
                return old + parseInt(this.operation.value);
            }
        }
        else
        {
            if(this.operation.value === "old")
            {
                return old * old;
            }
            else
            {
                return old * parseInt(this.operation.value);
            }
        }
    }
}