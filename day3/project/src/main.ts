import { input1 } from "./input";
import {input2} from "./input2";

export class Main
{
    constructor()
    {
        this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        let score = 0;
        const input = input2;
        for(let i=0; i<input.length; i+=3)
        {
            let string1 = input[i];
            let string2 = input[i+1];
            let string3 = input[i+2];

            const ordered1 = this.convertToInteger(string1).sort((n1, n2) => n1-n2);
            const ordered2 = this.convertToInteger(string2).sort((n1, n2) => n1-n2);
            const ordered3 = this.convertToInteger(string3).sort((n1, n2) => n1-n2);

            let j=0;
            let k=0;

            for(let i=0; i<ordered1.length;)
            {
                if(ordered1[i] === ordered2[j] && ordered1[i] === ordered3[k])
                {
                    score += ordered1[i];
                    break;
                }
                else
                {
                    const minIndex = this.getMinimumIndex([ordered1[i], ordered2[j], ordered3[k]]);
                    if(minIndex === 0)
                    {
                        i++;
                    }
                    else if(minIndex === 1)
                    {
                        j++;
                    }
                    else
                    {
                        k++;
                    }
                }
            }
        }

        console.log(score);
    }

    private getMinimumIndex(values: number[]): number
    {
        let minIndex = 0;
        for(let i=1; i<values.length; i++)
        {
            if(values[i] < values[minIndex])
            {
                minIndex = i;
            }
        }
        return minIndex;
    }


    private firstHalf()
    {
        let score = 0;
        const input = input2;
        for(let i=0; i<input.length; i++)
        {
            let firstHalfString = "";
            let secondHalfString = "";
            for(let j=0; j<input[i].length; j++)
            {
                if(j < (input[i].length / 2))
                {
                    firstHalfString += input[i][j];
                }
                else
                {
                    secondHalfString += input[i][j];
                }
            }

            const firstHalfValuesInOrder = this.convertToInteger(firstHalfString).sort((n1, n2) => n1-n2);
            const secondHalfValuesInOrder = this.convertToInteger(secondHalfString).sort((n1, n2) => n1-n2);

            let shouldQuit = false;
            let j = 0;
            for(let i=0; i<firstHalfValuesInOrder.length;)
            {
                if(firstHalfValuesInOrder[i] === secondHalfValuesInOrder[j])
                {
                    score += firstHalfValuesInOrder[i];
                    shouldQuit = true;
                }
                else if(firstHalfValuesInOrder[i] > secondHalfValuesInOrder[j])
                {
                    j++;
                }
                else if(firstHalfValuesInOrder[i] < secondHalfValuesInOrder[j])
                {
                    i++;
                }

                if(shouldQuit)
                {
                    break;
                }
            }
        }

        console.log(score);
    }

    private convertToInteger(s: string): number[]
    {
        const o: number[] = [];
        for(let i=0; i<s.length; i++)
        {
            const value = s.charCodeAt(i);
            if(value > 96)
            {
                o.push(value - 96);
            }
            else
            {
                o.push(value - 64 + 26);
            }
        }
        return o;
    }
}

new Main();
