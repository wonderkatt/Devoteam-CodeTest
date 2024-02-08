import { describe, expect, it } from "@jest/globals";
import {EnglishParser} from "../../src/robot/commandParsers/englishParser"
import { Action } from "../../src/enums/actions";

describe("CommandStringIsValid", () => {
    it("should return true", () => {
        const parser = new EnglishParser();
        const command = "RRLLFFLRF";

      expect(parser.CommandStringIsValid(command)).toBeTruthy();
    });
  });

  describe("ParseCommand", () => {
    it("should return Rotate Right action", () => {
        const parser = new EnglishParser();
        const command = "R";

      expect(parser.ParseCommand(command)).toEqual(Action.RotateRight);
    });
  });

  describe("ParseCommand", () => {
    it("should return Rotate Left action", () => {
        const parser = new EnglishParser();
        const command = "L";

      expect(parser.ParseCommand(command)).toEqual(Action.RotateLeft);
    });
  });

  describe("ParseCommand", () => {
    it("should return Move action", () => {
        const parser = new EnglishParser();
        const command = "F";

      expect(parser.ParseCommand(command)).toEqual(Action.Move);
    });
  });