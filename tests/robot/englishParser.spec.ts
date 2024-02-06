import { describe, expect, it } from "@jest/globals";
import {EnglishParser} from "../../src/commandParsers/englishParser"

describe("CommandStringIsValid", () => {
    it("should return true", () => {
        const parser = new EnglishParser();
        const command = "RRLLFFLRF";

      expect(parser.CommandStringIsValid(command)).toBeTruthy();
    });
  });