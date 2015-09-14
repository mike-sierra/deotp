# Emacs

This section introduces Emacs, a powerful text editor that's built
into most Unix distributions, but also available as a [separate
install for Windows](http://mirrors.kernel.org/gnu/emacs/windows/).
Originally developed for programmers to edit source code, it's great
for any raw text-based documentation formats, either unstructured
markdown or XML-based formats. By the end of this unit, you'll be able
to flexibly edit large batches of files.

1.  __Getting started__.  For this unit, you'll be working on a copy
    of the doc you're currently reading.  Copy the _clone_ URL from
    the page in which this doc appears.  Then use the URL to copy the
    repository to your local system. It's common to manage all your
    cloned repositories within a single subdirectory within your home
    directory, called `sandbox` or `stash` or something like that:

        $ mkdir -p ~/sandbox
        $ cd ~/sandbox
        $ git clone PASTE_URL_HERE
        $ ls
        $ cd basic_unix

    Use either of these commands to track any changes you've made to
    the files:

        $ git status
        $ git diff

    If at any point you want to return any edited file to its original
    state, use a command like this:

        $ git checkout -- modified_file.md

    (If the `git` command isn't installed, your Mac should prompt you
    to install a suite of developer utilities from the App Store. Go
    ahead and do that. Otherwise you can also __Download__ an archive
    of the files.)

    Also check to see if you have a hidden Emacs configuration file in
    your home directory:

        $ more ~/.emacs

    If not, copy the one from the repo to make Emacs work better:

        $ cp .emacs ~

    The section at the end explains what it does.

1.  __Open a file, make some changes, save, and quit__. Here's how to
    edit a file from the shell:

        $ emacs README.md

    The bar that runs along the bottom of the screen displays the
    filename and other information. Type a down-arrow a few times to
    move the insertion point, and you see the line number displays.
    Now type some text to make a change, and the `**` in the lower
    left indicates an unsaved editing _buffer_. (If the file's
    permissions were read-only, it would display as `%%` and not allow
    you to insert text.)  The `(Text)` indicates the default editing
    _mode_; others triggered by the filename extension may be
    optimized for editing XML or various programming languages.

    To save the file and make the `**` go away, type CONTROL-x, then
    CONTROL-s. Throughout this unit, sequences of control combinations
    are shortened this way: __C-x C-s__.

    Now make some more changes, then type __C-x C-c__ to quit.  In the
    _minibuffer_ line that appears below the information bar, you're
    prompted to save the editing buffer to a file. Ordinarily here you
    could type `y` or `n`, but perhaps you may have quit by mistake.
    To cancel out of this prompt mode, type __C-g__. This all-purpose
    escape hatch comes in handy if you ever find yourself in an
    interface you don't know how to get out of.

    Try saving again, quitting, and re-opening the file for practice.

    - editing _mode_
    - _buffer_
    - _minibuffer_

1.  __Navigate within a file__. To do this step, open the file that
    you're currently reading.

    Up- and down-arrows move from one line to the next.  Left- and
    right-arrow keys move the insertion point one character at a time.
    (Emacs doc refers to it simply as the _point_.)  Hold down the
    OPTION key while typing a left- or right-arrow, and you move by
    word element. Type __C-a__ or __C-e__ to go to the start or end of
    the line, the same key combination available in the bash shell.

    Type the ESC key, then `>`. That navigates to the end of the
    file's editing buffer. Typing ESC, then `<` navigates to the top
    of the buffer.  The ESC key substitutes for the META key found on
    many non-Mac keyboards, where you use it in Emacs as a key
    combination.  While you need to type it in as a sequence on the
    Mac, you see these represented in all Emacs doc as __M-<__ and
    __M->__.  (Whenever you see __M-__, think: _ESCAPE_, _then_.)

    Move the cursor so that it's near the top or bottom of the screen,
    then type __C-l__ to refresh the screen to display the cursor in
    the center.  Type __C-v__ or __M-v__ to navigate up or down by
    screenfuls.  You can also try __M-{__ or __M-}__ to navigate by
    paragraph, which is usually a block surrounded by at least two
    carriage returns.  You can also try __M-a__ or __M-e__ to navigate
    by sentence, but the default Text editing mode may expect there to
    be two spaces after each period.

    It's often easier to use search to move around. Type __C-s__ to
    launch an _interactive search_ mode, then type `1`. This navigates
    from one numbered item to the next, but it may also pick up random
    instances of the digit, as in the previous sentence. Add a dot
    character so that you're searching for a `1.` sequence. The search
    continues from the current point, but excludes matches of isolated
    digits. Type __C-r__ to reverse direction and search backwards at
    any point.  Once you get to the "one" you want, typing an arrow
    key to navigate exits the search mode and allows you to edit.
    Otherwise, typing __C-g__ cancels and returns the cursor to
    wherever it was when you first launched the search.

    Finally, navigate by line number. Type __M-g g__ (the ESCAPE key,
    then two `g` characters). Specify a line number when prompted in
    the minibuffer, then run the command another couple of times and
    specify other line numbers. Then run it one more time, and when
    prompted, type the up-arrow key. This plus the down-arrow key
    allows you to navigate within all the line numbers you've jumped
    to.

    If you forget the key shortcut for jumping to line numbers,
    there's another _named_ command alternative. Type the ESCAPE key,
    then `x`, then `goto`, then space, then `line`, then finish it
    with a carriage return. Or do the same, but after typing `go`,
    type a TAB character to view the tab-completion results. After
    typing `goto l`, adding a TAB completes the command. You'll see
    any named commands along with the extraneous tab-zapping text
    represented below like this: __<u>M-x goto-l</u>ine__.

    - _named_ commands
    - _interactive search_
    - _point_

1.  __Open other files__. Quit out of Emacs, then open an empty file
    for editing:

        $ emacs scrap.txt

    Type some text to make changes. Then from within the file, type
    __C-x C-f__. You're prompted to open another file. You can either
    type it out in full, or start typing the filename along with a TAB
    to complete the rest. Once you've opened the other file, make some
    changes there as well. Instead of the __C-x C-s__ command that
    saves a single buffer, type __C-x s__ to get prompted for each
    unsaved buffer. You could type `y` repeatedly for each buffer, but
    typing `!` saves all changes to all open buffers in a single move.

    Type __C-x C-f__ again and open a different file. Then run the
    command again, and type up- and down-arrows to choose from among
    your recently specified files. (Emacs keeps separate history
    _stacks_ for various items you choose.) Or when choosing a
    filename, try editing the filename within the minibuffer or using
    __C-a__ or __C-e__ or other key commands to navigate.  As an
    alternative, run the command again, and when it prompts for a
    filename, type a carriage return. This puts you into a read-only
    `Dired` mode that allows you to navigate up and down to place the
    cursor on the line for any filename, then type a carriage return
    to open the listed file.  Finally, from within a file buffer, type
    __C-x C-w__ to save it as a different filename.

1.  __Manage buffers and windows__. Quit out of Emacs and try this:

        $ emacs *.md

    The screen is split into two different _windows_. One displays one
    of the source files, and the other displays the directory listing.
    Type __C-x o__ (the lowercase letter `o`) to swap the cursor from
    one buffer to another. Within the directory listing, select one of
    the other source files than the one displaying. Type __C-x 1__ to
    expand that buffer's window to fill the screen. (Alternately,
    __C-x 0__ (the number zero) removes the current window and
    displays the other.)

    While these windows often correspond to editing buffers, they're
    not quite the same thing. To prove this, run __C-x 2__ to split
    the current buffer into separate windows.  You can now make edits
    in one window that are reflected in the other, use __C-x o__ to
    swap between the two views of the same buffer, and navigate to
    another part of the file from what the other window displays.

    Finally, type __C-x C-b__ to list buffers in a separate window. It
    behaves much like the directory-viewing mode, but only lists
    buffers you have open for editing.

    - _stack_
    - _window_

