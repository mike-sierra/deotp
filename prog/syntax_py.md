---

## Syntax: Comments

The following summarizes how Python's basic syntax works without telling you yet what any of it means:

    #!/usr/bin/python
    # This is a Comment
    print "Hello World!"    # In-line comment

The initial `#!` line identifies the file as a Python script and provides the path to the executible. Any other line starting `#` is a comment that gets ignored. Comments can also trail lines of code.

---

## Syntax: Comments (cont'd)

It's also common to insert bare string blocks within source code to embed formal documentation. Such expressions don't _do_ anything:

    #!/usr/bin/python

    """
    This provides a description of the program. It's more appropriate
    for lengthy documentation that runs over many lines.
    """

    print "Hello World!"

---

## Syntax: Indents

Python is _very_ sensitive to whitespace at the start of each line. Most elsewhere it doesn't matter much. Try running this program:

    #!/usr/bin/python
    print "Hello World!"
     print "Hello World!"

The extra space character yields a fatal parsing error:

      File "./hello.py", line 4
        print "Hello, World!"
        ^
    IndentationError: unexpected indent

---

## Syntax: Indents (cont'd)

For a peek into why Python behaves this way, type this text:

    #!/usr/bin/python
    if True:
        print 'Yes'
    else:
        print 'No'

The trailing colons and indents define conditional blocks. In a Python-aware text editor, typing a carriage return after the colons should automatically indent each `print` statement.

---

## Syntax: Statements

Individual statements typically occupy their own line:

    text = "All work and no play makes Jack a dull boy."

You can also chain more than one statement on the same line with a semicolon:

    text = "All work and no play "; text += "makes Jack a dull boy."

---

## Syntax: Statements (cont'd)

Trailing backslashes let you stack lines within a statement using any system of indents you want:

    text = "All work "    + \
           "and no play " + \
           "makes Jack "  + \
           "a dull boy."

You often do this to keep complex lines of source code from running on too long.

---

## Syntax: Lists

Another place Python ignores whitespace is within various types of lists bounded by `[ ]`, `{ }`, or `( )`. The second example is easier to read:

    some_action_that_has_a_really_long_name( "All work", "and no\
    play", "makes Jack", "a dull boy" )

    some_action_that_has_a_really_long_name(
        "All work",
        "and no play",
        "makes Jack",
        "a dull boy"
    )
