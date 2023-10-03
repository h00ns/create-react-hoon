#! /usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { moveSync, removeSync } = require("fs-extra");

// project-name 미입력
if (process.argv.length < 3) {
  console.log("[ERROR]: Enter as in the example below");
  console.log("ex) npx create-react-hoon [project-name]");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const parentPath = path.resolve(currentPath, "..");

const tempPath = path.join(parentPath, "temp");
const projectPath =
  projectName === "." ? currentPath : path.join(currentPath, projectName);

const GIT_REPO = "https://github.com/h00ns/create-react-hoon.git";

// project-name 입력시
if (projectName !== ".") {
  try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      // 이미 해당 경로 존재
      console.log(
        `[ERROR]: The file ${projectName} already exist in the current directory.`
      );
    } else {
      console.log(error);
    }
    process.exit(1);
  }
}

async function main() {
  try {
    // git clone
    console.log("[INFO]: Downloading create-react-hoon...");
    execSync(`git clone ${GIT_REPO} ${tempPath}`);

    console.log("[INFO]: Copying files...");
    // 임시 폴더에서 react-boilerplate만 복사
    moveSync(`${tempPath}/react-boilerplate`, `${projectPath}`, {
      overwrite: true,
    });
    // 임시 폴더 삭제
    removeSync(tempPath);

    // 현재 경로 이동
    console.log("[INFO]: Moving into directory...");
    process.chdir(projectPath);

    // 의존성 설치
    console.log("[INFO]: install dependencies...");
    execSync("npm install");

    // SUCCESS !
    console.log("[SUCCESS]: Success to create-react-hoon. Available now !");
  } catch (error) {
    console.log(error);
  }
}

main();