1.  __Delete and undo__. Open a buffer, and navigate to position the
    cursor between two words.  Type a few characters, then type the
    DELETE key to get rid of them. (You can also type __C-d__ to
    delete forwards.)

    Now type __C-\___ to undo, or the alternative __C-x u__. This
    undoes the last deleted character. (Emacs supports _multiple
    undo_, allowing you to go back to any _snapshot_ of a buffer even
    before you last saved it.)  Repeat the command for each deleted
    character. Keep going as you build the text back up, but then
    notice at the end it all abruptly disappears again.  Emacs tracks
    insertions as a single action, but tracks each deletion
    separately.

    If you notice a misspleled word like the one you just read that
    comes from typing too quickly, another way to fix it without
    deleting text is by positioning the cursor between the two
    characters and running __CTRL-t__ to transpose them.

    Emacs supports a more substantial kind of deletion called a
    _kill_, and it's also stored as a single action in the undo
    list. Go to the start of a line and type __C-k__ to kill to the
    end of the line.  Go to the start of a paragraph and type __<u>M-x
    kill-p</u>aragraph__.  Try __M-d__ or __M-DEL__ to kill forward or
    backward by word. Or go to the start of a sentence and __M-z__,
    then a dot when prompted to _zap_ the character to kill to.
    Unless the sentence contains any dot characters, that should kill
    (_zap_) the entire sentence.

    - _snapshot_
    - _multiple undo_
    - _delete_
    - _kill_
    - _transpose_

