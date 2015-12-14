# Strings

- 'foo'
- "bar"
- 'foo' "bar"
- _concatenation_

- "the 'foo' bar"

- "\nfoo\n"

- codes: \\ \' \" \n \t (special char)

- """\nfoo\n"""

- _here files_

>>> print '{1} and {0}'.format('spam', 'eggs')

>>> print 'The value of PI is approximately %5.3f.' % math.pi

- print foo

- print: interpolation or printf(%)



\newline Ignored        
\\       Backslash (\)   
\'       Single quote (')        
\"       Double quote (")         
\a       ASCII Bell (BEL)          
\b       ASCII Backspace (BS)       
\f       ASCII Formfeed (FF)         
\n       ASCII Linefeed (LF)          
\N{name} Character named name in the Unicode database (Unicode only)     
\r       ASCII Carriage Return (CR)   
\t       ASCII Horizontal Tab (TAB)    
\uxxxx   Character with 16-bit hex value xxxx (Unicode only)    (1)
\Uxxxxxxxx         Character with 32-bit hex value xxxxxxxx (Unicode only)      (2)
\v                 ASCII Vertical Tab (VT)    
\ooo               Character with octal value ooo       (3,5)
\xhh               Character with hex value hh          (4,5)

- input('prompt> ')
- len(str)
