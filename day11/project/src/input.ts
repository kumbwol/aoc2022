import {Monkey} from "./monkey";

export const input1: Monkey[] = [
    new Monkey([79, 98], {operator: "*", value: "19"}, 23, 2, 3),
    new Monkey([54, 65, 75, 74], {operator: "+", value: "6"}, 19, 2, 0),
    new Monkey([79, 60, 97], {operator: "*", value: "old"}, 13, 1, 3),
    new Monkey([74], {operator: "+", value: "3"}, 17, 0, 1)
]

export const input2: Monkey[] = [
    new Monkey([53, 89, 62, 57, 74, 51, 83, 97], {operator: "*", value: "3"}, 13, 1, 5),
    new Monkey([85, 94, 97, 92, 56], {operator: "+", value: "2"}, 19, 5, 2),
    new Monkey([86, 82, 82], {operator: "+", value: "1"}, 11, 3, 4),
    new Monkey([94, 68], {operator: "+", value: "5"}, 17, 7, 6),
    new Monkey([83, 62, 74, 58, 96, 68, 85], {operator: "+", value: "4"}, 3, 3, 6),
    new Monkey([50, 68, 95, 82], {operator: "+", value: "8"}, 7, 2, 4),
    new Monkey([75], {operator: "*", value: "7"}, 5, 7, 0),
    new Monkey([92, 52, 85, 89, 68, 82], {operator: "*", value: "old"}, 2, 0, 1)
]



