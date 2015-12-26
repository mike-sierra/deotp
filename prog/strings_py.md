---

## Get Started

Open your interactive editor:

    $ python
    >>>

---

## Defining a String

A _string_ is a sequence of text, either a single character or as long as you want:

    >>> name = "Liam Payne"
    >>> name
    'Liam Payne'

It uses either single or double quote _delimiters_. They can be can be used interchangeably, as long as the pair matches:

    >>> name = 'Liam Payne'   # not "Liam Payne'

---

## Escape Codes

If you need a literal quote character in the string, precede it with a backslash to _escape_ it, and prevent it from parsing as a delimiter:

    >>> description = 'Liam\'s hair'

You don't need the backslash above if you use double quotes:

    >>> description = "Liam's hair"

You also have to escape literal backslash characters:

    >>> description = "This is a backslash character: \\"

---

## Special Characters

The `\t` code defines a tab character. The emulator repeats the encoded string code back to you, but it interprets when using `print()`:

    >>> one_dir = "Liam\tNiall\tHarry\tLouie"
    >>> one_dir
    'Liam\tNiall\tHarry\tLouie'
    >>> print(one_dir)
    Liam    Niall   Harry   Louie

Use `print()` to output text as part of a command-line script, rather than inspecting it in the emulator.

---

## Special Characters (cont'd)

The `\n` code defines a linebreak:

    >>> one_dir = 'Liam\nNiall\nHarry\nLouie'
    >>> print one_dir
    Liam
    Niall
    Harry
    Louie

__NOTE__: The `print()` method doesn't require parentheses.

---

## Long Strings

Strings can be very long, but you can express them across different lines by placing a backslash at the end of each line:

    text = "Payne is known as one of the principal writers in One \
    Direction, credited for co-writing more than half of the songs \
    on the band's third and fourth album."

The result does _not_ contain any linebreaks.

Try this in a Python script _file_, where it's good form to keep lines under 80 characters long, the width of most editor's windows.

---

## Long Strings (cont'd)

Here's another way to capture long strings:

    text = '''
    Payne is known as one of the principal writers in One Direction,
    credited for co-writing more than half of the songs on the
    band's third and fourth album.
    '''

Using triple quotes means you never have to worry about single quotes in the text. But the result features embedded linebreaks:

    "\nPayne is known as one of the principal writers in One
    Direction,\ncredited for co-writing more than half of the songs on
    the\nband's third and fourth album.\n"

---

## Cleaning Up Whitespace

The `strip()` method removes any extra whitespace characters, but only from the start or end of the string:

    >>> unstripped = "\nstring filled\nwith linebreaks\n\n"
    >>> print len(unstripped)
    25
    >>> stripped = unstripped.strip()
    >>> print len(stripped)
    22

The `len()` method tells you how many characters are in the string, before and after.

---

## Concatenation

The `+` operator works differently for strings than for numbers. For strings, it means _concatenate_, which means to _splice together_.

    >>> member1 = 'Louie'
    >>> member2 = 'Niall'
    >>> concatenated = member1 + ' and ' + member2
    >>> concatenated
    'Louie and Niall'

---

## String Formatting

If you try to mix strings and numbers around the `+`, Python gets confused and annoyed:

    >>> "Louie Tomlinson is " + 24 + " years old."
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: cannot concatenate 'str' and 'int' objects

You have to use `str()` to convert the number to a string:

    >>> "Louie Tomlinson is " + str(24) + " years old."
    'Louie Tomlinson is 24 years old.'

---

## String Formatting (cont'd)

String _formats_ offer a much more elegant way to mix data types within a string:

    >>> name = 'Louie Tomlinson'
    >>> age = 24
    >>> fmt_str = '{} is {} years old.'
    >>> formatted = fmt_str.format(name, age)
    >>> formatted
    'Louie Tomlinson is 24 years old.'

Each argument to `format()` gets inserted into a `{}` format code, in order.

---

## String Formatting (cont'd)

Specifying numbers, starting at `{0}`, allows you to scramble the order of the values within the formatted string:

    >>> name = 'Louie Tomlinson'
    >>> age = 24
    >>> fmt_str = '{1} is {0} years old.'
    >>> formatted = fmt_str.format(age, name)
    >>> formatted
    'Louie Tomlinson is 24 years old.'

---

## String Formatting (cont'd)

When operating on strings, `%` enables a more complex formatting syntax that often helps when presenting numbers:

    >>> import math
    >>> math.pi
    3.141592653589793
    >>> formatted = "The value of PI is approximately %1.2f." % math.pi
    >>> formatted
    'The value of PI is approximately 3.14.'

