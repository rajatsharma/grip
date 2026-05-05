import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { chdir, cwd } from "node:process";
import { join } from "node:path";

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("no arg passed, need at least one, PROJECT_NAME");
    process.exit(1);
  }

  if (args[0] === "--help") {
    console.log("USAGE: grip PROJECT_NAME");
    process.exit(0);
  }

  const projectName = args[0];

  execSync(
    `git clone git@github.com:rajatsharma/${projectName}.git`,
    { stdio: "inherit" }
  );

  const projectDir = join(cwd(), projectName);

  chdir(projectDir);

  if (existsSync(join(projectDir, "pnpm-lock.yaml"))) {
    execSync("pnpm i", { stdio: "inherit" });
  }

  if (existsSync(join(projectDir, "stack.yaml"))) {
    execSync("stack build", { stdio: "inherit" });
  }

  if (existsSync(join(projectDir, "go.mod"))) {
    execSync("go mod tidy", { stdio: "inherit" });
  }

  if (existsSync(join(projectDir, "yarn.lock"))) {
    execSync("yarn", { stdio: "inherit" });
  }

  console.log(`Gripped rajatsharma/${projectName} 🎉`);
}

main();
