import {input1, setup1} from "./input";
import {input2, setup2} from "./input2";

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
        const setup = setup2;

        for(let i=0; i<input.length; i++)
        {
            const amount = input[i][0];
            const from = input[i][1] - 1;
            const to = input[i][2] - 1;

            for(let j=setup[from].length - amount; j<setup[from].length; j++)
            {
                setup[to].push(setup[from][j]);
            }

            for(let j=0; j<amount; j++)
            {
                setup[from].pop();
            }
        }

        let solution = "";
        for(let i=0; i<setup.length; i++)
        {
            solution += setup[i][setup[i].length - 1];
        }
        console.log(solution);
    }


    private firstHalf()
    {
        const input = input2;
        const setup = setup2;

        for(let i=0; i<input.length; i++)
        {
            const amount = input[i][0];
            const from = input[i][1] - 1;
            const to = input[i][2] - 1;

            for(let j=0; j<amount; j++)
            {
                const topElem = setup[from].pop();
                setup[to].push(topElem);
            }
        }

        let solution = "";
        for(let i=0; i<setup.length; i++)
        {
            solution += setup[i][setup[i].length - 1];
        }
        console.log(solution);
    }
}

new Main();
