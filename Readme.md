# Budget Calculator - Montra
Budget Calculator is a web application that allows users to track their income and expenses. It allows users to add new income or expense items, view their current balance, and filter their items by category. The app uses local storage to persist data between sessions.
[DEMO LINK](https://ivxvi.github.io/Money-tracker/)

## Technologies Used
React
TypeScript
SCSS
Local storage

## Installation
To install the app, follow these steps:

Clone this repository: git clone https://github.com/your-username/Money-tracker.git
Navigate to the project folder: cd money-tracker
Install dependencies: npm install
Start the app: npm start
Open the app in your browser at http://localhost:3000

## Usage
The app has two modes: user amount setting mode and budget tracking mode.

User Amount Setting Mode
When you first launch the app, you will be prompted to set your total budget for the month. Enter the amount in the input field and click the "Save" button. The app will save your budget in local storage and switch to budget tracking mode.

Budget Tracking Mode
In budget tracking mode, you can add new income or expense items, view your current balance, and filter your items by category.

## Adding New Items
To add a new item, enter the item title and amount in the input fields in the "Add Item" section and click the "Add Income" or "Add Expense" button, depending on the item type.

## Viewing Your Current Balance
Your current balance is displayed in the "Current Balance" section. It is calculated as your total income minus your total expenses.

## Filtering Your Items
You can filter your items by category using the "Filter" dropdown in the "Budget Items" section. You can filter by "All", "Incomes", or "Expenses".

## Removing Items
To remove an item, click the "DELETE" button next to the item in the "Budget Items" section.

## Resetting Your Budget
To reset your budget, click the "Reset" button in the "Current Balance" section. This will set your current balance to zero and remove all of your budget items.

## Contributing
If you would like to contribute to the project, follow these steps:

## Fork the repository
Create a new branch: git checkout -b feature/your-feature-name
Make your changes and commit them: git commit -am 'Add some feature'
Push your changes to your fork: git push origin feature/your-feature-name
Submit a pull request
## License
This project is licensed under the MIT License. See the LICENSE file for details.