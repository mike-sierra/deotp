---

## Try It

Open the interactive emulator and try playing with some of this
syntax:

    $ python
    >>>

---

## Arrays

An _array_ is a variable that stores a _list_ or _sequence_ of other values. Unlike scalars, arrays are _plural_, and contain more than one value.

This defines an array of five string values:

    >>> arr = ['liam', 'niall', 'zayn', 'harry', 'louie']

Arrays can contain all different kinds of value:

    >>> arr = [1, 5, 3, 4, 2]
    >>> arr = ['louie', 24, True, None, 0.77]

---

## Building Arrays from Strings

A common way to build an array is to _split_ a string into pieces. By default, the `split()` method segments a string and separates it wherever whitespace characters appear:

    >>> str = "liam harry louie niall"
    >>> arr = str.split()
    >>> arr
    ['liam', 'harry', 'louie', 'niall']

---

## Building Arrays from Strings (cont'd)

If you supply `split()` with a string argument, that's the sequence of characters to use as _delimiters_ between array members:

    >>> str = "liam, harry, louie, niall"
    >>> arr = str.split(', ')
    >>> arr
    ['liam', 'harry', 'louie', 'niall']

This splits _tab-delimited_ text:

    >>> str = "liam\tharry\tlouie\tniall"
    >>> arr = str.split('\t')

---

## Building Arrays from Strings (cont'd)

The `splitlines()` method works much like `split('\n')`, splitting at line breaks:

    >>> str = """
    ... liam
    ... harry
    ... louie
    ... niall
    ... """
    >>> arr = str.splitlines()
    >>> arr
    ['', 'liam', 'harry', 'louie', 'niall']

Try `str.strip().splitlines()` to keep out the empty string.

---

## Building Arrays from Files

Earlier you saw how you can `read()` an entire file into a single string. This splits the file into an array, one member per line:

    >>> file = open('arrays.md')
    >>> lines = file.readlines()
    >>> lines
    ['---\n', '\n', '## Introduction\n', '\n', 'In this unit you learn:\n',
    '\n', '- How to store a series of values\n', '\n', '- How to access
    members of the series\n', '\n', '- How to modify the series\n', '\n',
    '- How to split a file into a series of lines\n']

This is actually a bit more efficient: `lines = list(file)`

---

## Converting Arrays to Strings

Once you have an array, you can use `join()` to make a string out of it. You call the method from whatever string you want to glue the array together with:


    >>> arr = ['liam', 'harry', 'louie', 'niall']
    >>> glue = ', '
    >>> str = glue.join(arr)
    >>> str
    'liam, harry, louie, niall'

If `glue` is empty (`''`), the result is `liamharrylouieniall`.

---

## Array Length

The `len()` method tells you how many elements are in the array:

    >>> arr = ['liam', 'niall', 'zayn', 'harry', 'louie']
    >>> len(arr)
    5

This initializes an empty array. Empty arrays evaluate as `False`:

    >>> arr = []
    >>> len(arr)
    0
    >>> if not arr: arr = ['default value']

---

## Array Indexes

You use integer _indexes_ to refer to specific elements within the array. Indexes are _zero-based_, so that the first element is numbered `0`, not `1`:

    >>> arr = ['liam', 'niall', 'zayn', 'harry', 'louie']
    >>> arr[0]
    'liam'
    >>> arr[1]
    'niall'
    >>> arr[2]
    'zayn'

---

## Array Indexes (cont'd)

Negative indexes refer to elements at the end of the array:

    >>> arr = ['liam', 'niall', 'zayn', 'harry', 'louie']
    >>> arr[-1]
    'louie'
    >>> arr[-2]
    'harry'

The `arr[-1]` index is a shorthand for this integer expression:

    arr[ len(arr) - 1 ]

Anything that evaluates to an integer is a valid index.

---

## Out-of-Range Indexes

Python does not allow you to refer to array elements that don't yet exist:

    >>> arr = ['liam', 'niall', 'harry', 'louie']
    >>> arr[4] = 'zayn'
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: list assignment index out of range

The same is true here for `arr[-5]`, which would precede the array's first element.

---

## Adding Elements

The `append()` method adds an element to the end of an array:

    >>> arr = ['liam', 'niall', 'harry', 'louie']
    >>> arr.append('zayn')
    >>> arr
    ['liam', 'niall', 'harry', 'louie', 'zayn']

---

## Adding Elements (cont'd)

The `insert()` method adds an element at any index position within the array. The first argument is where in the array to add it, and the second is the thing to add.

    >>> arr = ['liam', 'niall', 'harry', 'louie']
    >>> arr.insert(0, 'zayn')
    >>> arr
    ['zayn', 'liam', 'niall', 'harry', 'louie']

In this case, the `0` index means insert it to the start of the array.

---

## Removing Elements

The `pop()` method removes the last element from the array and returns it:

    >>> arr = ['liam', 'niall', 'harry', 'louie', 'zayn']
    >>> removed = arr.pop()
    >>> arr
    ['liam', 'niall', 'harry', 'louie']
    >>> removed
    'zayn'

---

## Removing Elements (cont'd)

