import { Point } from "../point/point";
import { Board } from "./board";

export class SquareBoard extends Board{
    private length: number;

    constructor(length: number){
        super();
        this.length = length;
    }

    IsWithinBounds(point: Point): boolean {
        return point.x >= 0 && point.x < this.length 
        && point.y >= 0 && point.y < this.length;
    }
}