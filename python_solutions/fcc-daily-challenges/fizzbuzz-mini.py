def fizz_buzz_mini(n):
   if int(n) % 3 == 0 and int(n)%5 ==0:
      return "FizzBuzz"
   elif int(n) % 5 == 0:
      return "Buzz"
   elif int(n) % 3 == 0:
      return "Fizz"
   else: 
       return str(n)
       
    