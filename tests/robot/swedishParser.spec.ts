import { describe, expect, it } from "@jest/globals";
import {SwedishParser} from "../../src/commandParsers/swedishParser"

describe("CommandStringIsValid", () => {
    it("should return true", () => {
        const parser = new SwedishParser();
        const command = "HGHGGHGHG";

      expect(parser.CommandStringIsValid(command)).toBeTruthy();
    });
  });