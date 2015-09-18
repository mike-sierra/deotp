# Deep End of the Pool

Okay, okay, so not a great name, but at least it's not taken.

## Deep End of the Pool Unix

What if you had to learn Unix in a hurry? At least enough to become
productive? This set of training units should help.  Read this if
you're a Mac user and consider yourself an inspired beginner at Unix
who simply doesn't know where to start.  This is based on materials
targeted to my 14-year-old daughter, and perhaps you can find a few
clues of that.

While most _programmers_ know Unix, it's not just for them.  You can
apply the skills you learn here if you have to grapple with a wide
variety of _text processing_ tasks.  You may benefit if you're any
kind of _writer_, or have to do _research_ on any kind of data, or if
you have to keep track of a bunch of _stuff_, or even if you work with
programmers and want to keep an eye on what they're up to, the
scoundrels.

Go through each lesson's steps in the order below, making sure to
_type out each command_ to get used to it, get it into your fingers,
and to understand the output interactively. The text also calls out
common bits of Unix jargon, for your reference, if you're into that
sort of thing.

By the end, you should be able to create intelligent tools and design
your own workflows when working in a collaborative environment. You
should also be able to add _geek_ to your resume.

Here's what's in each section:

1.  [Getting Started](01_start.md) shows you how to set up the Mac's
    Terminal application.

1.  [Navigating](02_navigate.md) tells you how to see stuff, find out
    where you are, move around, and open stuff. (Commands you'll learn
    about: `ls`, `pwd`, `cd`, `touch`, `open`, `man`)

1.  [Managing](03_manage.md) tells you how to copy, move, and remove
    stuff. (`cp`, `mv`, `rm`, `mkdir`, `rmdir`, `history`, `rsync`)

1.  [Inspecting](04_inspect.md) shows you how to display files, search
    for stuff in them, and compare them. (`cat`, `more`, `less`,
    `head`, `tail`, `grep`, `wc`, `diff`)

1.  [Manipulating](05_manipulate.md) shows how to dump stuff into
    files, and how to chain commands together to create interesting
    new stuff. By the end, you should be able to search a directory
    structure, limiting search results to a particular kind of file.
    (`echo`, `find`, `sort`, `uniq`, `mail`)

1.  [Filtering](06_filter.md) shows you how to delete stuff or
    transform it into different stuff. By the end, you should be able
    to apply batch change scripts. (`sed`)

1.  [Reusable Tools](07_reuse.md) shows you how to create your own
    shortcuts and utilities to make your life easier. By the end, you
    should be able to write an automated script that notifies you of
    changes to a file that other people might be working on.
    (`alias`, `source`, `export`, `sh`, `chmod`, `crontab`, plus
    shell-script commands such as `for`, `do`, `done`, `if`, `then`,
    `else`, `fi`)

Once you get to those last three sections, you should be able to
design some powerful commands of your own.  However, every effort was
made to ignore anything more esoteric having to do with administering
your computer or networks.

## Deep End of the Pool Emacs and Regular Expressions

What if you have to edit a bunch of text files quickly?  After
learning the basics of Unix, do a deep dive into the Emacs text editor
and the regular expressions that can make it and other text editors so
powerful. (Note that Emacs has a Windows client, so anyone can benefit
from both of these.)

1.  [Emacs](08_emacs.md) walks you through all the major features of
    the Emacs text editor. By the end, you should be able to make
    changes to many source files at once. Even if you don't end up
    editing text files in Emacs, you should at least be aware of the
    powerful editing features you should come to expect. This unit is
    designed to make you into a very productive snob.

1.  [Regexp](09_re.md) shows you how to design flexible
    pattern-matching searches in Emacs. By the end, you should be able
    to build a regular expression that detects passive-voice
    constructions.
