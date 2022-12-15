import {input1, input2, input3, IPos} from "./input";

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
        const distances: number[] = [];

        for(let i=0; i<input.length; i++)
        {
            if(i % 2 === 0)
            {
                const dist = this.calculateDistance(input[i], input[i+1]);
                distances.push(dist);
            }
            else
            {
                distances.push(-1);
            }
        }

        console.log(distances);

        for(let i=0; i<input.length; i+=2)
        {
            console.log("try");
            let x = input[i].x;
            let y = input[i].y - (distances[i] + 1);

            for(let j=0; j<(distances[i] + 2); j++)
            {
                if(this.isPositionInside({x, y}, input, distances))
                {
                }
                else
                {
                    console.log("WOHOOOO", x, y);
                }

                x++;
                y++;
            }
        }
    }

    private isPositionInside(pos1: IPos, input: IPos[], distances: number[]): boolean
    {
        if(pos1.x < 0 || pos1.y < 0 || pos1.x > 4000000 || pos1.y > 4000000)
        {
            return true;
        }

        for(let i=0; i<input.length; i+=2)
        {
            if(this.calculateDistance(pos1, input[i]) <= distances[i])
            {
                return true;
            }
        }
        return false;
    }

    private firstHalf()
    {
        /*const input = input1;
        const Y = 10;*/

        const input = input2;
        const Y = 2000000;

        const ranges: IPos[] = [];

        for(let i=0; i<input.length; i+=2)
        {
            const dist = this.calculateDistance(input[i], input[i+1]);
            let distFromY = Math.abs(Y - input[i].y);

            console.log(dist);

            if(distFromY <= dist)
            {
                let width;

                if(Y === input[i].y)
                {
                    width = (dist) * 2;
                }
                else
                {
                    width = (dist - distFromY + 1) * 2 - 1;
                }
                const range: IPos = {x: input[i].x - Math.floor(width / 2), y: input[i].x + Math.floor(width / 2)}

                ranges.push(range);
            }
        }

        let min = ranges[0].x;
        let max = ranges[0].y;

        for(let i=0; i<ranges.length; i++)
        {
            if(ranges[i].x < min)
            {
                min = ranges[i].x;
            }

            if(ranges[i].y > max)
            {
                max = ranges[i].y;
            }
        }

        let score = 0;
        for(let i=min; i<=max; i++)
        {
            for(let j=0; j<ranges.length; j++)
            {
                if(i >= ranges[j].x && i <= ranges[j].y)
                {
                    score++;
                    break;
                }
            }
        }

        let obsticles = 0;
        let obsticlesPos: IPos[] = [];
        for(let i=0; i<input.length; i++)
        {
            if(input[i].y === Y)
            {
                let alreadyIn = false;
                for(let j=0; j<obsticlesPos.length; j++)
                {
                    if(input[i].x === obsticlesPos[j].x && input[i].y === obsticlesPos[j].y)
                    {
                        alreadyIn = true;
                        break;
                    }
                }

                if(!alreadyIn)
                {
                    for(let j=0; j<ranges.length; j++)
                    {
                        if(input[i].x >= ranges[j].x && input[i].x <= ranges[j].y)
                        {
                            obsticles++;
                            obsticlesPos.push(input[i]);
                            break;
                        }
                    }
                }
            }
        }

        console.log(score - obsticles);
    }

    /*private createUniqueRanges(ranges: IPos[])
    {
        let uniqueRanges: IPos[] = [];

        for(let i=0; i<ranges.length; i++)
        {
            let canConcat = false;
            for(let j=0; j<uniqueRanges.length; j++)
            {
                if(ranges[i].x <= uniqueRanges[j].y)
                {
                    uniqueRanges[j].
                    break;
                }
            }

            if(!canConcat)
            {
                uniqueRanges.push(ranges[i]);
            }
        }
    }*/

    private calculateDistance(pos1: IPos, pos2: IPos): number
    {
        return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
    }

    private drawTable()
    {
        const T: number[][] = [];
        for(let i=0; i<30; i++)
        {
            T.push([]);
            for(let j=0; j<30; j++)
            {
                T[i].push(0);
            }
        }

        for(let i=0; i<T.length; i++)
        {
            let row = "";
            for(let j=0; j<T[i].length; j++)
            {
                switch(T[i][j])
                {
                    case 0:
                        if(i === 10)
                        {
                            row += "!";
                        }
                        else
                        {
                            row += ".";
                        }
                        break;

                    case 1:
                        row += "S";
                        break;

                    case 2:
                        row += "B";
                        break

                    case 3:
                        row += "#";
                        break;
                }
            }

            console.log(row);
        }
    }
}

new Main();