See [PyFormat](https://pyformat.info) for details on the syntax.

---

## Changing Case

Various methods return strings with modified _case_:

    >>> name = 'louie tomlinson'
    >>> changed = name.capitalize() # 'Louie tomlinson'
    >>> changed = name.title()      # 'Louie Tomlinson'
    >>> changed = name.upper()      # 'LOUIE TOMLINSON'
    >>> unchanged = name.lower()    # 'louie tomlinson'

---

## Method Chaining

Try this:

    >>> name = 'louie tomlinson'
    >>> changed = name.title().swapcase()
    >>> changed
    'lOUIE tOMLINSON'

Why does this work? The result of `name.title()` is itself a _string_, one on which you can call another method such as `swapcase()`. This technique is called _method chaining_.

---

## Method Chaining (cont'd)

You can call string methods not only on vatiables that contain strings, but directly on literal string values. This shows how the method chain works:

    >>> 'louie tomlinson'.title()
    'Louie Tomlinson'
    >>> 'louie tomlinson'.title().swapcase()
    'lOUIE tOMLINSON'

---

## Justification

The `center()` and `rjust()` methods help place text within printed output that's a fixed number of characters wide. This centers text:

    >>> width = 70
    >>> name = 'louie tomlinson'
    >>> name.center(width)
    '                           louie tomlinson                            '
    >>> name.upper().center(width)
    '                           LOUIE TOMLINSON                            '

---

## Justification (cont'd)

This right-justifies text fields. The Python script on the left produces the output on the right:

    name = 'louie tomlinson'
    age = 24
    width = 40
    print name.upper().center(width) #             LOUIE TOMLINSON
    print 'name:'.upper()            # NAME:
    print name.title().rjust(width)  #                          Louie Tomlinson
    print 'age:'.upper()             # AGE:
    print str(age).rjust(width)      #                                       24

---

## Justification (cont'd)

Special `format()` syntax allows you to mix alignments in-line:

    name = 'louie tomlinson'
    age = 24
    title_fmt = '| {:^51} |'
    field_fmt = '| {:5}:{:>45} |'
    print title_fmt.format(name.upper())
    print field_fmt.format('NAME', name.title())
    print field_fmt.format('AGE', str(age))

---

## Justification (cont'd)

It centers the first string within a 50-character space, then mixes left- and right-aligned strings 5 and 45 characters wide:

    |                  LOUIE TOMLINSON                    |
    | NAME :                              Louie Tomlinson |
    | AGE  :                                           24 |

Make sure the strings aren't longer than the reserved space:

    | HUNTINGTON HARTFORD HORACE HORSEFINDER, ESQ., PH.D, ETC.  |
    | NAME :Huntington Hartford Horace Horsefinder, Esq., Ph.D, Etc. |
    | AGE  :                                           24 |

---

## Repeating

When the thing to the left of an `*` operator is a string, it repeats it by whatever number is on the right:

    >>> first_name = 'louie'       # 'louie'
    >>> first_name += ' '          # 'louie '
    >>> title = first_name * 2     # 'louie louie '
    >>> title.title().strip()      # 'Louie Louie'

Note also the `+=` operator concatenates the string variable in place.

---

## Finding Text

The `find()` method is one way to tell if a string contains a _substring_:

    >>> name = 'Louie'
    >>> title = 'Louie Louie'
    >>> title.find(name)
    0

The zero value actually indicates success here, not the number of matches. (More about this later.)

---

## Finding Text (cont'd)

If the `find()` fails, it returns `-1`. Not all methods behave this way:

    >>> name = 'louie'
    >>> title = 'Louie Louie'
    >>> title.find(name)
    -1

If you want to search case-insensitively, you first _normalize_ the data to properly compare them, such as by lowercasing both values:

    >>> title.lower().find( name.lower() )
    0

---

## Changing Text

The `replace()` method changes one substring to another. If the search doesn't match, it returns the original string unchanged:

    >>> original = 'Louie Louie'
    >>> old_name = 'Louie'
    >>> new_name = 'Harry'
    >>> changed = original.replace(old_name, new_name)     # 'Harry Harry'

You can specify an additional argument for the maximum number of changes you want. Replace with an empty string to delete text:

    >>> changed = original.replace(old_name, "", 1)    # ' Louie'

---

## Prompting for User Input

Here's how to interactively prompt for text from the user:

    user_input = raw_input('Who is your favorite 1D member? ')
    print user_input   # 'Louie!!!'

The program displays the prompt string, then halts the program's execution until the user enters any stretch of text on the command line followed by a carriage return.

(The linebreak is not included in the captured input.)

---

## User Input (cont'd)

All text comes in as a string, and you may need to convert it to integers. This works only if users input an integer, a bug you'll learn to fix later:

    prompt = """Who is your favorite 1D member?
    1: Harry
    2: Liam
    3: Louie
    4: Niall
    5: Zayn
    0: Don't know
    > """
    user_input = int( raw_input(prompt) )

---

## Reading Text from Files

Asking questions on the command line can be useful, but most text comes from reading external files. You run `open()` to create an object that bridges to the file, then `read()` to get its contents:

    >>> file_name = 'strings.md'     # Where is the file?
    >>> file_obj = open(file_name)   # Create bridge to file
    >>> contents = file_obj.read()   # Get content via bridge
    >>> contents
    '---\n\n## Introduction\n\nIn this unit you learn:\n\n- different ways
    to define a text string\n\n- how to format numbers or other strings\n\n-
    how to search and replace within text\n\n- how to prompt for text on the
    command line\n\n- how to get text from within a file\n'

