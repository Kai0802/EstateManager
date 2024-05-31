# EstateManager
## Installation 🛠️
### Step 1: 
Download or clone the project with `git clone`, set up `.env` file for mongoosedb, firebase, and jwt.
### Step 2:
Change directory to `api` and run `npm install`, and do the same thing for the `client` folder. This will make sure that all the node modules got installed properly.
## Run the program ✅
run the command `npm run dev` for both `api` and `client` folders
## Usage / Showcase
![show case of front page](/client/public/image.png)
## Problems that might occur ❌
![DogComputerGIF](https://github.com/Kai0802/EstateManager/assets/75660550/39a439e3-231f-449a-bce3-0cf0c72e663e)
### Error 1: node:internal/modules/cjs/loader:1473 return process.dlopen(module, path.toNamespacedPath(filename)); 
For this error, simply delete the node_modules with command `rm -rf node_modules`, and run the command `npm update`.\
**Rememeber to do this in the api folder**
### Error 2: Failed to load module @rollup/rollup-win32-x64-msvc. Required DLL was not found. This error usually happens when Microsoft Visual C++ Redistributable is not installed. You can download it from https://aka.ms/vs/17/release/vc_redist.x64.exe
We can fix this error by install an older version of vite with command `npm install vite@4.4.0`, and then rerun the program with `npm run dev`.\
**Remember to do this in the client folder**
