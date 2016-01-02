---

## Try It

For this unit, edit a Python script file in one window...

    $ touch test.py
    $ open -e test.py   # or use the text editor of your choice

...and run it in another:

    $ python test.py

---

## Truth

The programs you write become powerful when they respond differently to various inputs.  They execute different sections of code based on whether some condition is _true_ or _false_.

There's a special _boolean_ data type for _true_/_false_ values, but you can also check other data types such as numbers and strings for _truth_.

Various `if` and `else` statements behave like switches in a model railroad.  The train only goes down a section of track under certain circumstances.

---

## Truth (cont'd)

Unlike the `=` assignment operator, the `==` operator checks if the values on either side are equivalent:

    foo, bar = 1, 1
    print foo == bar
    True

The expression releases a _boolean_ value of `True`. This is `False`:

    foo, bar = 1, 0
    print foo == bar
    False

---

## Booleans

There are only two boolean values, `True` and `False` (capitalized), but you can assign them to variables:

    are_equal = foo == bar

Variables that contain a single value like this, such as a number, string, or boolean, are known as _scalars_.

---

## if...

You make many decisions by asking `if` something is true:

    if foo == bar:
        print 'values are equal'

The colon at the end of the `if` line marks the start of a _block_ of statements to execute if the values are equivalent. In this case, there is only a single `print` statement within the block.

The line with the `print` statement _must_ be indented.

---

## if/else

An `else` clause executes another block of code if the expression you're testing evaluates as `False`:

    if foo == bar:
        print 'values are equal'
    else:
        print 'values are not equal'

---

## if/else (cont'd)

The `!=` operator means _not equal_, and returns the exact reverse of the `==` operator:

    if foo != bar:
        print 'values are not equal'
    else:
        print 'values are equal'

---

## if/elif/else

You can add more `elif` tests before the final `else`. The `<` and `>` test for less-than and greater-than:

    if foo == bar:
        print "values are equal"
    elif foo < bar:
        print "{0} is less than {1}".format(foo, bar)
    elif foo > bar:
        print "{0} is greater than {1}".format(foo, bar)
    else:
        print "this block can't possibly execute"

Also try: `<=` (less than or equal), `>=` (greater than or equal)

---

## if/elif/else (cont'd)

If there's only a single statement within the block, it can be merged on the same line as the `if`, `elif`, or `else`:

    if foo == bar: print "values are equal"
    elif foo < bar: print "{0} is less than {1}".format(foo, bar)
    elif foo > bar: print "{0} is greater than {1}".format(foo, bar)
    else: print "this block can't possibly execute"

However, this can make it harder to read.

---

## not...

Adding `not` before a test reverses it, flipping `True` and `False`:

    if not foo == bar:
        "values are not equal"

Here's how it parses. If the inner expression is `False`, the `not` makes the outer expression `True`:

    if (not (foo == bar)):

(It works the same as `foo != bar`, but is more complicated.)

---

## Testing String Prefixes and Suffixes

Many string methods return boolean values. These check if a string is prefixed or suffixed with a substring.

Is a filename a Python script?

    filename.endswith('.py')

This matches both `README.txt` and `README.md`:

    filename.startswith('README')

---

## in...

`in` checks if a substring appears anywhere within a string:

    if 'niall' in user_input.lower():
        print "You chose Niall!"

This is similar to `user_input.find('niall')`, but doesn't tell you where the match appears within the string.

---

## More String Tests

These check what kind of characters are in the string:

    text = "1D"
    text.isspace() # False: does it contain only whitespace characters?
    text.isalpha() # False: does it contain only letters?
    text.isdigit() # False: does it contain only digits?
    text.isalnum() # True: does it contain a mix of letters and digits?

These ignore any characters that aren't letters:

    text.islower() # False: are all its letters lowercase?
    text.isupper() # True: are all its letters uppercase?

---

## Comparing Strings

The `==` and `!=` operators can also compare strings for equivalence:

    if user_input.lower() == 'louie':
        print "You chose Louie!"

    if user_input.lower() != 'louie':
        print "Why didn't you choose Louie?"

---

## Basic String Sorting

