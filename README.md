# EstateManager

EstateManager is a comprehensive web application for managing real estate listings. This README provides instructions on setting up, running, and using the application.

## Table of Contents

1. [Installation](#installation)
   - [Step 1](#step-1)
   - [Step 2](#step-2)
2. [Running the Program](#running-the-program)
3. [Usage / Showcase](#usage--showcase)
4. [Troubleshooting](#troubleshooting)
   - [Error 1](#error-1)
   - [Error 2](#error-2)
5. [License](#license)
6. [Contributing](#contributing)

## Installation

### Step 1

Download or clone the project repository and set up the `.env` file for MongoDB, Firebase, and JWT.

```bash
git clone https://github.com/Kai0802/EstateManager.git
```

### Step 2

Change the directory to `api` and run `npm install`, then do the same for the `client` folder. This ensures that all the necessary node modules are installed.

```bash
cd api
npm install
cd ../client
npm install
```

## Running the Program

Run the following command in both the `api` and `client` folders to start the development server.

```bash
cd api
npm run dev
cd ../client
npm run dev
```

## Usage / Showcase

### Homepage

The homepage features a slideshow showing some of the recently added listings.

![Showcase of front page](/client/public/image.png)
![Showcase of front page](/client/public/homepage2.png)

### About Page

This page provides information about the website.

![Image of the about page](/client/public/aboutpage.png)

### Search Page

Displays the results of a search query.

![Showing result of a search query](/client/public/search_function.png)

## Troubleshooting

### Error 1

```plaintext
node:internal/modules/cjs/loader:1473 return process.dlopen(module, path.toNamespacedPath(filename));
```

**Solution:** Delete the `node_modules` directory and run `npm update` in the `api` folder.

```bash
cd api
rm -rf node_modules
npm update
```

### Error 2

```plaintext
Failed to load module @rollup/rollup-win32-x64-msvc. Required DLL was not found.
```

**Solution:** Install the Microsoft Visual C++ Redistributable from [here](https://aka.ms/vs/17/release/vc_redist.x64.exe). Alternatively, install an older version of Vite.

```bash
cd client
npm install vite@4.4.0
npm run dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
