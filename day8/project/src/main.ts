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
        let max = -1;

        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].length; j++)
            {
                let up = 0;
                let left = 0;
                let right = 0;
                let down = 0;

                for(let k=i+1; k<input.length; k++)
                {
                    down++;
                    if(input[k][j] >= input[i][j])
                    {
                        break;
                    }
                }

                for(let k=i-1; k>=0; k--)
                {
                    up++;
                    if(input[k][j] >= input[i][j])
                    {
                        break;
                    }
                }

                for(let k=j+1; k<input[i].length; k++)
                {
                    right++;
                    if(input[i][k] >= input[i][j])
                    {
                        break;
                    }
                }

                for(let k=j-1; k>=0; k--)
                {
                    left++;
                    if(input[i][k] >= input[i][j])
                    {
                        break;
                    }
                }

                let multiply = left*right*up*down;
                if(max < multiply)
                {
                    max = multiply;
                }
            }
        }
        console.log(max);
    }

    private firstHalf()
    {
        const input = input2;
        const isVisible: boolean[][] = [];

        for(let i=0; i<input.length; i++)
        {
            const row: boolean[] = [];
            for(let j=0; j<input[i].length; j++)
            {
                row.push(false);
            }
            isVisible.push(row);
        }

        for(let i=0; i<input.length; i++)
        {
            let maxInRowFromLeft = -1;
            for(let j=0; j<input[i].length; j++)
            {
                if(maxInRowFromLeft < input[i][j])
                {
                    isVisible[i][j] = true;
                    maxInRowFromLeft = input[i][j];
                }
            }
        }

        for(let i=0; i<input.length; i++)
        {
            let maxInRowFromRight = -1;
            for(let j=input[i].length - 1; j>=0; j--)
            {
                if(maxInRowFromRight < input[i][j])
                {
                    isVisible[i][j] = true;
                    maxInRowFromRight = input[i][j];
                }
            }
        }

        for(let i=0; i<input[0].length; i++)
        {
            let maxInRowFromTop = -1;
            for(let j=0; j < input.length; j++)
            {
                if(maxInRowFromTop < input[j][i])
                {
                    isVisible[j][i] = true;
                    maxInRowFromTop = input[j][i];
                }
            }
        }

        for(let i=0; i<input[0].length; i++)
        {
            let maxInRowFromBottom = -1;
            for(let j=input.length - 1; j >= 0; j--)
            {
                if(maxInRowFromBottom < input[j][i])
                {
                    isVisible[j][i] = true;
                    maxInRowFromBottom = input[j][i];
                }
            }
        }

        let score = 0;
        for(let i=0; i<isVisible.length; i++)
        {
            for(let j=0; j<isVisible[i].length; j++)
            {
                if(isVisible[i][j])
                {
                    score++;
                }
            }
        }

        console.log(score);
    }
}

new Main();
