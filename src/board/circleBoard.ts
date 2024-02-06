import { Point } from "../point/point";
import { Board } from "./board";

export class CircleBoard extends Board{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    IsWithinBounds(point: Point): boolean {
        return (Math.pow(point.x, 2) + Math.pow(point.y, 2) <= Math.pow(this.radius, 2));
    }

}