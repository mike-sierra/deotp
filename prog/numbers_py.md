---

## Try It

Open the interactive emulator and try playing with some of this
syntax:

    $ python
    >>>

---

## Integers

Type this:

    >>> 7
    7

You've entered a simple _expression_, and the emulator repeats it back to you.

Python supports different _types_ of number. This is an _integer_.

^expression
^type
^integer

---

## Arithmetic

Add or subtract, and see how the expression evaluates:

    >>> 7 + 3
    10
    >>> 7 - 3
    4

The `+` and `-` are some of Python's built-in _operators_.

This works too without the whitespace, but may be harder to read:

    >>> 7+3

^operator

---

## Arithmetic (cont'd)

To multiply, use the `*` operator, _not_ `x`:

    >>> 7 * 3
    21

You can specify negative numbers:

    >>> 7 * -3
    -21

---

## Arithmetic (cont'd)

What happens when you use `/` to divide?

    >>> 7 / 3
    2

What should be `2.33` gets truncated to 2.  Try this instead:

    >>> 7 / 3.0
    2.3333333333333335

When either of the numbers is a _float_ (decimal) type, the result is also a float. Otherwise it stays an integer.

^float

---

## Numeric Types

Python recognizes different _types_ of number, `int` and `float`:

    >>> type(3)
    <type 'int'>
    >>> type(3.0)
    <type 'float'>

The `type()` is a built-in _method_, and what you place inside the parentheses is called an _argument_. Sometimes you _call_ a method with no arguments, but it's always trailed with parentheses: `( )`.

^type
^method
^argument
^calling

---

## Numeric Types (cont'd)

The `int()` and `float()` methods convert from one number type to another. This truncates a floating-point expression to an integer:

    >>> 80 / 3.0
    26.666666666666668
    >>> int(80.0 / 3)
    26

This expresses a truncated integer as floating-point:

    >>> float(80 / 3)
    26.0

---

## More Division

The _modulo_ operator (`%`) tells you how much is left over after dividing one number by another:

    >>> 8 % 3
    2

This truncates quotients, but keeps the number floating-point:

    >>> 8.0 // 3
    2.0

^modulo

---

## Exponents

The `**` operator provides exponentiation, one number to the power of another:

    >>> 8 ** 3
    512

There's a corresponding method that does the same thing, one that takes _two_ arguments, separated from each other with a comma:

    >>> pow(8, 3)

---

## Precedence

You can chain together many operators:

    >>> 3 * 8 + 2
    26

By default, it follows standard mathematical _precedence_. This forces the addition to evaluate before the multiplication:

    >>> 3 * (8 + 2)
    30
    >>> (3 * (8 + 2)) # Same

^precedence

---

## Modules

Many Python methods are available via external _modules_, which you need to _import_ to activate. Once you do, you access the module's component objects through _dot notation_.

    >>> import math
    >>> math.pi
    3.141592653589793

`math.pi` is a simple object _property_, which unlike a method is not followed with parentheses. It's the difference between a noun and a verb.

^module
^import
^dot notation
^property

---

## Namespaces

The `math` module you imported defines its own unique _namespace_. Use `dir()` to find out what methods and properties are available in that namespace, just like listing files in a subdirectory:

    >>> dir(math)
    ['__doc__', '__file__', '__name__', '__package__', 'acos',
      'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil',
      'copysign', 'cos', 'cosh', 'degrees', 'e', 'erf', 'erfc', 'exp',
      'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum',
      'gamma', 'hypot', 'isinf', 'isnan', 'ldexp', 'lgamma', 'log',
      'log10', 'log1p', 'modf', 'pi', 'pow', 'radians', 'sin', 'sinh',
      'sqrt', 'tan', 'tanh', 'trunc']

^namespace

---

## Namespaces (cont'd)

The `dir()` listing doesn't tell you which items are properties and which are methods, but you can _type-check_ methods without calling them:

    >>> type(math.e)
    <type 'float'>
    >>> math.e
    2.718281828459045

    >>> type(math.factorial)
    <type 'builtin_function_or_method'>
    >>> math.factorial(8)
    40320

^type-checking

---

## Floor, Ceiling

Some mathematical functions are available in the main namespace, and others within `math`. These round numbers down or up:

    >>> math.floor(8.6)
    8.0
    >>> math.ceil(8.6)
    9.0

The built-in `round()` method picks the closest whole number:

    >>> round(8.6)
    9.0

---

## Exercise: Pick a Random Number

Pick an integer between 0 and 10. The basic random number generator picks between 0 and 1, which you multiply by 10:

    >>> import random
    >>> random.random()
    0.3994189239450856
    >>> random.random() * 10
    8.743672233775921

---

## Exercise (cont'd)

Now convert the decimal to an integer:

    >>> int( random.random() * 10 )
    3

Repeat it a bunch of times (up-arrow) to see the random results.

There's a problem here. You'll _never_ see it pick the number `10`.

---

## Exercise (cont'd)

Look at the expression carefully:

    >>> int( random.random() * 10 )

The expression inside the parentheses is fine. It generates a floating-point number between 0 and 10.

The problem? The `int()` method truncates it, the same as using `floor()` to always round downward. It happens even if the original random number is `9.9999`.

---

## Exercise (cont'd)

This is your first _bug_. Round the number, _then_ convert to an integer:

    >>> int( round( random.random() * 10 ) )

There will be more bugs. It's a good thing to make mistakes along the way.