You can also use `pop()` to remove an element from anywhere within the array:

    >>> arr = ['zayn', 'liam', 'niall', 'harry', 'louie']
    >>> removed = arr.pop(0)
    >>> arr = ['liam', 'niall', 'zayn', 'harry', 'louie']
    >>> removed = arr.pop(2)

By default, `pop()` is the same as `pop(-1)`, referring to the last element in the array.

---

## Removing Elements (cont'd)

If you know an element is present anywhere in the array, you can simply `remove()` it:

    >>> arr = ['liam', 'niall', 'zayn', 'harry', 'louie']
    >>> arr.remove('zayn')
    >>> arr
    ['liam', 'niall', 'harry', 'louie']

Trying to remove an element that's not in the array yields an error:

    >>> arr.remove('pete')
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: list.remove(x): x not in list

---

## Array Membership

An `in` test allows you to test whether a specific element appears anywhere within the array:

    arr = ['liam', 'niall', 'zayn', 'harry', 'louie']
    member = 'zayn'
    if member in arr:
        arr.remove(member)

---

## Arrays of Arrays

Adding one array to another is not straightforward.

    >>> rock_stars = ['john', 'paul', 'george', 'ringo']
    >>> more_rock_stars = ['mick', 'keith', 'bill', 'charlie']
    >>> rock_stars.append(more_rock_stars)
    >>> rock_stars
    ['john', 'paul', 'george', 'ringo', ['mick', 'keith', 'bill', 'charlie']]

The array now contains five elements, the last of which is itself a nested array that contains four elements. The `append()` works with the array object itself, not its contents.

---

## Arrays of Arrays (cont'd)

To access individual elements within nested arrays, you chain together index expressions for each level, or _dimension_ of data:

    >>> rock_stars
    [
      'john', 'paul', 'george', 'ringo',
      [
         'mick', 'keith', 'bill', 'charlie'
      ]
    ]
    >>> rock_stars[-1][0]
    'mick'
    >>> rock_stars[-1][-1]
    'charlie'

---

## Extend vs. Append

To splice the contents of one array to another rather than the array object itself, use the `extend()` method:

    >>> rock_stars = ['john', 'paul', 'george', 'ringo']
    >>> more_rock_stars = ['mick', 'keith', 'bill', 'charlie']
    >>> rock_stars.extend(more_rock_stars)
    >>> rock_stars
    ['john', 'paul', 'george', 'ringo', 'mick', 'keith', 'bill', 'charlie']

This keeps the resulting array _flat_, or _one-dimensional_.

---

## Extend vs. Append (cont'd)

When working on a pair of arrays, the `+` operator works the same as `extend()`:

    >>> arr1 = ['john', 'george']
    >>> arr2 = ['paul', 'ringo']
    >>> arr1 + arr2
    ['john', 'george', 'paul', 'ringo']

You can also use the `+=` assignment operator:

    >>> rock_stars = ['john', 'paul', 'george', 'ringo']
    >>> more_rock_stars = ['mick', 'keith', 'bill', 'charlie']
    >>> rock_stars += more_rock_stars
    >>> rock_stars
    ['john', 'paul', 'george', 'ringo', 'mick', 'keith', 'bill', 'charlie']

---

## Extend vs. Append (cont'd)

