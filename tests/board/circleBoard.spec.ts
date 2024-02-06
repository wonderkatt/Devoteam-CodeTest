import { describe, expect, it } from "@jest/globals";
import {CircleBoard} from "../../src/board/circleBoard"
import { Point } from "../../src/point/point";


describe("IsWithinBounds", () => {
    it("should return true", () => {
        const board = new CircleBoard(3);
        const point = new Point(2, 1);
      expect(board.IsWithinBounds(point)).toBeTruthy();
    });
  });