# EstateManager

## Installation 🛠️

### Step 1:

Download or clone the project with `git clone`, set up the `.env` file for MongoDB, Firebase, and JWT.

```bash
git clone <repository_url>
```

### Step 2:

Change directory to `api` and run `npm install`, then do the same for the `client` folder. This ensures that all the node modules are installed properly.

```bash
cd api
npm install
cd ../client
npm install
```

## Run the Program ✅

Run the command `npm run dev` in both the `api` and `client` folders.

```bash
cd api
npm run dev
cd ../client
npm run dev
```

## Usage / Showcase

### This is the homepage of the website

It features a slideshow showing some of the recently added listings.

![Showcase of front page](/client/public/image.png)
![Showcase of front page](/client/public/homepage2.png)

### This is the about page of the website

![Image of the about page](/client/public/aboutpage.png)

### Search page

![Showing result of a search query](/client/public/search_function.png)

## Problems That Might Occur ❌

![DogComputerGIF](https://github.com/Kai0802/EstateManager/assets/75660550/39a439e3-231f-449a-bce3-0cf0c72e663e)

### Error 1:

```plaintext
node:internal/modules/cjs/loader:1473 return process.dlopen(module, path.toNamespacedPath(filename));
```

For this error, simply delete the `node_modules` directory with the command `rm -rf node_modules`, and run the command `npm update`.  
**Remember to do this in the `api` folder**

```bash
cd api
rm -rf node_modules
npm update
```

### Error 2:

```plaintext
Failed to load module @rollup/rollup-win32-x64-msvc. Required DLL was not found.
```

This error usually happens when the Microsoft Visual C++ Redistributable is not installed. You can download it from [here](https://aka.ms/vs/17/release/vc_redist.x64.exe).

We can fix this error by installing an older version of Vite with the command `npm install vite@4.4.0`, and then rerun the program with `npm run dev`.  
**Remember to do this in the `client` folder**

```bash
cd client
npm install vite@4.4.0
npm run dev
```