1.  __Cut and paste__. First, clarify the non-Emacs way to do it.
    Using your mouse, select a bunch of text from the screen.  Then
    position the cursor and choose __Edit &rArr; Paste__ to insert it.

    Emacs's cut-and-paste mechanism is completely separate from the
    Mac clipboard.  Navigate to the start of some block of text, then
    type __C-SPACE__, which sets the _mark_. Then navigate the cursor
    somewhere else. The distance between the point and the mark is
    called the _region_, an arbitrary stretch of text that you can
    kill.  To cut/kill the region, type __C-w__. To paste it back in,
    type _C-y_, which in Emacs is referred to as a _yank_.

    To copy a region, you can either run those two commands in
    sequence, or type __M-w__, which toggles the cursor to give you
    feedback on where the region is. By default the region is
    invisible, but if you type __C-SPACE__ twice when setting the
    mark, a temporary _Transient-mark-mode_ displays it. (Type
    __C-SPACE__ again or __C-g__ to cancel the mode.)

    Ordinarily if you're in the middle of a paragraph and run __<u>M-x
    kill-p</u>aragraph__, it kills from the cursor/point to the end of
    the paragraph. Instead, typing __M-h__ first marks it and
    repositions the point at the top of the paragraph.  That's
    equivalent to navigating to the end of the paragraph, setting the
    mark, then navigating to the start. You can then run __C-w__ to
    kill the entire paragraph.

    - _mark_
    - _region_
    - _yank_

1.  __Tidy up regions__. Open any source file and navigate to a
    numbered list with several sentences in it. Insert another couple
    of sentences so that the text wraps around the right edge of the
    window. If you type __M-q__, the lines re-pack to that none exceed
    the conventional maximum of 80 characters.  (It's generally easier
    to evaluate changes to a file in a _diff_ view when lines are
    packed, even if more lines overall are marked as different.)  Now
    try the same with regions. Format a bunch of bullet list items,
    with lines starting with a dash and a space character, and all the
    rest of the text jammed onto the same line.  Mark a region around
    the entire series of bullet items and run __<u>M-x
    fill-r</u>egion__.  List items break into several lines, and every
    line after the first indents.

    Now open the [sample.json](sample.json) file, which shows the kind
    of sample data that might appear in documentation. Suppose readers
    need to be able to compare data values more easily. Mark a region
    around the entire block of code, then run __<u>M-x
    align-r</u>egexp__. At the prompt for a regular expression, type a
    colon followed by a space. All the values line up and form a
    column.

    Notice that many of the JSON object's keys are not arranged
    well. Mark a region within the outer braces, not including the
    lines with the braces themselves, then run __<u>M-x
    sort-l</u>ines__. This rearranges the object members so that
    related _license_- and _registration_-prefixed members cluster
    together.

    Finally, open the accompanying [sample.js](sample.js) JavaScript
    source file. Mark a region around the `hiliteCode` function call
    to the end of the file. Now run __<u>M-x comment-r</u>egion__, and
    each line is prefixed with `//` to disable the function. Notice
    the editing mode that enables this is `Java/l Abbrev`. If you had
    been editing a Python or Perl source file, it would have commented
    each line with a `#` character.

