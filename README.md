# Javascript Type Coercion Bug
This repository demonstrates a common Javascript bug caused by type coercion. The function `foo` is expected to add two numbers. However, due to Javascript's loose typing, when a number and a string are passed as arguments, Javascript converts the number to a string and performs string concatenation instead of numerical addition. 

## Bug
The bug lies in the function `foo`.  When called with a number and a string, it concatenates them instead of performing addition.

## Solution
The solution involves explicitly converting both arguments to numbers before performing the addition.  This ensures consistent behavior regardless of the input types.