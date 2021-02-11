# Expensify

## Description
This is an expense manager, where user can jot down their daily/weekly/monthly expenses. Some of the features are:  
- Expenses can be filtered out for any range of date
- Expenses can also be sorted on the basis of either date of creation or amount of individual expense 
- Expense searching facility is also there

## Live demo
[Click here to open the live demo](https://expensify---react.herokuapp.com/) 

## Key features
- **Login page:** Here the user have to login with google for using the website

![LoginPage](https://github.com/rajnish1999/Expensify/blob/master/public/images/Login%20page.png)
<br><br>

- **Dashboard:** Here all the expenses are shown. All the filters and sorting method are also listed here only
  - **dashboard showing expenses sorted according to date of creation:**  
  
  ![DBSorteddate](https://github.com/rajnish1999/Expensify/blob/master/public/images/DB_Sort_Date.png)
  <br><br>
  
  - **dashboard showing expenses sorted according to amount of individual expense:**  
  
  ![DBSortedAmount](https://github.com/rajnish1999/Expensify/blob/master/public/images/DB_Sort_Amount.png)
  <br><br>
  
  - **dashboard showing expenses according to the search applied:**  
  
  ![DBSortedText](https://github.com/rajnish1999/Expensify/blob/master/public/images/Search.png)
  <br><br>
  - **dashboard showing expenses according to the date of creation range selected:**  
  
  ![DBFilterDate](https://github.com/rajnish1999/Expensify/blob/master/public/images/DB_Filter_Date.png)
  <br><br>
  
- **Add expense page:** This page provides facility for adding new expenses  

![addPage](https://github.com/rajnish1999/Expensify/blob/master/public/images/Add_Expense.png)
<br><br>

- **Edit expense page:** This page provides the facility of editing individual expense details, and also removing them  

![editPage](https://github.com/rajnish1999/Expensify/blob/master/public/images/Edit_Page.png)
  
## Libraries used
- React JS (Frontend Framework)
- Redux (for state management)
- Firebase (for realtime database and authentication)
- Moment.js: A JavaScript date library for parsing, validating, manipulating, and formatting dates
- react-dates: An easily internationalizable, accessible, mobile-friendly datepicker library for the web
- Numeral.js: A javascript library for formatting and manipulating numbers.


## Bonus Points
- Mobile responsive


## Project Setup
```
  npm install
  npm run dev-server
```




