import {input1, input2, IPos} from "./input";

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

        const width = this.getWidth(input) + 2000;
        const baseX = this.getBaseX(input) - Math.floor(width / 2);
        const height = this.getHeight(input) + 1;

        const T: number[][] = [];
        this.createTable2(T, height, width);

        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].length - 1; j++)
            {
                let base = Math.min(input[i][j].x, input[i][j + 1].x) - baseX;
                let distX = Math.abs(input[i][j].x - input[i][j + 1].x);
                if(distX > 0)
                {
                    distX++;
                }
                for(let k=0; k < distX; k++)
                {
                    T[input[i][j].y + 1][base + k + 1] = 1;
                }

                let baseY = Math.min(input[i][j].y, input[i][j + 1].y);
                let distY = Math.abs(input[i][j].y - input[i][j + 1].y);
                if(distY > 0)
                {
                    distY++;
                }
                for(let k=1; k < distY; k++)
                {
                    T[baseY + k][base + 1] = 1;
                }
            }
        }

        let score = 0;
        for(;;)
        {
            let sandPos: IPos = {x: 501 - baseX, y: 1};
            score++;

            for(;;)
            {
                if(T[sandPos.y + 1][sandPos.x] === 0)
                {
                    sandPos.y++;
                }
                else if(T[sandPos.y + 1][sandPos.x - 1] === 0)
                {
                    sandPos.x--;
                    sandPos.y++;
                }
                else if(T[sandPos.y + 1][sandPos.x + 1] === 0)
                {
                    sandPos.x++;
                    sandPos.y++;
                }
                else
                {
                    break;
                }
            }

            if(sandPos.y === 1)
            {
                break;
            }
            T[sandPos.y][sandPos.x] = 2;
        }

        console.log(score);
        //this.drawTable(T);
    }

    private firstHalf()
    {
        const input = input2;

        const baseX = this.getBaseX(input);
        const width = this.getWidth(input);
        const height = this.getHeight(input);

        const T: number[][] = [];
        this.createTable(T, height, width);

        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].length - 1; j++)
            {
                let base = Math.min(input[i][j].x, input[i][j + 1].x) - baseX;
                let distX = Math.abs(input[i][j].x - input[i][j + 1].x);
                if(distX > 0)
                {
                    distX++;
                }
                for(let k=0; k < distX; k++)
                {
                    T[input[i][j].y + 1][base + k + 1] = 1;
                }

                let baseY = Math.min(input[i][j].y, input[i][j + 1].y);
                let distY = Math.abs(input[i][j].y - input[i][j + 1].y);
                if(distY > 0)
                {
                    distY++;
                }
                for(let k=1; k < distY; k++)
                {
                    T[baseY + k][base + 1] = 1;
                }
            }
        }

        let done = false;
        let score = 0;
        for(;;)
        {
            let sandPos: IPos = {x: 501 - baseX, y: 1};
            score++;

            for(;;)
            {
                if(T[sandPos.y + 1][sandPos.x] === 0 || T[sandPos.y + 1][sandPos.x] === 3)
                {
                    if(T[sandPos.y + 1][sandPos.x] === 3)
                    {
                        done = true;
                        break;
                    }
                    sandPos.y++;
                }
                else if(T[sandPos.y + 1][sandPos.x - 1] === 0 || T[sandPos.y + 1][sandPos.x - 1] === 3)
                {
                    if(T[sandPos.y + 1][sandPos.x - 1] === 3)
                    {
                        done = true;
                        break;
                    }
                    sandPos.x--;
                    sandPos.y++;
                }
                else if(T[sandPos.y + 1][sandPos.x + 1] === 0 || T[sandPos.y + 1][sandPos.x + 1] === 3)
                {
                    if(T[sandPos.y + 1][sandPos.x + 1] === 3)
                    {
                        done = true;
                        break;
                    }
                    sandPos.x++;
                    sandPos.y++;
                }
                else
                {
                    break;
                }
            }

            if(done)
            {
                break;
            }
            T[sandPos.y][sandPos.x] = 2;
        }

        console.log(score);
        //this.drawTable(T);
    }

    private createTable2(T: number[][], height: number, width: number)
    {
        for(let i=0; i<height + 3; i++)
        {
            T.push([]);
            for(let j=0; j<width + 3; j++)
            {
                if(i === 0 || i === height+2 || j === 0 || j === width + 2)
                {
                    T[i].push(1);
                }
                else
                {
                    T[i].push(0);
                }
            }
        }
    }

    private createTable(T: number[][], height: number, width: number)
    {
        for(let i=0; i<height + 3; i++)
        {
            T.push([]);
            for(let j=0; j<width + 3; j++)
            {
                if(i === 0 || i === height+2 || j === 0 || j === width + 2)
                {
                    T[i].push(3);
                }
                else
                {
                    T[i].push(0);
                }
            }
        }
    }

    private drawTable(T: number[][])
    {
        for(let i=0; i<T.length; i++)
        {
            let row = "";
            for(let j=0; j<T[i].length; j++)
            {
                if(T[i][j] === 0)
                {
                    row += ".";
                }
                else if(T[i][j] === 1)
                {
                    row += "#";
                }
                else if(T[i][j] === 2)
                {
                    row += "O";
                }
                else if(T[i][j] === 3)
                {
                    row += "$";
                }
            }

            console.log(row);
        }
    }

    private getWidth(input: IPos[][]): number
    {
        let minX = input[0][0].x;
        let maxX = input[0][0].x;

        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].length; j++)
            {
                if(input[i][j].x < minX)
                {
                    minX = input[i][j].x;
                }

                if(input[i][j].x > maxX)
                {
                    maxX = input[i][j].x;
                }
            }
        }

        return maxX - minX;
    }

    private getBaseX(input: IPos[][]): number
    {
        let minX = input[0][0].x;

        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].length; j++)
            {
                if(input[i][j].x < minX)
                {
                    minX = input[i][j].x;
                }
            }
        }

        return minX;
    }

    private getHeight(input: IPos[][]): number
    {
        let minY = 0;
        let maxY = input[0][0].y;

        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].length; j++)
            {
                if(input[i][j].y < minY)
                {
                    minY = input[i][j].y;
                }

                if(input[i][j].y > maxY)
                {
                    maxY = input[i][j].y;
                }
            }
        }

        return maxY - minY;
    }
}

new Main();
