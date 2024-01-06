# password-generator
Challenge to produce HTML, CSS and Javascript pages

### Page location
See http://rupweb.github.io/password-generator/ 

### Assuming Jest installed
If not see Readme at https://github.com/rupweb/console-finances 

### Setup VSCode tests
It can be tricky to setup VSCode tests with document elements because of differences in NODE and JSDOM  
You will probably need a `launch.json` in your VSCode root directory .vscode folder  
You may need a `jest.config.js` file in your VSCode root directory  
For example to run step through debugging your launch.json can include the below

    {
      "type": "node-terminal",
      "name": "Run Script: password-generator test",
      "request": "launch",
      "command": "npm run test",
      "cwd": "${workspaceFolder}\\password-generator"
    }

Then click the `Run and Debug` menu and select `Run Script: password-generator test` 

Your test file may need to use the jsdom test environment instead of node. In the file at the top see:

    /**
     * @jest-environment jsdom
     */

### ES6 import / export syntax

To share variables and functions between source code files:

    ES6 uses `import` and `from` and `export { a, b, c}` 
    Jest uses `const` and `require` and `module.exports = { a, b, c }` 

If you get a syntax error in your Jest tests `SyntaxError: Cannot use import statement outside a module`  
Or if you use (old version) Node syntax a console log error in the browser `Uncaught ReferenceError: module is not defined`  
This is about (old version) Node syntax on the server versus ES6 syntax in the browser (client).  

I've gone with the ES6 syntax so it shows in the browser and allows `npm run test` local tests.
That meant my Jest tests were giving error `SyntaxError: Cannot use import statement outside a module`

To fix that I had to add a `babel.config.cjs` file to my VS Code root dir  
per https://stackoverflow.com/questions/74289336/jest-node-js-syntaxerror-cannot-use-import-statement-outside-a-module

Another solution is to use a bundler like `webpack`.

When using modular code you also need to put  
    `<script type="module" src="js/script.js"></script>`  
In your HTML file to tell the browser.