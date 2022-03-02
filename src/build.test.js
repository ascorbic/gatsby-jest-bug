const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
jest.setTimeout(60_000)

describe("the cli", () => {
    it("builds", async () => {
        try {
            const { stdout }= await exec('gatsby build')
            expect(stdout).toBeDefined()
        } catch (error) {
            // @ts-ignore
            console.log(error.stdout)
            expect(error).toBeUndefined()
        }
    })
})