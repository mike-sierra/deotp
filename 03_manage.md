# Managing

1.  Copy a file. This creates the second file from the first:

        $ cp harry.txt harry_stiles.txt

1.  Rename a file. This also _clobbers_ any existing file with the
    same name:

        $ cp harry_stiles.txt harry.txt

    - _clobber_

1.  Create, then remove a file.

        $ touch file.txt
        $ rm file.txt

    By default, the `rm` command does _not_ warn you, so _be careful!_
    Also, any files you remove this way do not appear in the Mac's
    trash box. They're gone... _forever!_

1.  The `-i` (interactive) option allows you to type `y` or `n` when
    prompted to remove each file:

        $ rm -i *.txt

    But suppose you accidentally tried to remove many, many files.
    Whenever you're in such a special mode outside of the shell
    itself, you can always type `CTRL-c` to cancel out of it.

    - _interactive_
    - _mode_

1.  Create a subdirectory:

        $ mkdir onedir

1.  Remove a subdirectory, only possible with this command if it's
    empty:

        $ rmdir onedir

1.  Create a nested subdirectory. You need the `-p` (path) option when
    any of the upper directories don't exist yet.

        $ mkdir -p onedir/members

    Otherwise, you'd have to run two separate commands:

        $ mkdir onedir
        $ mkdir onedir/members

1.  Copy files into a directory. Whenever the last argument is a
    directory, it becomes the target.

        $ cp *.txt onedir

1.  Move files from one directory to another:

        $ mv onedir/*.txt onedir/members

1.  Remove the entire directory structure, recursively prompting for
    each file:

        $ rm -r onedir

    __WARNING__: You can add the `-f` option to force-remove files and
    directory trees, but be very, _very_ careful!

    - _recursive_
    - _force_

1.  Create a directory structure, create another directory, and copy it
    in there:

        $ mkdir -p onedir/members
        $ mkdir -p ~/target/
        $ cp -R onedir ~/target

1.  Move and rename a directory:

        $ mv ~/target/onedir ~/one_direction

1.  Efficiently _mirror_ a set of files. It's often hard to use `cp`
    to reflect a directory structure after it's already been
    copied. This works much better:

        $ mkdir -p onedir/members
        $ mkdir -p ~/target/
        $ rsync -av --delete onedir ~/target

    When you run that last command more than once, it only copies
    files to the target that have been _updated_. The `--delete`
    option means any files removed from the `onedir` directory also
    get deleted from the `target`.

    - _mirror_

1.  Now learn more about command _history_: Type an up-arrow to see
    previous commands, and down-arrow for newer ones. Type a carriage
    return to re-run any one of those commands.

    - _command history_

1.  Edit a previous command: Type `CTRL-a` to go to the start of the
    line, and `CTRL-e` to go to the end. Type side-arrows to move by
    character, and add the OPTION key to move by word. Type `CTRL-k` to
    kill the text after the cursor and `CTRL-y` to paste it back in.
    Position the cursor between two characters that you may have typed
    in too quickly, then type `CTRL-t` to transpose them.  (These CTRL
    combinations are borrowed from the Emacs text editor.)

1.  View all history for this shell session:

        $ history

1.  Put an exclamation mark, otherwise known as a _bang_ character, in
    front of any number from the history list to run it again:

        $ !525

1.  Run the most recent command starting with `rsy` (i.e. `rsync`):

        $ !rsy

1.  Run the previous command in its entirety:

        $ !!

    Note that each command in the history may include several
    statements separated by semicolons, so you can keep modifying the
    previous command with others:

        $ !! ; another_command

1.  Invoke the last argument from the previous command:

        $ touch harry.txt
        $ open !$

