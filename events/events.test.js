const ready = require("./ready");
const interactionCreate = require("./interactionCreate");

describe("ready", () => {
    it("gets called", () => {
        const consoleSpy = jest.spyOn(console, "log");
        ready.execute({ user: { tag: "foobar" } });
        expect(consoleSpy).toHaveBeenCalledWith("Ready! Logged in as foobar");
    });
});

describe("interactionCreate", () => {
    it("gets called", () => {
        const consoleSpy = jest.spyOn(console, "log");
        interactionCreate.execute({
            user: { tag: "foobar" },
            channel: { name: "helloworld" },
            isCommand: () => false,
        });
        expect(consoleSpy).toHaveBeenNthCalledWith(2, "foobar in #helloworld triggered an interaction.");
    });
});
