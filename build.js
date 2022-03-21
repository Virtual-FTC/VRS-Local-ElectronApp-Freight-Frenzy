// C:\Users\sdkca\Desktop\electron-workspace\build.js
const electronInstaller = require('electron-winstaller');
const createDMG = require('electron-installer-dmg');


switch (process.platform) {
    case "win32":
        buildForWin32();
        break;
    case "darwin":
        buildForDarwin();
        break;
    default:
        console.log(`Sorry, ${process.platform} isn't supported`)
}



function buildForWin32() {
    // In this case, we can use relative paths
    var settings = {
        // Specify the folder where the built app is located
        appDirectory: './VRS-win32-x64',
        // Specify the existing folder where 
        outputDirectory: './VRS-Windows-Installer',
        // The name of the Author of the app (the name of your company)
        authors: 'Virtual Robot Simulator',
        // The name of the executable of your built
        exe: './VRS.exe',
    };

    resultPromise = electronInstaller.createWindowsInstaller(settings);

    resultPromise.then(() => {
        console.log("The installers of your application were succesfully created !");
    }, (e) => {
        console.log(`Well, sometimes you are not so lucky: ${e.message}`)
    });
}

function buildForDarwin() {
    // In this case, we can use relative paths
    const settings = {
        // Specify the folder where the built app is located
        appPath: './VRS-darwin-x64/VRS.app',
        // Specify the existing folder where installer will be created
        out: './VRS-MacOS-Installer',
        // app icon
        icon: '../logo.ico',
        // The application name
        name: 'Virtual Robot Simulator',
        // The name of the executable of your built
        exe: './VRS',
    };

    resultPromise = createDMG(settings)

    resultPromise.then(() => {
        console.log("The installers of your application were succesfully created !");
    }, (e) => {
        console.log(`Well, sometimes you are not so lucky: ${e.message}`)
    });
}