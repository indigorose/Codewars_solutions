# Find the number of non prime odd numbers for any number of n.

def odd_not_prime(n):
    def is_prime(num):
        if num < 2:
            return False
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True

    numbers = [num for num in range(0, n + 1) if num % 2 != 0]
    non_prime_odd_numbers = [num for num in numbers if not is_prime(num)]
    return len(non_prime_odd_numbers)
