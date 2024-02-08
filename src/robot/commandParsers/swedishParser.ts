import { Action } from "../../enums/actions";
import { ILanguageParser } from "../interfaces/ILanguageParser";

export class SwedishParser implements ILanguageParser{
    constructor(){}
    ParseCommand(command: string): Action {
        if(command == 'G') return Action.Move;
        else if(command == 'H') return Action.RotateRight;
        else return Action.RotateLeft;
    }

    CommandStringIsValid(command: string): boolean {
        for (let i = 0; i < command.length; i++) {
            if(command[i] != 'V' && command[i] != 'H' && command[i] != 'G')
            return false;
        }

        return true;
    }

}