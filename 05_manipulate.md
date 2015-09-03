# Manipulating

1.  Display some random text:

        $ echo "foo"

    Like a lot of commands, `echo` generates output that by default
    displays on the screen, a target called _standard output_.

    - _standard output_

1.  Put the output into a file, aka _redirect_ it:

        $ echo "foo" > file.txt
        $ cat file.txt

    - _redirect_

1.  The `foo` text above _clobbers_ whatever's in that file. Changing
    the `>` to `>>` _appends_ it to whatever's already in the file.
    Run each of these commands and see what you get:

        $ echo "bar" >> file.txt
        $ echo "foo" >> file.txt
        $ cat file.txt

    - _append_

1.  Type a bunch of those `echo` commands to put a bunch of random
    words into the file, and make sure to repeat a few of them. Now
    sort them:

        $ sort file.txt

    That takes the file's contents as input, runs it through a `sort`
    command, and sends the results to _standard output_, the screen by
    default.

1.  This is exactly equivalent to this command _pipe_:

        $ cat file.txt | sort

    Like a _redirect_, a _pipe_ diverts the output of the `cat`
    command, but in this case it sends it as input to another command
    rather than dumping it to a file.

    - _pipe_

1.  Copy the file, then try to sort it and put the results back in the
    file:

        $ cp file.txt fail.txt
        $ sort fail.txt > fail.txt
        $ cat fail.txt

    What went wrong? The file is now empty. In many programming
    environments, that second command would be interpreted as: read
    the file, sort the contents, then write it to the file. The shell
    is actually a bit dumber, and sees the file-clobbering `>` as the
    very first thing to do, so when it comes time to read the file,
    it's empty.  To make it work, you need to direct the output to a
    _different_ file, then use that to clobber the original:

        $ sort file.txt > temp.txt
        $ mv temp.txt file.txt
        $ cat file.txt

1.  This sorts, but filters out any repeated lines, to display only
    _unique_ lines:

        $ sort -u file.txt

1.  This finds the five most most popular words:

        $ sort file.txt | uniq -c | sort -rn | head -5

    It may help to slowly build this chain of commands from the left
    to fully understand it. After the initial sort, `uniq -c` counts
    sequences of repeated adjacent lines and prepends that number to
    the output. The second `sort` uses `-n` to sort _numerically_
    rather than by string. (If you sort `1`, `5`, and `10` using
    default string sorting, `5` comes last because it sorts from the
    left.) The sort's `-r` option _reverses_ the order to display
    larger values on top, and the final `head` command displays only
    the first five lines.

1.  Here's how to send the results of any Unix command through email:

        $ cat file.txt | mail -s "subject" your@email.com

1.  Command chains and redirects tend to flow from left to right, so
    this alternative file input redirect syntax can be a bit
    confusing:

        $ mail -s "subject" your@email.com < file.txt

    This may help clarify how it works, or not:

        $ sort < unsorted.txt > sorted.txt

1.  Capture error logs. Commands often send out errors along with
    legitimate output, and this can appear all jumbled and confusing
    on the screen. You can redirect the _standard error_ stream
    separately from _standard output_, using the same clobber/append
    distinction:

        $ some_command > output.txt 2>  errlog.txt
        $ some_command > output.txt 2>> errlog.txt

    - _standard error_

1.  Finally, dump a bunch of filenames into a list:

        $ echo file1.txt >> list
        $ echo file2.txt >> list
        $ echo file3.txt >> list
        $ echo file4.txt >> list
        $ echo file5.txt >> list
        $ echo file6.txt >> list
        $ echo file7.txt >> list
        $ echo file8.txt >> list
        $ echo file9.txt >> list

    This takes all the lines of the `cat` command's output and passes
    them as arguments to the `touch` command. The technique is called
    _command interpolation_:

        $ touch `cat list`

    - _command interpolation_

1.  Here's how you might use this in real life to build a complex
    command. Suppose you have a directory tree full of JavaScript
    files, and you want to search recursively for various syntax
    `@things` used in documentation, and you want to make sure not to
    include non-JavaScript files. The `find` command generates a full
    recursive list of files, including directories:

        $ find . -print

    (The `find` command is unusual, and actually has to be told to
    produce output with the `-print` option.)

    This narrows the output to JavaScript files ending with `js`. (The
    `$` in the regular expression means _at the end of the line_.)

        $ find . -print | grep "js$"

    Search each one of those files for the significant pattern. (The
    `-h` hides filenames from the output.)

        $ grep -h '@[a-z]' `find . -print | grep "js$"`

    We may be interested to see these items clumped together, to make
    sure they're handled consistently. This sorts and pages the
    output:

        $ grep -h '@[a-z]' `find . -print | grep "js$"` | sort -u | more

    You may see output such as `@description presents a window
    that...`, so you can pipe to another search for sentences that
    don't start with uppercase. (The character class works much the
    same way in the regexp as in shell wildcards.)

        $ grep -h '@[a-z]' `find . -print | grep "js$"` | sort -u | grep "@description [^A-Z]"
