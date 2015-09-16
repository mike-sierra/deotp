# Filtering

1.  In the previous section you saw how to generate a hit count for
    repeated lines within a file. Here's how to do a similar hit count
    for matching text across many files within a directory tree:

        $ grep -cri "search" .

    The dot at the end means to search the current directory.  The
    `-r` searches recursively through subdirectories.  The `-i`
    matches both upper- and lowercase.  The `-c` displays the number
    of matches rather than the contents of the matching line.

    The output is unsorted, and includes files with no hits at all:

        filter.md:0
        inspect.md:4
        intermediate.md:0
        manage.md:11
        manipulate.md:17
        navigate.md:22
        start.md:3

1.  __Deleting lines.__ The `sed` command allows you to delete lines
    that match a regexp:

        $ grep -cri "search" . | sed "/:0$/d"

    The `sed` (_stream editor_) command works differently than `grep`
    because it has its own set of mini-commands. Within the quotes
    above, the pair of slash characters encloses the regexp, which
    specifies any colon-zero sequence at the end (`$`) of the
    line. The trailing `d` mini-command deletes the matching line from
    the output.

1.  __Substituting.__ The other you'll use is `s` for _substitute_.
    Here's the basic form.

        $ sed "s/this/that/" *.txt

    This example changes a bunch of text files, but you've seen how
    you can use it in a series of piped commands like above:

        $ cat *.txt | sed "s/this/that/"

1.  __Substitution flags__. By default, it changes the first instance
    of _this_ on each line and ignores the rest. To change them all,
    append the `g` (_global_) substitution _flag_. In addition, the
    `i` flag makes the match case-insensitive:

        $ sed "s/this/that/gi" *.txt

    - _flag_

1.  __Regexps.__ Return to the hit-count example above. We want to be
    able to sort to see the higher-priority files with the most
    frequent hits. But to do that, the number has to move from the end
    of the line to the beginning. Here's the command you'd pipe to:

        sed "s/^\(.*\):\([0-9]*\)$/\2: \1/"

    It looks at first like complete gibberish, and takes practice to
    be able to read.  It helps to build it up one piece at a time, as
    in the following steps. The example happens to feature most of the
    regexp skills you'll routinely need.

1.  First, start with an empty command that does nothing:

        sed "s///"

    Characters that do special things within a regexp are called
    _metacharacters_.  Of these, `^` and `$` don't actually match any
    text, but are _positioners_ that correspond to _start of line_ and
    _end of line_. So this regexp actually matches empty lines:

        sed "s/^$//"

    Positioning metacharacters are sometimes also referred to as
    _anchors_, and may help prevent unexpected results.

    To match metacharacters literally, or the slashes used to delimit
    regexps, you need to put a backslash in front of them. For
    example, this matches literal caret characters:

        sed "s/\^//"

    Likewise if you want to match a literal backslash, you have to
    _backslash_ that as well, otherwise known as _escaping_ the
    character:

        sed "s/\\//"

    There are many other situations whenever working in the shell
    where you need to _escape_ characters to get them to interpret in
    one context rather than another. It often makes Unix commands look
    like gibberish, as if they didn't already.

    - _metacharacter_
    - _positioner_
    - _anchor_
    - _backslash_
    - _escaping_

1.  This regexp matches anything on the line:

        sed "s/^.*$//"

    The dot character stands for _any character_, and is a type of
    built-in _character class_. The asterisk is a _quantifier_ that
    again doesn't match any text itself, but rather tells how many
    (zero or more) of the previous item (the dot) to match. Note the
    regexp now matches arbitrarily long lines, but also still matches
    empty lines. It matches _all_ lines.

    - _character class_
    - _quantifier_

1.  The input appends digits after a colon delimiter, and this matches
    them separately:

        sed "s/^.*:[0-9]*$//"

    The colon is a _literal_ character, which is interpreted as is and
    does not have any meaning as a metacharacter.  So this now matches
    any series of characters up to a colon. Since there's no
    quantifier after the colon, it means _exactly one_ of them.  What
    follows is the same kind of custom _character class_ you saw in
    filename wildcards.  The `[0-9]*` matches any series of digits
    that follows the colon.

    Note because of the mandatory colon the regexp no longer matches
    empty lines, but it might match lines with only a colon in them.
    But you can ignore that possibility because the output of `grep
    -c` always produces the same format.

    - _literal_

1.  __Capturing text.__ The regexp now matches the desired text, but it
    has to grab chunks of the matched text to rearrange them in the
    replacement. It's called a _trap_ or a _capture_, and is enclosed
    by the `\(` and `\)` delimiters:

        sed "s/^\(.*\):\([0-9]*\)$//"

    In this regular expression dialect, parentheses are literal
    characters, but backslashing them gives them their special
    meaning. So the regexp now traps each chunk of text on either side
    of the colon character.

    - _trap_
    - _capture_

1.  __Invoking captures__ You can now invoke the traps in replacements
    using _registers_ such as `\1` and `\2`, which corresponds to the
    number of the matched item. This flips the two chunks of text, and
    inserts another colon between them in the replacement:

        sed "s/^\(.*\):\([0-9]*\)$/\2: \1/"

    - _register_