1.  __Ringing up kills__. Go to the start of any line with several
    sentences of text and use __C-z__ a couple of times to zap to the
    dot character to kill more than one sentence. Now type __C-y__ to
    yank/paste it back in.

    Any text you kill ends up in the Emacs _kill ring_, which sounds
    like a bad movie but is simply a history stack that contains all
    the chunks of text you kill. In this case you ran at least two
    separate kill commands, but the fact that the chunks of text were
    adjacent got them stored as a single chunk of text.

    Now that you've run a yank command, run __M-y__. This yanks the
    previous item in the kill ring. You can keep running it to go back
    in the history to retrieve previously killed text.

    - _kill ring_

1.  __Named clipboards__. You can perform complex edits by retrieving
    previously killed text, but it can be difficult to keep track of
    context as you go.  _Registers_ provide an alternative. You may
    never have to use this feature, but it's worth knowing about.

    Suppose you'd like to move several note-style paragraphs that are
    strewn throughout a document into a single section, and several
    chunks of code into a new appendix.  As you navigate through the
    text, mark one of the notes, run __<u>M-x copy-to-r</u>egister__,
    and name the register `N`. (Only a single character is allowed.)
    Then cut the note from the text. Do the same for the first piece
    of code you want to move, copying it to a `C` register. For the
    next note you encounter, think about how you want to order it
    relative to the one you've already copied. Run either __<u>M-x
    prepend-to-r</u>egister__ or __<u>M-x append-to-r</u>egister__. Do
    the same to arrange blocks of code within the `C` register. Along
    the way, you can run __<u>M-x view-r</u>egister__ to see the full
    contents of a register in a separate window, but the window does
    not refresh when you modify the register.  Finally, when you've
    collected all the text you want, use __<u>M-x
    insert-r</u>egister__ to put them back into the text.

    The __<u>M-x prepend-to-b</u>uffer__ or __<u>M-x
    append-to-b</u>uffer__ commands allow you to use this same
    technique to quickly move text from one buffer to another without
    having to navigate there.

    - _register_

1.  __Search and replace__. Open this source file, go to the top of
    the file, and run __M-%__. The _query replace_ mode prompts you
    for some text in the minibuffer.  Assume you want to change the
    numbered list items to bullets, so change `1.` to a dash followed
    by a space.  Within the replacement mode, a SPACE character makes
    the change and goes to the next match. A DELETE character skips
    this match and goes to the next. A comma character (`,`) makes the
    change and stops. An exclamation point (`!`) changes all matches
    from the current point to the end of the buffer.

1.  __Pasting into search and replace__.  Several instances of `1.`
    that appear within text also match, including this sentence. How
    do you narrow the search to the start of the line? One way to do
    it is to include the carriage return in the search and replace
    text. But you can't type a carriage return into the search and
    replace prompts, because it's used as a signal that you're
    finished entering text in the minibuffer. One workaround is to
    yank/paste the text in. Go to the end of any line, set the mark,
    navigate right by one character, then either copy or cut/paste the
    carriage return. When you run the search again, you can yank the
    carriage return character into the minibuffer, then follow it with
    the search or replacement string. (You can use this approach to
    yank any text as a search or replace string.)  As an alternative,
    the __C-q C-j__ key combination allows you to insert a literal
    carriage return character anywhere.

1.  __Edit search and replace text__. Each time you're prompted for
    search or replacement text, you can type an up-arrow key to access
    the history. It's represented as a single consolidated list, with
    search strings interleaved with replacements. Editing any of these
    values results in a new history entry.

1.  __Case-insensitive search__. By default, Emacs searches are
    case-insensitive, but the `.emacs` configuration you copied
    overrides this, because the results can be confusing.  To
    understand why, run __<u>M-x toggle-c</u>ase-fold-search__.  Go to
    the top of the file, search for `delete`, and replace with
    `Delete`. Of the three matches (`Delete`, `DELETE`, and `delete`),
    only the lowercase one changes to Initial Cap. Toggle again to
    re-enable case-sensitivity.

1.  __Regular expression search and replace__.  Here's another way to
    change the numbered lists in this file to bullets. Go to the top
    of the buffer and run __<u>M-x query-replace-r</u>egexp__. Search
    for `^1\.` and replace with a dash followed by a space. The caret
    (`^`) positions the match at the start of the line, and the
    backslashed dot (`\.`) specifies a literal dot character. (The
    next unit details how to use Emacs regular expressions.)

    Try opening the `samples.json` file. For blocks of code to format
    correctly within markdown source files, you often need to indent
    them with 8 spaces.  To fix this block, do a regular expression
    search-and-replace for `^` and change it to 8 spaces.

