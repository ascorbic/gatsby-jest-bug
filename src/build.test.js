const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
jest.setTimeout(60_000)

describe("the cli", () => {
    it("builds", async () => {
        try {
            const { stdout } = await exec('gatsby build', { maxBuffer: 1024 * 1024 * 10 });
            expect(stdout).toBeDefined()
        } catch (error) {
            console.log(error.stdout)
            expect(error).toBeUndefined()
        }
    })
})