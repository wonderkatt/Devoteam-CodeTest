import { describe, expect, it } from "@jest/globals";
import {Robot} from "../../src/robot/robot"
import { EnglishParser } from "../../src/robot/commandParsers/englishParser";
import { Point } from "../../src/point/point";
import { Direction } from "../../src/enums/directions";

describe("GetCurrentPoint", () => {
    it("should be x = 3 and y = 3", () => {
        const expectedPoint = new Point(3,3);
        const robot = new Robot(new EnglishParser(), expectedPoint);
        
      expect(robot.GetCurrentPoint()).toEqual(expectedPoint);
    });
  });

  describe("GetCurrentFacingDirection", () => {
    it("should be North", () => {
        const robot = new Robot(new EnglishParser());
        
      expect(robot.GetCurrentFacingDirection()).toEqual(Direction.NORTH);
    });
  });

  describe("RotateLeft", () => {
    it("should rotate robot to face West", () => {
        const robot = new Robot(new EnglishParser());

        robot.RotateLeft();

      expect(robot.GetCurrentFacingDirection()).toEqual(Direction.WEST);
    });
  });

  describe("RotateRight", () => {
    it("should rotate robot to face East", () => {
        const robot = new Robot(new EnglishParser());

        robot.RotateRight();

      expect(robot.GetCurrentFacingDirection()).toEqual(Direction.EAST);
    });
  });

  describe("Move", () => {
    it("should return current position x = 0, y = -1", () => {
        const expectedPoint = new Point(0,-1);
        const robot = new Robot(new EnglishParser());

        robot.Move();

      expect(robot.GetCurrentPoint()).toEqual(expectedPoint);
    });
  });