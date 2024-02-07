import { exit } from "process";
import { CircleBoard } from "./board/circleBoard";
import { SquareBoard } from "./board/squareBoard";
import { Mode } from "./enums/modes";
import { InputManager } from "./helpers/inputManager";
import { Point } from "./point/point";
import { EnglishParser } from "./robot/commandParsers/englishParser";
import { SwedishParser } from "./robot/commandParsers/swedishParser";
import { Robot } from "./robot/robot";
import { Action } from "./enums/actions";

const inputManager = new InputManager();
const run = true;
while(run){
    const mode = inputManager.QueryGameMode();

    let board;
    let robot;

    if(mode == Mode.square){
        board = new SquareBoard(5);
        robot = new Robot(new SwedishParser(), new Point(1,2))
    }
    else if(mode == Mode.circle){
        board = new CircleBoard(10);
        robot = new Robot(new EnglishParser());
       
    }
    else{
        console.log("no such mode");
        exit();
    }

    let commandString;
    do{
        commandString = inputManager.QueryCommandString();

    }while(!robot.CommandStringisValid(commandString))


    for (let i = 0; i < commandString.length; i++) {
        const action = robot.InputCommand(commandString[i]);
        switch (action){
            case Action.Move: {
                const targetPoint = robot.GetNextSquare();
                if(board.IsWithinBounds(targetPoint)){
                    robot.Move();
                }
                break;
            }
            case Action.RotateLeft: {
                robot.RotateLeft();
                break;
            }
            case Action.RotateRight: {
                robot.RotateRight();
                break;
            }
        }
    }
    console.log(`${robot.GetCurrentPoint().x} ${robot.GetCurrentPoint().y} ${robot.GetCurrentFacingDirection()}`);
}