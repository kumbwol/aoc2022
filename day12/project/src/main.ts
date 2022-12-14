import {input1, input2} from "./input";

export interface IPos
{
    x: number,
    y: number
}

export class Main
{


    constructor()
    {
        //this.firstHalf();
        this.secondHalf();
    }

    private secondHalf()
    {
        const M: number[][] = [];
        let start: IPos = {x: 0, y: 0};
        let end: IPos = {x: 0, y: 0};
        this.createMatrix(M, start, end);

        let currentActiveFields: IPos[] = [];
        for(let i=0; i<M.length; i++)
        {
            for(let j=0; j<M[i].length; j++)
            {
                if(M[i][j] === 0)
                {
                    currentActiveFields.push({x: j, y: i});
                }
            }
        }

        let score = 0;
        for(;;)
        {
            let nextActiveFields: IPos[] = [];

            for(let i=0; i<currentActiveFields.length; i++)
            {
                let f = currentActiveFields[i];

                if(M[f.y - 1][f.x] > -1 && (M[f.y - 1][f.x] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x, y: f.y - 1};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                if(M[f.y + 1][f.x] > -1 && (M[f.y + 1][f.x] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x, y: f.y + 1};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                if(M[f.y][f.x - 1] > -1 && (M[f.y][f.x - 1] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x - 1, y: f.y};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                if(M[f.y][f.x + 1] > -1 && (M[f.y][f.x + 1] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x + 1, y: f.y};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                M[f.y][f.x] = -1;
            }

            score++;
            if(this.checkWin(nextActiveFields, end)) break;

            currentActiveFields = [];
            for(let i=0; i<nextActiveFields.length; i++)
            {
                currentActiveFields.push(nextActiveFields[i]);
            }
        }

        console.log(score);
    }

    private firstHalf()
    {
        const M: number[][] = [];
        let start: IPos = {x: 0, y: 0};
        let end: IPos = {x: 0, y: 0};
        this.createMatrix(M, start, end);

        let currentActiveFields: IPos[] = [];
        currentActiveFields.push(start);

        let score = 0;
        for(;;)
        {
            let nextActiveFields: IPos[] = [];

            for(let i=0; i<currentActiveFields.length; i++)
            {
                let f = currentActiveFields[i];

                if(M[f.y - 1][f.x] > -1 && (M[f.y - 1][f.x] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x, y: f.y - 1};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                if(M[f.y + 1][f.x] > -1 && (M[f.y + 1][f.x] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x, y: f.y + 1};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                if(M[f.y][f.x - 1] > -1 && (M[f.y][f.x - 1] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x - 1, y: f.y};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                if(M[f.y][f.x + 1] > -1 && (M[f.y][f.x + 1] - M[f.y][f.x] <= 1))
                {
                    const field = {x: f.x + 1, y: f.y};
                    if(this.isUnique(nextActiveFields, field))
                    {
                        nextActiveFields.push(field);
                    }
                }

                M[f.y][f.x] = -1;
            }

            score++;
            if(this.checkWin(nextActiveFields, end)) break;

            currentActiveFields = [];
            for(let i=0; i<nextActiveFields.length; i++)
            {
                currentActiveFields.push(nextActiveFields[i]);
            }
        }

        console.log(score);
    }

    private checkWin(fields: IPos[], endField: IPos): boolean
    {
        for(let i=0; i<fields.length; i++)
        {
            if(fields[i].x === endField.x && fields[i].y === endField.y)
            {
                return true;
            }
        }
        return false;
    }

    private isUnique(fields: IPos[], field: IPos): boolean
    {
        for(let i=0; i<fields.length; i++)
        {
            if(fields[i].x === field.x && fields[i].y === field.y)
            {
                return false;
            }
        }
        return true;
    }

    private createMatrix(M: number[][], start: IPos, end: IPos)
    {
        const input = input2;

        for(let i=0; i<input.length; i++)
        {
            M.push([]);
            M[i].push(-1);
            for(let j=0; j<input[i].length; j++)
            {
                if(input[i][j] === "S")
                {
                    M[i].push("a".charCodeAt(0) - 97);
                    start.x = j+1;
                    start.y = i+1;
                }
                else if(input[i][j] === "E")
                {
                    M[i].push("z".charCodeAt(0) - 97);
                    end.x = j+1;
                    end.y = i+1;
                }
                else
                {
                    M[i].push(input[i][j].charCodeAt(0) - 97);
                }
            }
            M[i].push(-1);
        }

        M.splice(0, 0, []);
        for(let i=0; i<input[0].length + 2; i++)
        {
            M[0].push(-1);
        }

        M.push([]);
        for(let i=0; i<input[0].length + 2; i++)
        {
            M[M.length - 1].push(-1);
        }
    }
}

new Main();
