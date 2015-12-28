---

## The Python Emulator

Typing `python` by itself brings up the interactive Python prompt:

    $ python
    Python 2.7.8 (default, Aug 24 2014, 21:26:19) 
    [GCC 4.2.1 Compatible Apple LLVM 5.1 (clang-503.0.40)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> print "Hello World!"
    Hello World!
    >>> 

The emulator is a great place to learn the language by testing simple expressions and inspecting the results.  Type __CTRL-d__ to exit.

---

## Editing Python Scripts

To execute serious code, you need to create a Python _script_. Give the file a `.py` filename suffix, then modify it with your default __TextEdit__ app:

    $ touch hello.py
    $ open -e hello.py

Add this text to the file, then __Save__:

    #!/usr/bin/python
    print "Hello, World!"

---

## Running Python Scripts

Return to the Unix command line and run this:

    $ python hello.py 

It produces this output:

    Hello, World!

---

## Running Python Scripts (cont'd)

You can also make the script _executible_ in Unix...

    $ chmod 755 hello.py 

...after which you can run it in the directory where it resides:

    $ ./hello.py

The initial `#!` line identifies it as a Python script.

---

## Running Python Scripts (cont'd)

It's best to collect scripts in a single directory...

    $ mkdir -p ~/bin
    $ cd ~/bin
    $ touch hello.py
    $ chmod 775 hello.py
    $ open -e hello.py      # edit script

After you add this line to your `~/.bashrc` file and log back in, you can type `hello.py` from anywhere:

    export PATH="$HOME/bin:$PATH"

---

## Finding the Right Text Editor

The Mac's default __TextEdit__ program is _not_ very good for editing Python scripts.

Download [Brackets](http://brackets.io) or similar text editor that supports a Python editing _mode_.

Python-aware editors provide features such as syntax highlighting when editing files suffixed `*.py`.
