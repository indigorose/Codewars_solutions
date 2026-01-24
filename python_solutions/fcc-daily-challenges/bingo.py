def get_bingo_letter(n):
    match n:
         case n if 1 <= n <= 15:
 		 									return "B"
         case n if 16 <= n <= 30:
 		 									return "I"
         case n if 31 <= n <= 45:
 		 									return "N"
         case n if 46 <= n <= 60:
 		 									return "G"
         case n if 61 <= n <= 75:
 		 									return "O"
   