1.  __Search across many files__. This feature allows you to work on
    potentially hundreds of files at once as if they were one big
    file. Quit out of Emacs to return to the shell. The `etags`
    command creates a `TAGS` list of files through which to search.
    This creates a `TAGS` file listing all markdown source files in
    this directory:

        $ etags *.md

    Now open any file, including the `TAGS` file itself. Run __<u>M-x
    tags-q</u>uery-replace__. (The search is a regular expression,
    discussed in the next unit.) For now, search for something
    simple. You're also prompted the first time for the name of the
    `TAGS` file.  The query-replace proceeds for each file in the
    list. You can consider each change, or specify `!` to change all
    in each file.

1.  __Search across many directories__.  You can flexibly specify any
    set of files in the change list, for example:

        $ etags *.md samples/*.json

    The `-a` option allows you to append sets of files separately:

        $ etags *.md 
        $ etags -a samples/*.json

1.  __Resume a search__. Suppose you are in the middle of searching a
    large batch of files, and as you proceed from one match to the
    next, you notice some unrelated problem that needs to be fixed.
    Type an arrow to get out of the query-replace mode. To resume, you
    could re-run __<u>M-x tags-q</u>uery-replace__, but that would
    restart the search from the first file. Instead, running __<u>M-x
    tags-l</u>oop-continue__ resumes the previous search and replace
    from the current point and on through subsequent files.

1.  __Drop down to the shell__. Any time you're in Emacs, you can run
    __C-z__ to suspend it and drop down to the shell, which displays a
    message that the Emacs process has stopped. You can now run any
    command you ordinarily would in the shell. For example, this
    modifies the `TAGS` list to include another batch of files to
    search through:

        $ etags -a src/*.js

    This command lists any programs you're running that are either
    suspended or running in the _background_:

        $ jobs

    To resume Emacs, you _foreground_ the _job_:

        $ fg

    If you modify the `TAGS` table after you've already used it for a
    search, Emacs warns you of the change when you run your next
    search.

    - _background_
    - _foreground_
    - _job_
    - _suspend_

1.  __How Unix jobs work__. Above you temporarily suspended a program
    and placed its job in the background, but you can also run jobs in
    the background.  While this may not come up often, this example
    shows how it basically works. The `sleep` command does nothing for
    a specified amount of time, 5 seconds in this case, but pretend
    it's something more substantial that runs for a long time or
    indefinitely.  The first invocation runs it in the foreground,
    preventing you from doing anything else. The second allows you to
    check its progress:

        $ sleep 5
        $ sleep 5 &
        $ jobs

    Once the job terminates, you don't learn about it until you run
    another shell command, not just `jobs`.

1.  __Run shell commands from within Emacs__. As an alternative to
    suspending Emacs, you can type __M-!__ to run shell commands
    without leaving Emacs. At the prompt, you can enter the same
    `etags` command shown above to modify the search list.  You're
    told if the command does not generate any output, or for those
    that do, output generates in a new window.

1.  __Configure Emacs__. Finally, look through the configuration items
    in your `~/.emacs` file to understand what they do. They're
    expressed in a bizarre, difficult-to-understand format, with `t`
    and `nil` representing `true` and `false`.  But the upside is that
    if you get good at adjusting your configuration, you can add _Lisp
    programmer_ to your resume.

    - `case-fold-search` sets default case sensitivity.
    - `indent-tabs-mode` inserts spaces rather than tab characters
      when you type a TAB.
    - `auto-save-mode` prevents Emacs from potentially delaying your
      session by auto-saving open buffers.
    - `visible-bell` sets whether to flash the screen in some cases as
      visual feedback.
    - `column-number-mode` displays horizontal position in the
      minibuffer along with the line number.
    - `auto-fill` sets whether to break lines automatically when you
      exceed 80 characters.
    - `require-final-newline` forces insertion of a blank line at the
      end of the file.

    The configuration also prevents Emacs from leaving behind backup
    and autosave files in the working directory.

    You can comment some of these items out to see how it changes how
    Emacs behaves.

1.  __Homework__. Reformat all the information in this unit that
    you're likely to use into a cheat sheet for your own reference.

