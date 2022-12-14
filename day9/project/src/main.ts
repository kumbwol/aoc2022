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
        const MAX_WIDTH = 500;
        const MAX_HEIGHT = 500;
        const table: boolean[][] = [];
        for(let i=0; i<MAX_HEIGHT; i++)
        {
            const row: boolean[] = [];
            for(let j=0; j<MAX_WIDTH; j++)
            {
                row.push(false);
            }
            table.push(row);
        }

        let head: IPos = {
            x: 250,
            y: 250
        }

        let N = 9;
        let tail: IPos[] = [];
        for(let i=0; i<N; i++)
        {
            tail.push({x: head.x, y: head.y});
        }

        table[tail[N - 1].y][tail[N - 1].x] = true;

        const input = input2;
        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].moves; j++)
            {
                if(input[i].direction === "L")
                {
                    head.x--;
                }
                else if(input[i].direction === "R")
                {
                    head.x++;
                }
                else if(input[i].direction === "U")
                {
                    head.y--;
                }
                else if(input[i].direction === "D")
                {
                    head.y++;
                }

                for(let k=0; k<N; k++)
                {
                    let currentHead: IPos;

                    if(k === 0)
                    {
                        currentHead = head;
                    }
                    else
                    {
                        currentHead = tail[k - 1];
                    }

                    if(tail[k].x === currentHead.x)
                    {
                        if(currentHead.y - tail[k].y > 1)
                        {
                            tail[k].y++;
                        }
                        else if(tail[k].y - currentHead.y > 1)
                        {
                            tail[k].y--;
                        }
                    }
                    else if(tail[k].y === currentHead.y)
                    {
                        if(currentHead.x - tail[k].x > 1)
                        {
                            tail[k].x++;
                        }
                        else if(tail[k].x - currentHead.x > 1)
                        {
                            tail[k].x--;
                        }
                    }
                    else
                    {
                        if(currentHead.x - tail[k].x > 1)
                        {
                            tail[k].x++;
                            if(currentHead.y > tail[k].y)
                            {
                                tail[k].y++;
                            }
                            else
                            {
                                tail[k].y--;
                            }
                        }
                        else if(tail[k].x - currentHead.x > 1)
                        {
                            tail[k].x--;
                            if(currentHead.y > tail[k].y)
                            {
                                tail[k].y++;
                            }
                            else
                            {
                                tail[k].y--;
                            }
                        }
                        else if(currentHead.y - tail[k].y > 1)
                        {
                            tail[k].y++;
                            if(currentHead.x > tail[k].x)
                            {
                                tail[k].x++;
                            }
                            else
                            {
                                tail[k].x--;
                            }
                        }
                        else if(tail[k].y - currentHead.y > 1)
                        {
                            tail[k].y--;
                            if(currentHead.x > tail[k].x)
                            {
                                tail[k].x++;
                            }
                            else
                            {
                                tail[k].x--;
                            }
                        }
                    }

                    if(k === N-1)
                    {
                        this.tick(table, tail[k]);
                    }
                }
            }
        }

        let score = 0;
        for(let i=0; i<table.length; i++)
        {
            for(let j=0; j<table[i].length; j++)
            {
                if(table[i][j])
                {
                    score++;
                }
            }
        }

        console.log(score);
    }


    private firstHalf()
    {
        const MAX_WIDTH = 500;
        const MAX_HEIGHT = 500;
        const table: boolean[][] = [];
        for(let i=0; i<MAX_HEIGHT; i++)
        {
            const row: boolean[] = [];
            for(let j=0; j<MAX_WIDTH; j++)
            {
                row.push(false);
            }
            table.push(row);
        }

        let head: IPos = {
            x: 250,
            y: 250
        }

        let tail: IPos = {
            x: 250,
            y: 250
        }

        table[tail.y][tail.x] = true;

        const input = input2;
        for(let i=0; i<input.length; i++)
        {
            for(let j=0; j<input[i].moves; j++)
            {
                if(input[i].direction === "L")
                {
                    head.x--;
                }
                else if(input[i].direction === "R")
                {
                    head.x++;
                }
                else if(input[i].direction === "U")
                {
                    head.y--;
                }
                else if(input[i].direction === "D")
                {
                    head.y++;
                }

                if(tail.x === head.x)
                {
                    if(head.y - tail.y > 1)
                    {
                        tail.y++;
                    }
                    else if(tail.y - head.y > 1)
                    {
                        tail.y--;
                    }
                }
                else if(tail.y === head.y)
                {
                    if(head.x - tail.x > 1)
                    {
                        tail.x++;
                    }
                    else if(tail.x - head.x > 1)
                    {
                        tail.x--;
                    }
                }
                else
                {
                    if(head.x - tail.x > 1)
                    {
                        tail.x++;
                        if(head.y > tail.y)
                        {
                            tail.y++;
                        }
                        else
                        {
                            tail.y--;
                        }
                    }
                    else if(tail.x - head.x > 1)
                    {
                        tail.x--;
                        if(head.y > tail.y)
                        {
                            tail.y++;
                        }
                        else
                        {
                            tail.y--;
                        }
                    }
                    else if(head.y - tail.y > 1)
                    {
                        tail.y++;
                        if(head.x > tail.x)
                        {
                            tail.x++;
                        }
                        else
                        {
                            tail.x--;
                        }
                    }
                    else if(tail.y - head.y > 1)
                    {
                        tail.y--;
                        if(head.x > tail.x)
                        {
                            tail.x++;
                        }
                        else
                        {
                            tail.x--;
                        }
                    }
                }

                this.tick(table, tail);
            }
        }

        let score = 0;
        for(let i=0; i<table.length; i++)
        {
            for(let j=0; j<table[i].length; j++)
            {
                if(table[i][j])
                {
                    score++;
                }
            }
        }

        console.log(score);
    }

    private tick(table: boolean[][], tail: IPos)
    {
        if(!table[tail.y][tail.x])
        {
            table[tail.y][tail.x] = true;
        }
    }
}

new Main();
