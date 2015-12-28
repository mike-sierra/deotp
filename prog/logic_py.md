---

## Try It

Open the interactive emulator and try playing with some of this
syntax:

    $ python
    >>>

---

## Booleans

The `==` operator checks if two expressions are equivalent:

    >>> 1 == 1
    True
    >>> 1 == 0
    False

The `True` or `False` values are known as _boolean_ values, after the mathemetician George Boole.

^boolean
^truth

---

## Comparison Operators

Here are all the ways you can compare numbers:

    >>> age_harry = 21
    >>> age_liam = 22
    >>> age_liam == age_harry      # equals?
    False
    >>> age_liam != age_harry      # not equal?
    True
    >>> age_liam > age_harry       # greater than?
    True
    >>> age_liam < age_harry       # less than?
    False
    >>> age_liam >= age_harry      # greater than or equal?
    True
    >>> age_liam <= age_harry      # less than or equal?
    False

^ comparison operator

---

## if

Look again at the code which prompted for an integer:

    prompt = """Who is your favorite 1D member?
    1: Harry
    2: Liam
    3: Louie
    4: Niall
    > """
    user_input = int( raw_input(prompt) )

---

## if (cont'd)

This executes a block of code if the expression is `True`:

    if user_input == 1:
        print 'You chose Harry Stiles'

If the choice is anything but `1`, the `print` block doesn't execute.

Each line within the conditional block _must_ be indented.

---

## if/else

If the initial `if` test fails, an `else` executes a different block.

    if user_input == 1:
        print "You chose Harry Stiles"
    else:
        print "Why didn't you choose Harry Stiles???"

Whenever you create an `if` test, it's a good idea to assume it will fail for some unknown reason, and to pair it with an `else` as a _fallback_.

---

## if/elif/else

Additional `elif` (else-if) tests execute if the first one fails:

    if user_input == 1:
        name = 'Harry Stiles'
    elif user_input == 2:
        name = 'Liam Payne'
    elif user_input == 3:
        name = 'Louie Tomlinson'
    elif user_input == 4:
        name = 'Niall Horan'

---

## Fallback Cases

It's _always_ good to check for unexpected fallback cases. This releases a message to yourself, then imports the `sys` module whose `exit()` method terminates the program.

    if user_input == 1:
        name = 'Harry Stiles'
    # ...
    elif user_input == 4:
        name = 'Niall Horan'
    else:
        print "BUG: uncaught case when testing user input"
        import sys
        sys.exit()

---

## Assigning Booleans

You can assign boolean values to variables, just as you can for numbers or strings:


Variables like these that contain a single value are known as _scalars_.

---

## And/Or ...

- foo and bar
- foo or bar
- foo and not bar

- foo > bar > 10

---

## Truth

...

---

## Unless ...

- if not / else

---

## Strings ...

'foo' in 'bar'
'bar' in 'fubar'

---

## Strings ...

    >>> filename.endswith('.md')
    True
    >>> filename.startswith('foo')
    True

---

## Existence ...

- foo = True
- foo = False
- foo = None
- _null_
- _existence_

---

## Is-ness ...

- 1 == 1.0
- 1 is 1.0
- foo is None
- foo is not None

- foo is bar # True
- id(foo); id(bar)
- bar = 2
- foo is bar # False

---

## Try/Except

...

<!--

>>> o = 'foo'
>>> type(o) is str
True
>>> o = 3.0
>>> type(o) is int
False
>>> o = 3
>>> type(o) is int
True

-->


