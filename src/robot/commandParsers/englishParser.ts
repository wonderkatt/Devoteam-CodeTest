import { Action } from "../../enums/actions";
import { ILanguageParser } from "../interfaces/ILanguageParser";

export class EnglishParser implements ILanguageParser{
    constructor(){}

    ParseCommand(command: string): Action {
        if(command == 'F') return Action.Move;
        else if(command == 'R') return Action.RotateRight;
        else return Action.RotateLeft;
    }

    CommandStringIsValid(command: string): boolean {
        for (let i = 0; i < command.length; i++) {
            if(command[i] != 'L' && command[i] != 'R' && command[i] != 'F')
            return false;
        }

        return true;
    }

}