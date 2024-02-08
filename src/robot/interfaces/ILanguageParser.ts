import { Action } from "../../enums/actions";

export interface ILanguageParser{
    ParseCommand(command: string): Action;
    CommandStringIsValid(command: string): boolean

}