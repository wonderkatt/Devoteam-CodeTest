import { Mode } from "../enums/modes";
import promptSync from 'prompt-sync';


export class InputManager {
    constructor() {}

    GetGameModeFromInput(): Mode {
        const prompt = promptSync();
        let input;
        let run = true;
        let mode;
        while (run) {
            console.log("Wich board do you want to use? \n 1. square \n 2. circle \n")
            input = prompt("input >> ");

            mode = +input;
            if (isNaN(+mode) || mode < 1 || mode > 2) {
                console.log("\ninvalid input \n");
                continue;
            }
            run = false;
        }
        if(mode == 1)
        {
            return Mode.square
        }
        else{
            return Mode.circle;
        }
    }
    
    GetCommandStringFromInput(): string {
        const prompt = promptSync();
        console.log("Input command string\n")
        const input = prompt("input >> ");
        return input;
    }
}