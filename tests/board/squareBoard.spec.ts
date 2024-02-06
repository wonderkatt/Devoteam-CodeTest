import { describe, expect, it } from "@jest/globals";
import {SquareBoard} from "../../src/board/squareBoard"
import { Point } from "../../src/point/point";


describe("IsWithinBounds", () => {
    it("should return true", () => {
        const board = new SquareBoard(3);
        const point = new Point(2, 1);
      expect(board.IsWithinBounds(point)).toBeTruthy();
    });
  });