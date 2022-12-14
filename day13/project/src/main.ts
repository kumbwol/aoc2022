import {input1, input2, input3} from "./input";

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
        let ordered: any[] = [];
        input.push([[2]]);
        input.push([[6]]);

        for(let i=0; i<input.length; i++)
        {
            let minIndex = i;
            for(let j=i+1; j<input.length; j++)
            {
                if(!this.isOrdered(input[minIndex], input[j], 0))
                {
                    minIndex = j;
                }
            }

            ordered.push(input[minIndex]);
            input.splice(minIndex, 1);
            i--;
        }

        for(let i=0; i<ordered.length; i++)
        {
            if(ordered[i].length === 1)
            {
                if(ordered[i][0].length === 1)
                {
                    if(ordered[i][0][0].length === 1)
                    {
                        if(ordered[i][0].toString() === "2" || ordered[i][0].toString() === "6")
                        {
                            console.log(i+1);
                        }
                    }
                }
            }
        }
    }

    private firstHalf()
    {
        const input = input2;

        const orderedIndexes: number[] = [];
        for(let i=0; i<input.length; i+=2)
        {
            let first = input[i];
            let second = input[i+1];
            let index = (i/2) + 1;

            if(this.isOrdered(first, second, index))
            {
                orderedIndexes.push(index);
            }
        }

        let sum = 0;
        for(let i=0; i<orderedIndexes.length; i++)
        {
            sum += orderedIndexes[i];
        }
        console.log(sum);
    }

    private isOrdered(first: any[], second: any[], index: number): boolean
    {
        for(let j=0; j<first.length; j++)
        {
            if(typeof first[j] === "number" && typeof second[j] === "number")
            {
                if(first[j] > second[j])
                {
                    return false;
                }
                else if(first[j] < second[j])
                {
                    return true;
                }
            }
            else if(typeof first[j] === "object" && typeof second[j] === "object")
            {
                let x = this.isOrdered(first[j], second[j], index);
                if(x !== undefined)
                {
                    return x;
                }
            }
            else if((typeof first[j] === "object" && typeof second[j] === "number") ||
                    (typeof first[j] === "number" && typeof second[j] === "object"))
            {
                if(typeof first[j] === "number")
                {
                    let value = first[j];
                    first[j] = [value];
                    j--;
                }
                else
                {
                    let value = second[j];
                    second[j] = [value];
                    j--;
                }
            }
            else
            {
                return false;
            }
        }

        if(first.length < second.length)
        {
            return true;
        }

        return undefined;
    }
}

new Main();
