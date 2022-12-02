import { input1 } from "./input";
import {input2} from "./input2";

export class Main
{
    constructor()
    {
        //this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        let score = 0;
        const input = input1;
        for(let i=0; i<input.length; i++)
        {
            let myAnswer = this.calculateAnswer(input[i][0], input[i][1]);

            if(input[i][1] === "Y")
            {
                score += 3;
            }
            else if(input[i][1] === "Z")
            {
                score += 6;
            }

            if(myAnswer === "X")
            {
                score += 1;
            }
            else if(myAnswer === "Y")
            {
                score += 2;
            }
            else if(myAnswer === "Z")
            {
                score += 3;
            }
        }

        console.log(score);
    }

    private calculateAnswer(opponent: string, result: string): string
    {
        if(opponent === "A")
        {
            if(result === "X")
            {
                return "Z";
            }
            else if(result === "Y")
            {
                return "X"
            }
            return "Y";
        }
        else if(opponent === "B")
        {
            if(result === "X")
            {
                return "X";
            }
            else if(result === "Y")
            {
                return "Y"
            }
            return "Z";
        }
        else if(opponent === "C")
        {
            if(result === "X")
            {
                return "Y";
            }
            else if(result === "Y")
            {
                return "Z"
            }
            return "X";
        }
    }

    private firstHalf()
    {
        let score = 0;
        const input = input1;
        for(let i=0; i<input.length; i++)
        {
            if(this.isWin(input[i][0], input[i][1]))
            {
                score += 6;
            }
            else if(this.isDraw(input[i][0], input[i][1]))
            {
                score += 3;
            }

            if(input[i][1] === "X")
            {
                score += 1;
            }
            else if(input[i][1] === "Y")
            {
                score += 2;
            }
            else if(input[i][1] === "Z")
            {
                score += 3;
            }
        }

        console.log(score);
    }

    private isWin(opponent: string, me: string)
    {
        return ((opponent === "A" && me === "Y") || (opponent === "B" && me === "Z") || (opponent === "C" && me === "X"));
    }

    private isDraw(opponent: string, me: string)
    {
        return ((opponent === "A" && me === "X") || (opponent === "B" && me === "Y") || (opponent === "C" && me === "Z"));
    }
}

new Main();
