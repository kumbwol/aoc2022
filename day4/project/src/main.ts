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
        for(let i=0; i<input.length; i+=2)
        {
            const actual = input[i];
            const next = input[i+1];
            if((actual[1] < next[0]) || (actual[0] > next[1]))
            {
                score++;
            }
        }

        console.log((input.length / 2) - score);
    }


    private firstHalf()
    {
        let score = 0;
        const input = input2;
        for(let i=0; i<input.length; i+=2)
        {
            const actual = input[i];
            const next = input[i+1];
            if((actual[0] >= next[0] && actual[1] <= next[1]) || (next[0] >= actual[0] && next[1] <= actual[1]))
            {
                score++;
            }
        }

        console.log(score);
    }
}

new Main();