1.  Combined with the previous command, the substitution now moves the
    appended digits from the end to the start of the line, where they
    can be sorted numerically for a useful hit count:

        $ grep -cri "search" . | sed "/:0$/d" | sed "s/^\(.*\):\([0-9]*\)$/\2: \1/" | sort -nr | more

1.  Here's a variation that demonstrates a few useful techniques. It
    generates a list of files with their hit counts for the _search_
    text, filters out any files with zero hits, then strips out the
    digits from the remainders, leaving you with a simple list of file
    paths:

        $ grep -cri "search" . | sed "/:0$/d" | sed "s/:[0-9]*$//"

    The `etags` command allows you to specify a list of files across
    many directories through which to search and replace with the
    Emacs editor. Interpolating the entire series of piped commands
    above generates that list in a local `TAGS` file:

        $ etags `grep -cri "search" . | sed "/:0$/d" | sed "s/:[0-9]*$//"`

1.  __Filtering line ranges.__ In addition to deleting lines and
    substituting text, `sed` allows you to perform another task that's
    often useful when doc is embedded within source code. Suppose you
    want to narrow some operation to a region of lines within a file.
    For example, let's spell-check some One Direction lyrics. Go to
    <http://www.azlyrics.com/o/onedirection.html>, click through to
    any song, and save the page source locally. Look at the file,
    either with a pager like `more`, or by opening it with a text
    editor, and see if there's anything that marks the desired
    region. In this case it's easy because there are template comments
    such as `<!-- start of lyrics -->`. Here's how to output just that
    region:

        $ cat lyrics.html | sed -n "/start of lyrics/,/end of lyrics/p"

    The `-n` option kind of means _nothing_, or _don't do what you
    ordinarily do_. Within the quoted argument, the regexp in each set
    of slash delimiters around the comma mark the start and end of the
    region, and the trailing `p` specifies to simply print the output.

    From the resulting output you may want to strip out HTML tags, by
    searching for `<[^<]*>` and replacing with nothing. (That means
    _any not-an-open-tag within an open-tag/close-tag_.) You'd also
    have to install a spell-checking command such as `aspell` so that
    it generates a sorted list of unknown words. Combined, the extra
    commands look like this:

        ... | sed "s/<[^<]*>//" | aspell list

1.  How to find out if a command is available:

        $ which aspell

    Empty output means _no_.

1.  __Convert to lowercase__. The `tr` command is useful for exactly
    one thing you'll ever need: changing case. Suppose you want to
    generate a list of internal HTML `#anchor` targets from the
    B-heads in a markdown file, to link to specific headings in
    converted HTML output. You would use a `grep` command like this,
    which produces the output that follows:

        $ grep -h '^#' *.md
        # Getting Started
        # Navigating
        # Managing
        # Inspecting
        # Manipulating
        # Filtering
        # Reusable Tools
        # Emacs
        # Regular Expressions
        # Unix

    You'd also do a substition on the start of the line to enable the
    `#anchor`, and remove all the spaces:

        $ grep -h '^#' *.md | sed 's/^# /#/' | sed 's/ //g'
        #GettingStarted
        #Navigating
        #Managing
        #Inspecting
        #Manipulating
        #Filtering
        #ReusableTools
        #Emacs
        #RegularExpressions
        #Unix

    But these anchors are mixed-case. What if the HTML conversion
    changes them all to lowercase? The anchors would need to match.
    This additional `tr` command specifies two ranges of characters,
    one uppercase and one lowercase. For each match in the first
    character set, it substitutes the corresponding item in the second
    set:

        $ grep -h '^#' *.md | sed 's/^# /#/' | sed 's/ //g' | tr "[A-Z]" "[a-z]"
        #gettingstarted
        #navigating
        #managing
        #inspecting
        #manipulating
        #filtering
        #reusabletools
        #emacs
        #regularexpressions
        #unix

1.  __Batch changes.__ So far you've seen individual `sed` commands
    that change one thing piped together. What if you have a long list
    of things you want to change? Suppose, after you've started to use
    the above link anchors, you decide to change the heading text, and
    need to redirect the links. Perhaps based on a `diff` of the
    headings, format them as `sed` commands and list them in a single
    file:

        s/#gettingstarted/#gettingstartedwithunix/
        s/#navigating/#navigatingthefilesystem/
        s/#managing/#managingfiles/
        s/#inspecting/#inspectingfiles/
        s/#manipulating/#manipulatingfiles/
        s/#filtering/#filteringcontent/
        s/#emacs/#usingemacs/
        s/#regularexpressions/#masteringregularexpressions/
        s/#unix/#basicunix/

    Suppose you call the file `changes`.  To apply all those changes
    and dump the modified version to another file, run this:

        sed -f changes source.md > changed.md

    Being _very_ careful with such large sets of changes, you should
    run `diff` to make sure they worked the way you want:

        diff source.md changed.md

    If everything looks good, replace the original file with the
    modified version:

        mv changed.md source.md

