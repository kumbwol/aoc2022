import {input1, input2, input3, input4, input5} from "./input";

export class Main
{
    constructor()
    {//
        //this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        const input = input5;
        for(let i=0; i<input.length-14; i++)
        {
            const uniques: string[] = [];
            const lastIndex = i+14;
            let foundSolution = true;
            for(let j=i; j<lastIndex; j++)
            {
                let alreadyIn = false;
                for(let k=0; k<uniques.length; k++)
                {
                    if(input[j] === uniques[k])
                    {
                        alreadyIn = true;
                        break;
                    }
                }

                if(!alreadyIn)
                {
                    uniques.push(input[j]);
                }
                else
                {
                    foundSolution = false;
                    break;
                }
            }

            if(foundSolution)
            {
                console.log(i+14);
                break;
            }
        }
    }

    private firstHalf()
    {
        const input = input5;
        for(let i=0; i<input.length-4; i++)
        {
            const uniques: string[] = [];
            const lastIndex = i+4;
            let foundSolution = true;
            for(let j=i; j<lastIndex; j++)
            {
                let alreadyIn = false;
                for(let k=0; k<uniques.length; k++)
                {
                    if(input[j] === uniques[k])
                    {
                        alreadyIn = true;
                        break;
                    }
                }

                if(!alreadyIn)
                {
                    uniques.push(input[j]);
                }
                else
                {
                    foundSolution = false;
                    break;
                }
            }

            if(foundSolution)
            {
                console.log(i+4);
                break;
            }
        }
    }
}

new Main();
