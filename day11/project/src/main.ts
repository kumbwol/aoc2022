import {input1, input2} from "./input";

export class Main
{
    constructor()
    {
        //this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        const input = input2;

        const inspects: number[] = [];
        for(let i=0; i<input.length; i++)
        {
            inspects.push(0);
        }

        let multipliedByAll = 1;
        for(let i=0; i<input.length; i++)
        {
            multipliedByAll *= input[i].testValue;
        }

        for(let c=0; c<10000; c++)
        {
            for(let i=0; i<input.length; i++)
            {
                let monkey = input[i];
                for(let j=0; j<monkey.items.length; j++)
                {
                    inspects[i]++;
                    const worryLevel = Math.floor(monkey.doOperation(monkey.items[j]) % multipliedByAll);
                    if(worryLevel % monkey.testValue === 0)
                    {
                        input[monkey.trueIndex].items.push(worryLevel);
                    }
                    else
                    {
                        input[monkey.falseIndex].items.push(worryLevel);
                    }
                    monkey.items.splice(0, 1);
                    j--;
                }
            }
        }

        console.log(inspects);

        /*for(let i=0; i<input1.length; i++)
        {
            let monkey = input[i];
            console.log(monkey.items);
        }*/
    }

    private firstHalf()
    {
        const input = input2;

        const inspects: number[] = [];
        for(let i=0; i<input.length; i++)
        {
            inspects.push(0);
        }

        for(let c=0; c<20; c++)
        {
            for(let i=0; i<input.length; i++)
            {
                let monkey = input[i];
                for(let j=0; j<monkey.items.length; j++)
                {
                    inspects[i]++;
                    const worryLevel = Math.floor(monkey.doOperation(monkey.items[j]) / 3);
                    if(worryLevel % monkey.testValue === 0)
                    {
                        input[monkey.trueIndex].items.push(worryLevel);
                    }
                    else
                    {
                        input[monkey.falseIndex].items.push(worryLevel);
                    }
                    monkey.items.splice(0, 1);
                    j--;
                }
            }
        }

        console.log(inspects);

        /*for(let i=0; i<input1.length; i++)
        {
            let monkey = input[i];
            console.log(monkey.items);
        }*/
    }
}

new Main();
