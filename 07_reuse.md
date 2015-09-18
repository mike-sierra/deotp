# Reusable Tools

1.  __Aliases.__ Edit this hidden file within your home directory:

        $ open -e ~/.bashrc

    Add this line, maybe at the top, otherwise anywhere there are any
    other `alias` lines:

        alias rm="rm -i"

    Then save the file and run this command:

        $ source ~/.bashrc

    Now create a file and remove it:

        $ touch file.txt
        $ rm file.txt

    You get prompted to remove the file. You've now redefined `rm` to
    always use its `-i` option to prompt you to remove files. If you
    want to remove a big batch of files, add the `-f` option, but
    again be _very_ careful.

    - _alias_

1.  __Useful aliases.__ You can use aliases as shorthand substitutes
    for specific commands so that you can reuse them but don't have to
    remember their awful syntax.  Here's a bunch of aliases that
    capture some of the more complex syntax you've seen so far:

        alias ls="ls -F"
        alias h="history"
        alias spell="aspell list"
        alias lr="find . -print"
        alias rmz="sed '/:0$/d'"
        alias rmn="sed 's/:[0-9]*$//'"
        alias flipn="sed 's/^\(.*\):\([0-9]*\)$/\2: \1/'"
        alias lc="tr '[A-Z]' '[a-z]'"
        alias uc="tr '[a-z]' '[A-Z]'"
        alias mirror="rsync -av --delete --exclude .git*"

    Note the single quotes nested inside the double quotes; you can
    also nest doubles within singles.

    Nothing is too silly to make an alias out of, if you find yourself
    repeatedly typing the same commands. It's common to alias a
    command you frequently misspell:

        alias goy="git"

    You can use aliases if you're familiar with DOS commands that do
    the same thing, or if you simply have trouble remembering some of
    Unix command names.  It's all up to you, and only applies within
    your shell environment:

        alias dir="ls"
        alias copy="cp"
        alias rename="mv"
        alias md="mkdir"
        alias rd="rmdir"
        alias del="rm -i"

    To disable an alias, remove the line from the `.bashrc` file or
    prepend it with a `#` comment. The next time you log in, it's no
    longer active.

