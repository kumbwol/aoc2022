import {input1, input2, inputNum, sumThis} from "./input";

export class Main
{
    constructor()
    {
        //this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        const minVal = 1609574;
        let min = 99999999999;
        for(let i=0; i<inputNum.length; i++)
        {
            if(inputNum[i] > minVal)
            {
                if(min > inputNum[i])
                {
                    min = inputNum[i];
                }
            }
        }

        console.log(min);
    }

    private firstHalf()
    {
        const input = input2;

        let outcome = "";

        for(let i=0; i<input.length; i++)
        {
            if(input[i][0] === '$')
            {
                if(input[i][1] === "cd")
                {
                    outcome += ("cd " + input[i][2] + "\n");
                }
            }
            else if(input[i][0] === "dir")
            {
                outcome += ("mkdir " + input[i][1] + "\n");
            }
            else
            {
                outcome += ("fsutil file createNew " + input[i][1] + " " + input[i][0] + "\n");
            }
        }

        console.log(outcome);


        let score = 0;
        for(let i=0; i<inputNum.length; i++)
        {
            if(inputNum[i] < 100000)
            {
                score+=inputNum[i];
            }
        }
        console.log(score);
    }
}

new Main();
