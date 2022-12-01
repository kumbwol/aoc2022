import { input } from "./input";

export class Main
{
    constructor()
    {
        this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        let sum = 0;
        let max: number[] = [];
        max.push(-1);
        max.push(-1);
        max.push(-1);

        for(let i=0; i<input.length; i++)
        {
            if(input[i] === "" || i == input.length - 1)
            {
                for(let j=0; j<max.length; j++)
                {
                    if(max[j] < sum)
                    {
                        max[j] = sum;
                        break;
                    }
                }
                max.sort((n1, n2) => n1-n2);
                sum = 0;
            }
            else
            {
                sum += parseInt(input[i]);
            }
        }
        console.log(max[0] + max[1] + max[2]);
    }

    private firstHalf()
    {
        let sum = 0;
        let max = -1;
        for(let i=0; i<input.length; i++)
        {
            if(input[i] === "" || i == input.length - 1)
            {
                if(sum > max)
                {
                    max = sum;
                }
                sum = 0;
            }
            else
            {
                sum += parseInt(input[i]);
            }
        }
        console.log(max);
    }
}

new Main();
