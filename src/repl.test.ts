import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";


describe("cleanInput", () => {
    test("should clean input with extra spaces", () => {
        const input = "  hello   world  ";
        const expectedOutput = ["hello", "world"];
        expect(cleanInput(input)).toEqual(expectedOutput);
    });
});