# Written by ezweber#4540
# 4-11-2022

while True:
    try:
        num1 = int(input("Enter your first number: "))
        num2 = int(input("Enter your second number: "))
        break  # Exit the loop once both inputs are valid integers
    except ValueError:
        print("Make sure to enter an int.\n")

operation = input('Enter "+", "-", "*", "/", or "%": ')

match operation:
    case "+":
        print(num1 + num2)
    case "-":
        print(num1 - num2)
    case "*":
        print(num1 * num2)
    case "/" if num2 == 0:
        print("Error: Cannot divide by zero.")
    case "/":
        print(num1 / num2)
    case "%" if num2 == 0:
        print("Error: Cannot modulo by zero.")
    case "%":
        print(num1 % num2)
    case _:  # '_' is the standard wildcard in Python match statements
        print("Please enter a valid operator.")
