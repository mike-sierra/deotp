# Inspecting

1.  Use your browser to open any web page and save the source as
    `page.html` in your home directory.

1.  View the file's contents:

        $ cat page.html

1.  That usually makes the contents whiz by so that you only see the
    very end. This variation allows you to _page_ through the file one
    screen at a time:

        $ more page.html

    Type a space to _page_ forward, and type `q` to quit. The `more`
    command only pages forward, but `less` lets you page back and
    forth by typing additional commands `b` or `f`:

        $ less page.html

    - _page_

1.  See the start or end of the file:

        $ head page.html
        $ tail page.html

    For either command, specify the number of lines to display:

        $ head -10 page.html

    Optionally clear the screen before displaying the output:

        $ clear ; head -10 page.html

1.  Look for stuff in the file:

        $ grep body page.html

    It displays lines of text with `body` anywhere in it. In Unix,
    lines are a very important unit of content, even though each line
    can be very long.

    - _line_

1.  A case-insensitive search for a multi-word _string_:

        $ grep -i "BODY class" page.html

    Note the need for the quotes. Otherwise the shell interprets
    `BODY` and `class` separately as arguments, and it gets
    confused. (If this doesn't work, try it with any other two
    adjacent words you see in the file.)

    - _string_
    - _case-insensitive_
    - _line_

1.  See more context in the output:

        $ grep -n -C 1 "body" page.html

    The `-n` option shows the line number on which the match appears,
    which may tell you how far down from the top of the file it is.
    The `-C` (_context_) option shows an extra line around each match,
    with each chunk of text marked with `---` regions. Try changing
    the `1` to `2` or more. It lets you see more of the file that
    surrounds the match.

1.  The `grep` command stands for _global regular expression parser_,
    a fancy way of saying the stuff within the quotes is special.
    _Regular expressions_ (aka _regex_ or _regexps_) offer a system of
    matching _patterns_ that resemble shell wildcards, but work
    differently. Suppose the word _body_ appears all over the place
    and you only want to see it when it's used as an HTML tag. You
    could do one command each to match the open and close tags:

        $ grep -n "<body" page.html
        $ grep -n "</body" page.html

    But in this variation, the `*` specifies _zero or more_ of the
    preceding `/` character, so it matches both scenarios:

        $ grep -n "</*body" page.html

    This is a simple regular expression, but they can do very powerful
    and complex things. You'll encounter slight variations in support
    for them in three kinds of environment: in simple line-based Unix
    utilities such as `grep` and `sed`, in more complex streaming text
    editors such as Emacs, and in full programming languages such as
    Python, JavaScript, and Perl.

    - _pattern_
    - _regex_, _regexp_

1.  Maybe you just want to count (`-c`) how many hits there are in a
    bunch of files. Perhaps you also want to search recursively (`-r`)
    through all nested subdirectories. This is a powerful way to
    inspect a directory structure:

        $ grep -cr "body" *

1.  The `-v` option reverses the matching results, so this matches any
    line that _doesn't_ have an angle bracket that marks HTML tags:

        $ grep -v "<" *.html

1.  Find out how big the file is in _lines_, _words_, and _characters_:

        $ wc page.html

1.  Copy a file, make some random edits, and save the file:

        $ cp page.html page2.html
        $ open -e page2.html

    Now compare to the original:

        $ diff page.html page2.html

    This common _diff_ format appears in various content-management
    systems such as Git, and is the main way you compare one version
    of a file to another and track changes.  They're much easier to
    read when each line of text doesn't exceed 80 characters, the
    standard width of most terminals.
