# gsm-modal
Modal script for [personal](https://gabischima.github.io/) use. Let me know if you use it. (:

## Usage

1. When using `<img>` add the attribute `[gsm-modal-image]` with the path to the larger image as it's value.
   ``` html
     <img src="path/to/thumbnail_image" gsm-modal-image="path/to/larger_image">
   ```
2. [Build](#build) the script
3.  Add it to your project at the end of your `<body>`:
    ```html
      <script src="path/to/gsm-modal.min.js"></script>
    ```

## Installation

1. Install [**Git**](https://www.git-scm.com);

2. Install [**Node**](https://nodejs.org/en/);

3. After the installations, clone this repository:
   - **[SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)**:
   ```
   git clone git@github.com:gabischima/gsm-modal.git
   ```

   - **HTTPS**:
   ```
   git clone https://github.com/gabischima/gsm-modal.git
   ```

4. Go to the project root folder, and install all dependencies with:
   ```
   npm i
   ```

## Scripts

### Serving

- **Development mode:**
  ```
  npm run serve:dev
  ```

- **Production mode:**
  ```
  npm run serve:prd
  ```

### Build

- **Development mode:**
  ```
  npm run build:dev
  ```

- **Production mode:**
  ```
  npm run build:prd
  ```

- **Both of them:**
  ```
  npm run build:all
  ```
