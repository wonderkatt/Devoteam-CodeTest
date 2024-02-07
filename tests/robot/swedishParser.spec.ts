import { describe, expect, it } from "@jest/globals";
import {SwedishParser} from "../../src/robot/commandParsers/swedishParser"
import { Action } from "../../src/enums/actions";

describe("CommandStringIsValid", () => {
    it("should return true", () => {
        const parser = new SwedishParser();
        const command = "HGHGGHGHG";

      expect(parser.CommandStringIsValid(command)).toBeTruthy();
    });
  });

  describe("ParseCommand", () => {
    it("should return Rotate Right action", () => {
        const parser = new SwedishParser();
        const command = "H";

      expect(parser.ParseCommand(command)).toEqual(Action.RotateRight);
    });
  });

  describe("ParseCommand", () => {
    it("should return Rotate Left action", () => {
        const parser = new SwedishParser();
        const command = "V";

      expect(parser.ParseCommand(command)).toEqual(Action.RotateLeft);
    });
  });

  describe("ParseCommand", () => {
    it("should return Move action", () => {
        const parser = new SwedishParser();
        const command = "G";

      expect(parser.ParseCommand(command)).toEqual(Action.Move);
    });
  });