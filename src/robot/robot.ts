import { ILanguageParser } from "./interfaces/ILanguageParser";
import { Direction } from "../enums/directions";
import { Point } from "../point/point";
import { Action } from "../enums/actions";

export class Robot{
 
   
    languageParser: ILanguageParser;
    currentPoint: Point;
    currentFacingDirection: Direction;
    
    constructor(languageParser: ILanguageParser, startingPoint: Point = new Point(0,0)){
        this.languageParser = languageParser;
        this.currentPoint = startingPoint;
        this.currentFacingDirection = Direction.NORTH;
    }

    Move(): void {
        this.currentPoint = this.GetNextSquare();
    }

    GetCurrentPoint(): Point{
        return this.currentPoint;
    }

    GetCurrentFacingDirection(): Direction{
        return this.currentFacingDirection;
    }

    CommandStringisValid(commandString: string): boolean{
        return this.languageParser.CommandStringIsValid(commandString);
    }

    InputCommand(command: string): Action{
        return this.languageParser.ParseCommand(command);
    }

    GetNextSquare(): Point {
        switch(this.currentFacingDirection){
            case Direction.NORTH:{
                return new Point(this.currentPoint.x, this.currentPoint.y + 1);
            }
            case Direction.SOUTH:{
                return new Point(this.currentPoint.x, this.currentPoint.y - 1);
            }
            case Direction.EAST:{
                return new Point(this.currentPoint.x + 1, this.currentPoint.y);
            }
            case Direction.WEST:{
                return new Point(this.currentPoint.x - 1, this.currentPoint.y);
            }
        }
    }

    RotateLeft(): void{
        switch(this.currentFacingDirection){
            case Direction.NORTH:{
                this.currentFacingDirection = Direction.WEST;
                return;
            }
            case Direction.SOUTH:{
                this.currentFacingDirection = Direction.EAST;
                return;
            }
            case Direction.EAST:{
                this.currentFacingDirection = Direction.NORTH;
                return;
            }
            case Direction.WEST:{
                this.currentFacingDirection = Direction.SOUTH;
                return;
            }
        }
    }

    RotateRight(): void{
        switch(this.currentFacingDirection){
            case Direction.NORTH:{
                this.currentFacingDirection = Direction.EAST;
                return;
            }
            case Direction.SOUTH:{
                this.currentFacingDirection = Direction.WEST;
                return;
            }
            case Direction.EAST:{
                this.currentFacingDirection = Direction.SOUTH;
                return;
            }
            case Direction.WEST:{
                this.currentFacingDirection = Direction.NORTH;
                return;
            }
        }
    }
}