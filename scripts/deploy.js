const dotenv = require("dotenv");
const FtpDeploy = require("ftp-deploy");
const path = require("path");

dotenv.config({ path: "./.deploy.env" });

async function main() {
  try {
    const outDir = path.join(process.cwd(), "/out");
    const ftpDeploy = new FtpDeploy();
    ftpDeploy.on("uploading", function (data) {
      console.log(
        `${data.transferredFileCount} / ${data.totalFilesCount} - ${data.filename}`
      );
    });

    await ftpDeploy.deploy({
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      host: process.env.FTP_HOST,
      port: process.env.FTP_PORT,
      localRoot: outDir,
      remoteRoot: "/www/subdom/plancraft/",
      include: ["*", "**/*"],
      exclude: [],
      deleteRemote: false,
      forcePasv: true,
    });

    console.log("Succesfully deployed site");
    return 0;
  } catch (e) {
    console.error("An error occured during deployment:", e);
    return 1;
  }
}

main().then((code) => process.exit(code));
