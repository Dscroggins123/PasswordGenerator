# PasswordGenerator

The purpose of this assignment was to use Javascript to  create a random password based on the criteria the user entered.
I achieved this by doing the following steps :
1. Set create arrays for different password criteria . ex. upperCase, lowercase, special symbols
1a. Set empty array to add user's answer var userPassword = []
2. Create prompt variable for password length. (How many characters would you like your password to be)
3. Create confirm variable for each password criteria ex. "Would you like UpperCase characters " True or false
4. Make password length variable into a value ex.  passwordLength = parseInt(passwordLength.value)

5. set my conditions , ex. if confirm === true ) {
    (if confirms are true push character array into userPassword array)
7. made newUserPassword variable = empty string ie. ""
6.  I then created a loop so that I could pull characters from my userPassword array but only to the length of the users desired length

7. added userPassword to NewUserpassword using math.random to pull random characters at length of userPassword
8. appended Final password to html 