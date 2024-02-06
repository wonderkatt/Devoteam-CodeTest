import { Point } from "../point/point";

export abstract class Board{
    constructor(){}
    abstract IsWithinBounds(point: Point): boolean
}