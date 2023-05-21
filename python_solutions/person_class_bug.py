# Person Class Bug
class Person:

    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.full_name = first_name + " " + last_name

# The original code does not allow access to the person age and full name instance.
# Refactor to access person age parameter and full name.
