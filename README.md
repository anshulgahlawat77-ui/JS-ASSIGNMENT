JS-Assignment
Student Name: Anshul
Enrollement No:SAU/FET/BTECH(CSE)/2025/048

Course: CSE 106 - Fundamentals of Web Design 


Assignment: Assignment 4 

How I Solved the Problems
Question 1: Digit Gatekeeper 

I used a for loop to go through all numbers from L to R. For every number, I checked if it's divisible by K. Then I turned the number into a string so I could check each digit one by one to make sure there are no zeros  and to add up the sum. Finally, I used another small loop to check if that sum is a prime number.


Question 2: Roll-Seed Lock 

I made a loop that runs exactly 3 times. Inside, I used if and else to check if the number is even or odd and changed it using the seed value. After the loop, I checked if the final number is between 100 and 999 and if the middle digit matches the seed.

Question 3: Mirror Corridor 

I started a loop from X=0 up to 10,000. For every X, I added it to N. I checked if this new number is a palindrome by reversing it and comparing it to the original. I also checked if it’s divisible by K. If I found it, I stopped the loop and printed the answer.


Question 4: Fare Calculator 

I followed the steps one by one. First, I calculated the basic fare. Then I added extra charges if the distance was more than 10 or if the ride was late. I used the seed value to either add or subtract a bit more. At the end, I used a math trick to round the result up to the next multiple of 5.


Question 5: Skipping Numbers 

I used a while loop that keeps adding numbers starting from 1. I used an if statement with the modulo operator (%) to skip any numbers divisible by seed . The loop stops as soon as the total sum reaches or passes N.

Question 6: Contest Score Judge 

I first calculated the score using the 3a+b−2c formula. Then I checked if the score was less than 0 to reset it to zero. If the total questions were more than 50, I took away 10 points. Finally, I checked if the score was at least 60 to see if it’s a PASS or FAIL.


Complexity
Q1: O(N) because of the loop through the range.

Q2: O(1) since it only loops 3 times.

Q3: O(10000) because it checks up to 10,000 values of X.

Q4: O(1) because it's just basic math.

Q5: O(m) as it loops until the sum is reached.

Q6: O(1) as it's just a few simple checks.