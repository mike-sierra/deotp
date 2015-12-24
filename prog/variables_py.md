---

## Get Started

Open your interactive editor:

    $ python
    >>>

---

## Assignment

This creates a variable named `foo` and _assigns_ it an integer value:

    >>> foo = 8

__NOTE__: The `=` operator does _not_ mean _equals to_.

It means: _evaluate the thing on the right and put the value into the thing on the left_.

---

## Assignment (cont'd)

Assign the value of expressions:

    >>> foo = 4 + 4

This evaluates in this order:

    >>> (foo = (4 + 4))

You can inspect the value by expressing the name of the variable:

    >>> foo
    8

---

## Using Variables

You can apply the same set of operations to variables as to the fixed values they represent:

    >>> foo = 8; bar = 3
    >>> foo + bar
    11

Note above the two assignment _statements_ that ordinarily occupy separate lines. You can join them on the same line by separating them with a semicolon.

---

## Variable Names

Variable names are _case-sensitive_:

    >>> foo = 1
    >>> Foo = 2
    >>> foo
    1

They can include any alphanumeric or underscore (`_`) character, but _must_ start with a letter.

Not required, but conventionally they're _snake\_case_, not _camelCase_.

---

## Variable Names (cont'd)

You're prevented from using certain core _reserved words_ as variable names:

    >>> def = 4
      File "<stdin>", line 1
        def = 4
            ^
    SyntaxError: invalid syntax

---

## Variable Names (cont'd)

However, nothing prevents you for mistakingly clobbering more extraneous function or module names:

    >>> round = 4             # BAD!
    >>> round(4.3)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'int' object is not callable

    >>> import math
    >>> math = 8              # BAD!
    >>> pi = math.pi
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'int' object has no attribute 'pi'

---

## Declarations

Other languages may require or allow you to initially _declare_ the name of variables. Python doesn't do that. The act of assigning declares the variable.

This may lead to bugs:

    >>> foo = 1

...then a typoe later in the code...

    >>> fool = 2

---

## Declarations (cont'd)

There are ways to avoid these bugs, one of which initially is to inspect your local namespace for unexpected items:

    >>> dir()
    ['__builtins__', '__doc__', '__name__', '__package__', 'foo', 'fool']

Never mind the `__`-prefixed items for now.

---

## Multiple Assignment

You can assign an ordered set of values to a set of variables:

    >>> foo, bar = 1, 2

This is useful for functions that return more than one value, such as `divmod()` which combines the division (`/`) and modulo (`%`) operators:

    >>> quotient, remainder = divmod(16, 3)

---

## Multiple Assignment (cont'd)

The number of variables and values need to correspond:

    >>> quotient, remainder, unexpected = divmod(16, 3)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: need more than 2 values to unpack

However, it's possible to assign a sequence of more than one value to a single variable. More about this later:

    >>> bug = divmod(16, 3)
    >>> bug
    (5, 1)

---

## Reassignment

As an application executes, it's common to change the value of a variable based on its previous value. Here's an inefficient way to do it that uses a temporary variable:

    >>> foo = 1
    >>> temp = foo + 1
    >>> foo = temp
    >>> foo
    2

---

## Reassignment (cont'd)

Here's a better way to do it, one that doesn't require a second variable:

    >>> foo = 1
    >>> foo = foo + 1

That takes the current value of `foo`, adds `1` to it, then assigns the result back to `foo`. Seeing the expression parse may clarify:

    >>> foo = (foo + 1)

---

## Assignment Operators

It's common to increment numbers in this way when counting things, so there's a shorthand:

    >>> foo += 1

Note that some operations (such as `foo + 1`) _return_ a value that you have to assign somewhere. Others like this modify variables _in place_.

---

## Assignment Operators (cont'd)

Assignment operators correspond to each arithmetic operator:

    >>> foo, bar = 10, 3
    >>> foo += bar           # Add 3; foo is now 13
    >>> foo -= bar           # Subtract 3; now 10
    >>> foo *= bar           # Multiply by 3; now 30
    >>> foo /= bar           # Divide by 3; now 10
    >>> foo **= bar          # Exponentiate; now 1000

__NOTE__: Python doesn't support _increment_/_decrement_ expressions such as `foo++` or `foo--`; substitute `foo+=1` or `foo-=1`.

---

## Chained Assignments

You can put the same value into more than one variable at a time:

    >>> bar = foo = 8

Both variables separately reference the same _value_, but the variables themselves are not the same thing:

    >>> bar = 4
    >>> bar
    4
    >>> foo
    8

<!--

- $sigil

-->
