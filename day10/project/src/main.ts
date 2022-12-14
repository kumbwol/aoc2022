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
        let solution: boolean[][] = [];
        let cycle = 0;
        let X = 0;
        for(let i=0; i<6; i++)
        {
            solution.push([]);
        }

        let row = [];
        for(let i=0; i<40; i++)
        {
            row.push(false);
        }

        for(let i=0; i<input.length; i++)
        {
            if(input[i] === 0)
            {
                this.updateRow(X, row);
                if(row[cycle % 40]) solution[Math.floor(cycle / 40)][cycle % 40] = true;
                cycle++;
            }
            else
            {
                for(let j=0; j<2; j++)
                {
                    this.updateRow(X, row);
                    if(row[cycle % 40]) solution[Math.floor(cycle / 40)][cycle % 40] = true;
                    cycle++;
                }
                X += input[i];
            }
        }

        for(let i=0; i<solution.length; i++)
        {
            let solutionString = "";
            for(let j=0; j<solution[i].length; j++)
            {
                if(solution[i][j])
                {
                    solutionString += "#";
                }
                else
                {
                    solutionString += ".";
                }
            }

            console.log(solutionString);
        }
    }

    private updateRow(x: number, row: boolean[])
    {
        for(let i=0; i<row.length; i++)
        {
            row[i] = false;
        }

        for(let i=x; i<Math.min(x+3, row.length); i++)
        {
            row[i] = true;
        }
    }

    private firstHalf()
    {
        const input = input2;
        let cycle = 0;
        let X = 1;
        let score = 0;
        for(let i=0; i<input.length; i++)
        {
            if(input[i] === 0)
            {
                cycle++;
                //console.log(cycle, X);
                if(((cycle-20) % 40 === 0) || cycle === 20) score += cycle*X;
            }
            else
            {
                for(let j=0; j<2; j++)
                {
                    cycle++;
                    //console.log(cycle, X);
                    if(((cycle-20) % 40 === 0) || cycle === 20) score += cycle*X;
                }
                X += input[i];
            }
        }

        console.log(score);
    }
}

new Main();
