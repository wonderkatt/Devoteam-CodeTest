import { ILanguageParser } from "../commandParsers/interfaces/ILanguageParser";

export class Robot{
    languageParser: ILanguageParser;
    
    constructor(languageParser: ILanguageParser){
        this.languageParser = languageParser;
    }
}