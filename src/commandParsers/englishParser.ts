import { ILanguageParser } from "./interfaces/ILanguageParser";


export class EnglishParser implements ILanguageParser{
    constructor(){}
      CommandStringIsValid(command: string): boolean {
        for (let i = 0; i < command.length; i++) {
            if(command[i] != 'L' && command[i] != 'R' && command[i] != 'F')
            return false;
        }

        return true;
    }

}