import { ILanguageParser } from "./interfaces/ILanguageParser";

export class SwedishParser implements ILanguageParser{
    constructor(){}

    CommandStringIsValid(command: string): boolean {
        for (let i = 0; i < command.length; i++) {
            if(command[i] != 'V' && command[i] != 'H' && command[i] != 'G')
            return false;
        }

        return true;
    }

}