The `*` operator repeats an array:

    >>> arr = [0, 1, 2, 3, 4]
    >>> repeated = arr * 2
    >>> repeated
    [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

Or:

    >>> arr *= 2

---

## Reverse

Like `pop()`, `append()` and `extend()`, the `reverse()` method modifies the array in place:

    >>> rock_stars
    ['john', 'paul', 'george', 'ringo', 'mick', 'keith', 'bill', 'charlie']
    >>> rock_stars.reverse()
    >>> rock_stars
    ['charlie', 'bill', 'keith', 'mick', 'ringo', 'george', 'paul', 'john']

It simply flips the array's original sequence.

---

## Sort

The `sort()` method rearranges strings in ASCII order, and numbers in numeric order:

    >>> rock_stars
    ['charlie', 'bill', 'keith', 'mick', 'ringo', 'george', 'paul', 'john']
    >>> rock_stars.sort()
    >>> rock_stars
    ['bill', 'charlie', 'george', 'john', 'keith', 'mick', 'paul', 'ringo']

---

## Reversed, Sorted

You call `reverse()` and `sort()` directly from the array.  These alternatives return a separate array and do _not_ modify the original:

    >>> rock_stars = ['charlie', 'bill', 'keith', 'mick', 'ringo', 'george', 'paul', 'john']
    >>> rock_stars_sorted = sorted(rock_stars)
    >>> rock_stars_sorted
    ['bill', 'charlie', 'george', 'john', 'keith', 'mick', 'paul', 'ringo']
    >>> rock_stars
    ['charlie', 'bill', 'keith', 'mick', 'ringo', 'george', 'paul', 'john']

---

## Minimum/Maximum Values

The `min()` and `max()` methods tell you which of the array's values would sort lowest and highest:

    >>> rock_stars = ['charlie', 'bill', 'keith', 'mick', 'ringo', 'george', 'paul', 'john']
    >>> min(rock_stars)
    'bill'
    >>> max(rock_stars)
    'ringo'

---

## Slices

You may sometimes need to refer to sequences of values within an array. These are called _slices_.

The syntax specifies two index values as offsets: from _here_ to _there_. This specifies a two-element sequence starting at the second element:

    >>> arr = ['liam', 'niall', 'louie', 'harry']
    >>> arr[1:3]
    ['niall', 'louie']

---

## Slices (cont'd)

You can use any integer expression to define a slice. This returns the element at any index point within the array, along with its two surrounding elements:

    >>> arr = ['liam', 'niall', 'zayn', 'louie', 'harry']
    >>> ix = 2
    >>> arr[ ix-1 : ix+2 ]
    ['niall', 'zayn', 'louie']

---

## Slices (cont'd)

Slice syntax is more lenient when referencing out-of-range index offsets:

    >>> arr = ['liam', 'niall', 'zayn', 'louie', 'harry']
    >>> ix = 5
    >>> arr[ ix-1 : ix+2 ]
    ['harry']

---

## Slices (cont'd)

Leaving out either of the values allows to select sequences from the start or end of the array:

    >>> arr = ['liam', 'niall', 'zayn', 'louie', 'harry']
    # everything except the last two elements:
    >>> arr[:-2]
    ['liam', 'niall', 'zayn']
    # everything past the first two elements:
    >>> arr2 = arr[2:]
    >>> arr2
    ['zayn', 'louie', 'harry']

---

## Splicing

Assigning arrays to slices allows you to replace sequences within the larger array. This replaces the middle three values:

    >>> arr = ['niall', 'louie', 'zayn', 'harry', 'liam']
    >>> ducks = ['huey', 'dewey', 'louie']
    >>> arr[1:4] = ducks
    >>> arr
    ['niall', 'huey', 'dewey', 'louie', 'liam']

---

## Splicing (cont'd)

To cut a sequence from within an array, you need to assign a slice to a different array, then assign an empty array to the slice:

    >>> arr = ['niall', 'louie', 'zayn', 'harry', 'liam']
    >>> removed = arr[1:3]
    >>> arr[1:3] = []
    >>> removed
    ['louie', 'zayn']
    >>> arr
    ['niall', 'harry', 'liam']

---

## Splicing (cont'd)

The array you splice in can be a different length than the slice you're replacing. This replaces the third element with a three-element sequence:

    >>> arr = ['niall', 'louie', 'zayn', 'harry', 'liam']
    >>> ducks = ['huey', 'dewey', 'louie']
    >>> arr[2:3] = ducks
    >>> arr
    ['niall', 'louie', 'huey', 'dewey', 'louie', 'harry', 'liam']

---

## String Indexes and Slices

Strings are also sequences, and you can use the same index and slice syntax to extract substrings. Unlike arrays, it's read-only:

    >>> text = "harry louie zayn liam niall"
    >>> text[10]
    'e'
    >>> text[5:15]
    ' louie zay'

If you `find()` text within a string, it returns the index offset:

    >>> text.find('louie')
    6

---

## Array vs. Scalar Identity

Array variables are different from scalars in a key way. When you assign a scalar value to different variables, they both refer to the exact same object:

    >>> foo = 1
    >>> bar = 1
    >>> foo is bar
    True

---

## Array vs. Scalar Identity (cont'd)

Unlike strings and numbers, each array is inherently _mutable_: modifiable in place. When you assign an array value, you're creating an _instance_ of a type of object, rather than a single fixed object:

    >>> foo = [1,2,3]
    >>> bar = [1,2,3]
    >>> foo is bar
    False
    >>> foo.append(4)
    >>> foo
    [1, 2, 3, 4]
    >>> bar
    [1, 2, 3]

---

## Array vs. Scalar Identity (cont'd)

However, when you assign one array variable to another, they both reference the same array object. These are known as _aliases_:

    >>> long_array_variable_name = [1,2,3]
    >>> short = long_array_variable_name
    >>> long_array_variable_name is short
    True
    >>> short.append(4)
    >>> short
    [1, 2, 3, 4]
    >>> long_array_variable_name
    [1, 2, 3, 4]

---

## Array vs. Scalar Identity (cont'd)

Scalar variables don't work the same way:

    >>> foo = 1
    >>> bar = foo
    >>> foo = 2
    >>> foo, bar
    (2, 1)

---

## Array vs. Scalar Identity (cont'd)

To clarify matters, the `id()` method provides an integer that represents a unique address for each object in memory:

    >>> foo = [1,2,3]
    >>> bar = foo[:]
    >>> id(foo)
    4561805680
    >>> id(bar)
    4562049000

The `arr[:]` slice expression returns a _shallow copy_ of an array's values, not the array object itself.

---

## Tuples

Finally, Python implements a special data structure called a _tuple_ that behaves like an array, but is fixed-length and read-only. Python uses it when expressing sequences of values such as these:

    >>> quotient, remainder = divmod(11, 3)

You can access tuple elements by index, but can't assign to them:

    >>> read_only = divmod(11, 3)
    >>> read_only
    (3, 2)
    >>> read_only[0]
    3