Greater-than or less-than tests allow you to _sort_ text. Unlike numbers, strings sort from left to right in [ASCII](http://www.asciitable.com) order:

    foo, bar = 9, 10
    print foo < bar     # True, because the number 10 is greater than 9

    foo, bar = "9", "10"
    print foo < bar     # False, because '9' sorts higher than '1'

Also, all uppercase letters sort lower than lowercase letters:

    member1, member2 = "Liam", "harry"
    member1.lower() > member2.lower() # True, because 'l' comes after 'h'
    member1 > member2                 # False, because 'L' comes before 'H'


---

## Example: Multiple Choice Input

Look again at the code which prompted for an integer:

    prompt = """Who is your favorite 1D member?
    1: Harry
    2: Liam
    3: Louie
    4: Niall
    > """
    user_input = int( raw_input(prompt) )

---

## Catching Unexpected Cases

It's often wise to check for unexpected _fallback_ cases. This releases a message to yourself, then imports the `sys` module whose `exit()` method terminates the program.

    if user_input == 1:   name = 'Harry Stiles'
    elif user_input == 2: name = 'Liam Custardbreath'
    elif user_input == 3: name = 'Louie Tomlinson'
    elif user_input == 4: name = 'Niall Horan'
    else:
        print "BUG: uncaught case when testing user input"
        import sys
        sys.exit()

---

## Error Checking

It's also often wise to check for errors up front, separately from the main code. In this case, we expect an integer between `1` and `4`:

    import sys
    if user_input <= 0:
        print "Your number is too low!"
        sys.exit()
    elif user_input > 4:
        print "Your number is too high!"
        sys.exit()

Any code following this test can assume the choice is within range.

---

## or...

There's a better way to express the last two tests, that reduces the amount of repeated code:

    import sys
    if user_input <= 0 or user_input > 4:
        print "Your number is out of range!"
        sys.exit()

The entire expression is `True` if either expression on either side of the `or` is also true. If the first is true, the second doesn't evaluate:

    ( (user_input <= 0) or (user_input > 4) )

---

## and...

The `and` operator works the same, but requires both expressions to be true:

    user_input > 0 and user_input < 5

Chaining together a series of comparison operators offers a more concise way to express it:

    0 < user_input < 5

---

## Compact Logic

Adding `not` checks for out-of-range responses:

    if not 0 < user_input < 5:
        print "Your number is out of range!"
        sys.exit()

- successful input must be greater than `0`
- successful input must also be less than `5`
- for the error to run, input must _not_ meet successful criteria

---

## Wider Truth

While comparison operators all return boolean values, you can also test the truth of other kinds of value, such as numbers and strings.

Suppose ratings must be from `1` to `10`, and a default value of `0` means the user hasn't yet provided a rating.

    rating = 0
    if not rating:
        print "You didn't provide a rating yet"

Any numeric expression that evaluates to zero is `False`.

---

## Wider Truth (cont'd)

Any empty string value is also `False`. Suppose you prompt users for a string:

    prompt = """Who's your favorite 1D member: Liam, Niall, Harry, or Louie?
    > """
    user_input = raw_input()

If users type nothing but a carriage return, it results in an empty string (`""`). This tests for that case:

    if not user_input:
        print "You didn't respond!"

---

## and/or as Shorthand

You can use `and`/`or` not just to perform tests, but to execute code. This exits if the user enters anything besides digits:

    user_input = raw_input(prompt)
    user_input.isdigit() or sys.exit()

You can also use `or` to set a default value in case there's missing input:

    favorite = user_input or "Harry Stiles"

---

## and/or as Shorthand (cont'd)

It works much the same way with `and`. The second expression executes if the first expression evaluates as `True`:

    user_input <= 0 and sys.exit()

This is equivalent to:

    if user_input <= 0: sys.exit()

---

## and/or as Shorthand (cont'd)

All `and`/`or` expressions can be restated using `if`/`not` syntax. Compare how these are phrased:

- Be nice to me and I will be your friend
- If you are nice to me, I will be your friend
- Be nice to me or I will be your enemy
- If you are not nice to me, I will be your enemy

---

## is...

An `is` comparison checks if two objects are exactly the same thing, not if they evaluate the same. In this case, you're comparing an `int` and a `float` type:

    foo = 1
    bar = 1.0
    print foo == bar    # True
    print foo is bar    # False

It compares objects' underlying _identity_.

---

## is (cont'd)

When not called as methods, you can compare core _type objects_ such as `int`, `float`, and `str` to `type()`-checked values:

    >>> float
    <type 'float'>
    >>> int_value, float_value, str_value = 1, 1.0, "1"
    >>> type(int_value) is int
    True
    >>> type(float_value) is float
    True
    >>> type(str_value) is str
    True

---

## None

There's also a special value called `None` that indicates _lack of a value_. You may use it to _initialize_ a default value before resetting it:

    user_input = None

It also evaluates as `False`, but you typically test if values _exist_ separately from whether they're _true_:

    if user_input is None:
        print "no value"
    elif not user_input:
        print "evaluates to false"

