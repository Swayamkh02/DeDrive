const hre = require("hardhat");

async function main() {
  const upload = await hre.ethers.deployContract("Upload");
  await upload.deployed();
  console.log("Library deployed to:", upload.address);

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});