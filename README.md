# Named Transformations Demo Repo for Training/Tutorial

In this module we walk through how to programmatically create two different upload presets and then use those presets to upload assets to Cloudinary. We also take a peek at a more complex preset that you could use to process short form video.

## Environment Setup

### Install Node.js and NPM
You will need to install Node.js on your machine, version 10 or higher.
 Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install

```bash
$ node --version
v16.13.0

$ npm --version
8.1.0
```

### Choose an IDE or Use Text Editor

[Visual Studio Code](https://code.visualstudio.com/download)
[WebStorm](https://www.jetbrains.com/webstorm/)
[Sublime](https://www.sublimetext.com/)
[Atom](https://atom.io/)
[iTerm](https://iterm2.com/)

### Download Repository

[cust-training-2022 GitHub Repository](https://github.com/cloudinary-training/cld-upload-presets)

- Assets are located in `/assets` directory
- Run code from root directory 

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

### Dashboard

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

### Run Code: Test Credentials

Npm install Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

```bash
node testCredentials.js
```
You should your cloud name and API key reported.  Keep your API_SECRET a secret!

### Run Code: Run code in optimization directory
Example: run image upload script

```bash
node optimization/images/upload.js
```
### Video Tutorial
You can find a [video tutorial:](https://cloudinary.com/documentation/upload_programmatically_tutorial) in Cloudinary Documentation that covers Node.js setup and upload to your Cloudinary cloud.

### Upload Presets Docs
Additional information about upload presets from the docs [upload presets docs:](https://cloudinary.com/documentation/upload_presets)

## Asset Credits

Photo by Norma Mortenson from Pexels: https://www.pexels.com/photo/close-up-shot-of-a-man-with-red-back-ground-7301536/

Photo by VK Studio from Pexels: https://www.pexels.com/photo/positive-woman-near-pink-wall-4458627/

Photo by Anna Shvets from Pexels: https://www.pexels.com/photo/woman-with-yellow-eye-makeup-and-yellow-and-black-polka-dot-button-up-shirt-4316440/