1.  __Reusable variables.__ Shell _variables_ offer another way to
    create shortcuts. Open this page with your browser:

    <https://github.com/mike-sierra/deotp>

    Search for the word _clone_ on the page and copy the nearby _clone
    URL_. Then create a common directory in which to collect all the
    content repositories you're working on, and _clone_ it to copy it
    from the remote server.

        $ mkdir ~/sandbox
        $ cd !$
        $ git clone https://github.com/mike-sierra/deotp.git

    After that's done, navigate to the repo:

        $ cd deotp

    Now list the current directory path and copy it off your screen:

        $ pwd

    Then edit the `.bashrc` file again and add this line:

        gtth="/Users/msierra/sandbox/deotp"

    After you run `source ~/.bashrc` again, this is all you need to
    navigate to that directory:

        $ cd $gtth

    You never have to remember it again.  You can flexibly combine
    these shell variables with other expressions:

        $ ls $gtth/*md

    The dollar sign is called a _sigil_, which some programming
    languages use to mark certain kinds of objects.

    - _sigil_

1.  __Batch scripts.__ Both aliases and variables call up short
    one-liners, but shell _scripts_ allow you to batch many
    commands. Suppose someone creates a bunch of Unix-unfriendly
    filenames containing spaces:

        $ touch "harry styles.png" "louis tomlinson.png" "zayn malik.png" "liam payne.png" "niall horan.png"
        $ ls
        harry styles.png    louis tomlinson.png      zayn malik.png
        liam payne.png      niall horan.png

    Pretend there are 100 or more of these files. Or maybe a thousand.
    Here's a quick alternative to renaming them one at a time. By
    default when you `ls`, filenames appear in columns on the screen
    if they fit. But when you pipe to another command, they're stacked
    vertically into a list. The `-1` option forces this behavior:

        $ ls -1 *png

    Now pipe to a substitution that generates a command that renames
    the files. This grabs the entire filename and repeats it twice in
    the substitution, quoted, along with the `mv` command:

        $ ls -1 *png | sed 's/\(.*\)/mv "\1" "\1"/'

    The output doesn't yet change the filename. For that, another
    substitution converts any space character that appears after the
    `" "` boundary between the two filenames to an underscore:

        $ ls -1 *png | sed 's/\(.*\)/mv "\1" "\1"/' | sed 's/\(" ".*\) /\1_/'

    This is the result:

        mv "harry styles.png" "harry_styles.png"
        mv "liam payne.png" "liam_payne.png"
        mv "louis tomlinson.png" "louis_tomlinson.png"
        mv "niall horan.png" "niall_horan.png"
        mv "zayn malik.png" "zayn_malik.png"

    Now pipe it to a file:

        $ ls -1 *png | sed 's/\(.*\)/mv "\1" "\1"/' | sed 's/\(" ".*\) /\1_/' > rename.txt

    Now run the command, and it renames all the file.

        $ sh rename.txt

    You typically discard one-off scripts like this after your run
    them.

1.  __Executible permission.__ You can also run a script by making it
    _executable_. This lists files in a _long_ format:

        $ ls -al
        drwxr-xr-x  24 yourlogin  600   816 Apr  2 11:39 ./
        drwxr-xr-x  39 yourlogin  600  1326 Mar 30 15:27 ../
        -rw-r--r--   1 yourlogin  600  6698 Apr  2 11:35 rename.txt

    Here's what that first chunk with all the dashes and `drwx`
    characters mean. There are ten _bits_ of information here, one per
    character column:

    1. The `d` marks if the file is a directory. If not, the column
       displays a dash.
    1. The `r` marks if the file is readable, that you can view it.
    1. The `w` marks if it's writable, that you can edit it.
    1. The `x` marks if it's executable, that you can run it.

    The first batch of `rwx` indicates your file permissions. It's
    repeated by two other batches, one each for your _group_, or
    _global_ permissions for everyone else. (Most likely the
    distinction between group and global permissions doesn't matter on
    your machine.) So `-rw-r--r--` indicates that you have read/write
    permission, and everyone else can only read the file.

    The `chmod` (_change mode_) command lets you express each of those
    eight combinations of read, write, and execute as a number from 0
    to 7. The command to set the file permissions above looks like
    this:

        $ chmod 644 rename.txt

    Run this command to make the file executable:

        $ chmod 755 rename.txt
        $ ls -al rename.txt
        -rwxr-xr-x   1 yourlogin  600  6698 Apr  2 11:35 rename.txt

    There are other ways to do it, but this may be easiest to
    remember: `6` and `4` are for conventional files, writable or not,
    and `7` and `5` are for executables, writable or not. (Anything
    from `0` to `3` is unreadable, something you're unlikely to see.)

    - _permissions_
    - _user_/_group_/_global_
    - _read/write/execute_ bit

1.  Once the file is executable, you should be able to run it directly:

        $ rename.txt

    However, that probably results in a _command not found_ error.
    That's because your shell doesn't see the current directory as a
    place to look for executable commands. To force it to run, you
    need to specify the location of the file:

        $ ./rename.txt

1.  __Where executibles live.__ To make it so that you can run the
    script from anywhere, you need to add it to a directory _path_ the
    shell knows about, or add such a directory, as in this
    example. The `$PATH` shell variable displays all the available
    paths, delimited by colons:

        $ echo $PATH

    This creates a directory in your home directory, in line with the
    `bin` naming convention:

        $ mkdir ~/bin

    Add this line to your `.bashrc` file:

        $ export PATH="$HOME/bin:$PATH"

    This prepends your home directory path with the `bin` subdirectory
    to your existing path. Once you `source` the `.bashrc` file or log
    in again, running `echo $PATH` shows it's now available as the
    first directory to search. (Be careful not to name the executable
    the same as an existing one.)

        /Users/yourlogin/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/X11/bin

    At this point, you should be able to run the script from any
    directory.  However, you should rename it with a `.sh` extension
    to indicate it's a shell script, or else remove the extension
    altogether.  Either way, you can use tab completion to fill in the
    rest of the command name when invoking it.

1.  __Looping.__ When you first logged into the shell, you may not
    have realized you were in a _programming language_, but it's true.
    Bash is a kind of _scripting language_, which means you can run it
    directly from the text source with no separate need to _compile_
    the program as a different file.  Bash scripting doesn't offer the
    full range of features of other scripting languages like Python,
    Perl, or JavaScript, and it doesn't take long before you run up
    against the limitations of its syntax. Still, it's useful at least
    to know how to _loop_ over groups of items.

    This example maps a variable called `N` to a set of literal
    values, the numbers 1 through 12. For each of those values, it
    executes everything between the `do` and `done` commands. Within
    that _scope_ you can invoke the variable to get the value. In this
    case, it runs the `cal` command to generate a textual calendar
    view of each month:

        $ for N in 1 2 3 4 5 6 7 8 9 10 11 12; do cal $N 2015 > 2015_$N.txt; done

    This variation shows how it's typically formatted within a shell
    script. It also shows a much better shorthand way to loop over
    numeric ranges:

        for MONTH in {1..12}; do
            cal $MONTH 2015 > 2015_$MONTH.txt
        done

    You can also loop over filenames. This example takes all the text
    files in a directory and renames them with a dot prefix, which
    hides them:

        $ for FILE in *.txt; do mv $FILE .$FILE; done

    This variation loops over each chunk of whitespace-delimited text
    that a command releases. This splits all the words in a bunch of
    text files onto separate lines and dumps it to a file:

        $ for WORD in $(cat *.txt); do echo $WORD; done > words.txt

    - _loop_
    - _scope_

1.  __Conditionals.__ Suppose you need to change some text that's
    initially authored by developers and embedded in source code. But
    you need to work on it as the software is being written, with no
    time to wait for it being finished.  Rather than monitoring
    progress through formal processes that depends on busy people
    remembering to do stuff, consider writing a simple script that
    informs you of relevant changes, in this case instances of
    `@ngdoc` that marks each documented item.

    The code is explained in _comments_. Anything on a line after an
    unquoted `#` character is ignored:

          # Specify a variable for the directory to search:
        $SEARCH_DIR="/Users/yourlogin/sandbox/code-repo/src"
          # Initialize 2 hidden lists in your home directory:
        touch $HOME/.new_list.txt $HOME/.old_list.txt
          # Save the latest list as the old one:
        cp $HOME/.new_list.txt $HOME/.old_list.txt
          # Search for relevant text; save as new list:
        grep -r "@ngdoc" $SEARCH_DIR > $HOME/.new_list.txt
          # Compare old & new files; dump result to a third hidden file:
        diff $HOME/.old_list.txt $HOME/.new_list.txt > $HOME/.diff.txt
          # Start of conditional.
          # Does the comparison file have a size? (i.e. not empty)
        if [ -s $HOME/.diff.txt ]
        then
            # Send you the comparison in email:
            cat $HOME/.diff.txt | mail -s "latest changes" your@email.com
        else
            # This just shows a sample fallback action:
            echo "no changes"
        fi
        # Line above ends the conditional.

    To test the script, you can redefine `$SEARCH_DIR` to any
    directory you create, add various `@ngdoc` lines to any nested
    files, run the script, add or subtract some more lines, then run
    it again. Each time you run it, you should receive each set of
    changes in email. If there are no intervening changes, a _no
    changes_ message displays on the screen.

    - _conditional_

1.  __Make the script run automatically each day.__ Unix runs _daemon_
    programs in the background, once of which is `cron` that lets you
    execute recurring scripts. First, make sure your script is in your
    `~/bin` directory.  Also, add these lines to your `.bashrc` and
    `source` it:

        export EDITOR="/usr/bin/emacs"
        export VISUAL="/usr/bin/emacs"

    Unix's default text editor is `vi`, and the lines above override
    that. (You only need to do that once.) Then run this to modify
    your set of _cron jobs_:

        $ crontab -e

    Add this line to the file to execute the script at 2:00 each
    weekday afternoon:

        0 14 * * 1-5 /Users/yourlogin/bin/monitor_some_dir.sh

    The five chunks of text that appear before the executable's full
    path refer to the minute, hour, day of month, month of year, and
    day of week starting on Monday. The initial zero means top of the
    hour, the `14` is based on the 24-hour clock, the two `*`
    characters makes it work any date and month, and the `1-5` range
    narrows it to weekdays only.

    Now type `CTRL-x` followed by `CTRL-c` to exit Emacs, then `y` to
    confirm you want to save the file. You should now get an email
    every day.

    - _daemon_
    - _cron job_

