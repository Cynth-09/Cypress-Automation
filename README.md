# Description
Hi there, welcome! 
This is a Cypress test script developed to automate a web application developed for a Billable Hours project. 
The project is aimed at helping law firms and professionals manage their billable hours efficiently. Our web and mobile application, backed by a robust API, enables users to upload CSV timesheets and effortlessly generate invoices. With Billable Hours, users can streamline their invoicing process and ensure accurate revenue collection. 

## How to Setup and Run the Test Scripts
**Setting Up Cypress**
*Node.js Installation:*
Ensure you have Node.js installed on your computer. You can download and install Node.js from the official website: https://nodejs.org/
Verify your Node.js installation by opening a command prompt or terminal and running:
node -v
npm -v

*Visual Studio Code Installation:*
Ensure you have Vscode on your computer. You can download and install vscode from the official website: https://code.visualstudio.com/download

*Folder Creation:*
Created a new folder on your computer's desktop interface and named it. Mine was named "CYPRESS_AUTOMATION_CYNTHIA" 

**Installing Package.json file**
On your Vscode, open the folder already created on  desktop interface
Once opened, open a “New Terminal”, and execute the command **“npm -i init”** (to create a package.json file)

**Installing Cypress** 
- To install Cypress, run this command **“npm install cypress –save -dev”** on the same terminal or on a new terminal
- On installation, “node_modules  folder” will be created(it contains all cypress libraries) and a "Package-lock.json file"
- To start the Cypress Test Runner after installation, run this command **“npx cypress open”** (This will launch the Cypress Test Runner UI)
- After starting (or cypress is open), select **e2e Testing** and configure
- Create a new spec file, and name it... Once done, it should look like this *"BillableHours.cy.js"*
- On Vs Code, create all test script in your spec file, but in my case (BillableHours.cy.js)

**Viewing Test Results**
-Once you are done with your test scripts on Vs code, open a new terminal and type *"npx cypress open"*
-Your Test results, including passed and failed tests, will be displayed in the Cypress Test Runner UI.
-You can click on individual test cases to view detailed information, including assertions and any errors encountered.


### Cypress Commands
In the test scripts, I used various Cypress commands to interact with the web application and make assertions. The common commands used include:
- *cy.visit(url)*: Navigate to the specified URL.
- *cy.get(selector)*: Select an element using CSS selectors.
- *cy.click()*: Trigger a click event on the selected element.
- *cy.should('condition', value)*: Assert conditions on an element, such as visibility, text content, attribute values, etc.
- *cy.intercept(method, route)*: Intercept XHR requests to simulate server responses.
- *cy.wait(alias)*: Wait for an XHR request to complete using an alias.


#### Troubleshooting
If you encounter issues with your test scripts, refer to the Cypress documentation for more information: https://docs.cypress.io/
Ensure that you have the correct project structure and that your test files are placed in the cypress directory.
Make sure your test scripts use the correct URLs and element selectors based on your application's structure.

##### Contributing
I welcome and value your contributions! 
Here are some ways you can get involved:

1. Report Issues: If you come across any issues or bugs while running the Cypress tests, please don't hesitate to report them. Open an issue and provide details about the problem you encountered. Your feedback is crucial in improving the test suite's robustness.

2. Enhance Existing Tests: If you're a developer with Cypress experience, consider enhancing the existing test scripts. Your contributions can help in expanding test coverage and making our test suite more comprehensive.

3. Add New Test Cases: Feel free to contribute by adding new test cases that are relevant to the Billable Hours project. This can help ensure that the application remains reliable and efficient.

4. Suggestions: If you have valuable suggestions for improving our test suite or test strategies, open an issue and share your ideas. Your insights can lead to more effective testing.





