# Navigating

1.  When you log in, you start out in your _home directory_, the same
    one you get in the Finder when you choose __Go&rarr;Home__.
    (Directories are often called _folders_ when they appear in a
    graphic interface.)  This command lists files and
    _subdirectories_, which are folders nested within other folders.
    It's very common to `ls` after you navigate to a directory, to see
    its contents.  Type in the `ls` part, then a carriage return:

        $ ls

    The `$` that appears above is just a common convention to show
    when you're in a shell context. (The _bash_ shell displays a `$`
    prompt, while the alternative _C_ shell uses a `%` prompt.)

    - _shell_
    - _utility_ / _command_
    - _home directory_
    - _subdirectory_
    - _directory_ / _folder_

1.  This command creates an empty _file_, or updates an existing file:

        $ touch harry.txt

    Run `ls` again to see it:

        $ ls

    Avoid any _whitespace_ characters and most special
    non-_alphanumeric_ characters in filenames.  But underscores are
    safe:

        $ touch harry_stiles.txt

    The `touch` is the _command_, and the rest is called the
    _argument_.  Here's how to create several files at once with
    several arguments:

        $ touch harry.txt liam.txt zayn.txt niall.txt louis.txt

    Lowercase is optional, but a common file-naming convention.  The
    filename _extension_ suffix is optional, but often gives hints for
    which application is appropriate to open it, in this case
    `TextEdit`.  (The Mac Finder may be configured to hide the
    extension from its listings.)

    - _file_
    - _whitespace_
    - _alphanumeric_
    - _command_
    - _argument_
    - _extension_

1.  Most Unix systems such as Linux are _case-sensitive_, but the Mac
    overrides this. Running this command only produces a single file:

        $ touch harry.txt HARRY.txt Harry.txt
        $ ls

    - _case-sensitive_ filenames

1.  List a subset of files, in this case all ending with `.txt`:

        $ ls *.txt

    The `*` is a special _wildcard_ that translates to _one or more
    character_. This lists any text file starting with lowercase `l`:

        $ ls l*.txt

    ...or _any_ file starting with `l`:

        $ ls l*.txt

    - _wildcards_

1.  Less useful, the `?` wildcard matches a single character. This
    lists text files that have single-character filenames except for
    the extension:

        $ ls ?.txt

1.  Specify alternate characters.  This is a _character class_
    matching any text file starting with `h` or `z`:

        $ ls [hz]*.txt

    Adding `^` at the start reverses the set, so this means any text
    file _not_ starting with those characters:

        $ ls [^hz]*.txt

    - _character class_

1.  Specify ranges.  This yields any text file starting from `n` to
    `z`:

        $ ls [n-z]*.txt

    Here's how to specify more than one range, in this case any file
    starting with alphanumeric, or an underscore or dash. (The dash is
    a considered literally when it appears at the end.)

        $ ls [a-zA-Z0-9_-]*

    - _character range_

1.  Tab completion can save you a _lot_ of time. Type this without
    following it with a carriage return:

        $ ls l

    Now type a TAB character.  You see `liam.txt` and `louis.txt`
    listed. Then add an `o`:

        $ ls lo

    Type another TAB and it finishes the filename for you:

        $ ls louie.txt

    If you're in a directory that only contains a single item, you can
    type `ls`, then a TAB to get the only possible completion.

    - _tab completion_

1.  List a directory's contents:

        $ ls Documents

    (Directories named with Initial Cap are specially built in for the
    Mac.)  This lists all files _and_ subdirectories in separate
    batches:

        $ ls *

1.  Modify a command with an _option_: If commands are verbs and the
    arguments are nouns, think of the options as adverbs. This shows
    all _hidden_ files in the directory whose filenames start with a
    dot:

        $ ls -a

    Notice the `.` and `..` listings.

    - command _options_
    - _hidden_ files

    This shows a _long_ listing of inscrutable (for now) details about
    the file:

        $ ls -l

    You can often combine arguments using this shorthand:

        $ ls -al

1.  Show your current _working directory_:

        $ pwd
        /Users/YOURLOGIN

    This is called an _absolute path_. It tells you how to navigate to
    where you are from the file system's _root_ (the first `/`)
    through each subdirectory. Subsequent slash characters are known
    as path _delimiters_.

    - _root_
    - _absolute path_
    - _working directory_ (current)
    - path _delimiter_

1.  Go to the _parent directory_:

        $ cd ..
        $ pwd
        /Users

    Then go back down:

        $ cd YOURLOGIN

    Whenever you specify paths that don't start with a slash, they're
    called _relative paths_. In every full directory listing, `..`
    refers to the parent directory, and `.` refers to the current
    directory. You could have expressed that last command this way:

        $ cd ./YOURLOGIN

    - _relative path_

1.  Go to the root, or the _top_ of the directory tree as it's oddly
    referred to:

        $ cd /
        $ ls

    Now use a tilde to view files in your _home directory_:

        $ ls ~/harry.txt

    Your Mac probably isn't set up with more than one _user_, but if it
    were, you could use this to distinguish whose home directory:

        $ ls ~YOURLOGIN/harry.txt

    - _user_
    - _directory tree_

1.  Go up and over, but first go home, the `cd` command's default
    behavior:

        $ cd

    This goes up one directory and down one, in this case to the same
    directory, but you could go to other directories as well:

        $ cd ../YOURLOGIN

    This one goes up two, then down again:

        $ cd ../../Users/YOURLOGIN

    - _default_ behavior

1.  On the Mac, the `open` command opens folders in the Finder:

        $ open .
        $ open ~/Desktop
        $ open /

1.  You can open other kinds of files in various Mac applications.
    This creates an empty HTML file and opens it with your default
    browser:

        $ touch file.html
        $ open file.html

1.  You can join separate _commands_ on the same line with semicolons,
    where they're often referred to as _statements_:

        $ touch file.html; open file.html

    Now pretend for a moment that the `touch` command is something
    complicated that may produce the file, but may also fail for some
    reason. This syntax opens it only if the first command succeeds:

        $ touch file.html && open file.html

    This variation runs the second command only if the first fails:

        $ touch file.html || open error.html

    Think of these _and_/_or_ statements as handy one-line variations
    on if/then and unless/then conditional logic. (If that sounds
    far-fetched, consider these two sentences: _Be nice to me, and I
    will be your friend. Be nice to me, or I will punch you in the
    nose._)

    - _statement_
    - _conditional_

1.  Open anything with anything. Suppose you have an HTML file, but
    you want to edit the raw source with your default editor:

        $ open -e file.html

    The `-a` option allows you to choose any application, which you
    can use autocomplete to access. This is like dragging a file onto
    an app:

        $ open -a /Applications/Firefox.app/ file.html

    Notice that the `-a` option requires its own argument, in this
    case a path to an application. Some options are standalone, and
    some aren't.

    - _application_

1.  Learn more about commands. Some commands have so many
    hard-to-remember options that they appear in this longer
    double-dash format:

        $ command --spelled-out argument

    Some commands have a special option to tell you about all the
    other options available:

        $ command -h
        $ command --help

    Otherwise the `man` command may show you embedded _manual_-page
    documentation.

        $ man open

    The doc displays in a _paging_ mode. Type a space character to go
    to the next screen, or type `q` to quit out of it.

    - _manual_ page
    - _paging_
