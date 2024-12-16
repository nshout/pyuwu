# PyUwU

Python with daddy issues. Be a biggw uwu sigma bean and bonk youw siwwy potty opwonnents befowe dey do a wittle cwashy-washy~ Dis wuvwy wanguage can onwy be whispered in da secwet weawm of the uwu abyss~

PyUwU is a Python preprosessor which translates regular Python code into brainrot by replacing certain keywords, operators, and built in functions with not safe for work kid vocabulary.

Implementation based on [Bython](https://github.com/mathialo/bython) and [PyUwU](https://github.com/shamith09/pyuwu).

## Content of README:

- [Key features](#key-features)
- [Code example](#code-example)
- [Installation](#installation)
- [Keyword mappings](#keyword-mappings)
- [Quick intro](#quick-intro)
- [Structure of the repository](#structure-of-the-repository)

## Key features

- Write Python using brainrot terms instead.

- Run PyUwU files using the `pyuwu` command, just like Python.

- Translate Python files to PyUwU and vice versa.

- Real Python keywords that have defined PyUwU mappings will not be allowed.

- Edit your PyUwU code with syntax highlighting with the `vscode-pyuwu` extension.

## Code example

![Code Example](https://github.com/nshout/vscode-pyuwu/blob/main/code-example.png?raw=true)

## Installation

You can install PyUwU directly from PyPI using pip (with or without `-H`, depending on your Python installation):

```
$ pip3 install pyuwu
```

If you for some reason want to install it from the git repository you can use `git clone` and do a local install instead:

```
$ git clone https://github.com/nshout/pyuwu.git
$ cd pyuwu
$ pip3 install .
```

The git version is sometimes a tiny bit ahead of the PyPI version, but not significantly.

To uninstall, simply run

```
$ pip3 uninstall pyuwu
```

which will undo all the changes.

To install the `vscode-pyuwu` extension for Visual Studio Code, visit:

[https://marketplace.visualstudio.com/items?itemName=nshout.vscode-pyuwu](https://marketplace.visualstudio.com/items?itemName=nshout.vscode-pyuwu)

## Keyword mappings

Below is a table of all of the Python keywords or operators that should be replaced by their corresponding PyUwU keyword. Python keywords that don't have a mapping or aren't in this table can just be used as is. If you want to request that a new mapping be made, please submit a pull request.

| Python Keyword/Operator | PyUwU Translation                   |
| ----------------------- | ----------------------------------- |
| try/except/finally      | touchu/oopsie/finawwy on that thang |
| return                  | nutmeback                           |
| -                       | slicey                              |
| +                       | addchu                              |
| print                   | showme                              |
| True                    | rawryes                             |
| False                   | uhhnno                              |
| def                     | makeitspwecial                      |
| while                   | spinme                              |
| import                  | sneakinu                            |
| from                    | fwommy                              |
| class                   | bigkitty                            |
| if/elif/else            | maybechan/probuwu/nuuuh             |
| for                     | foofie                              |
| break                   | snappie                             |
| continue                | keepgoingharder                     |
| assert                  | bettertwy                           |
| raise                   | upupup                              |
| in                      | getinsideme                         |
| is                      | izzitdaddy                          |
| and                     | smushuwu                            |
| or                      | maybuwu                             |
| not                     | dontdaddy                           |
| with                    | withdaddy                           |
| as                      | callmeow                            |
| global                  | thickywide                          |
| nonlocal                | nothere                             |
| del                     | eraseme                             |
| yield                   | spityou                             |
| yield from              | spitall                             |
| None                    | emptyload                           |
| pass                    | walkofshame                         |
| self                    | mewmew                              |
| range                   | biggyloop                           |
| >                       | daddybigger                         |
| <                       | daddytinier                         |
| ≥                       | daddybigormore                      |
| ≤                       | daddytinymore                            |
| ==                      | matchy                              |
| =                       | stuckonyou                          |
| async                   | naughtytime                         |
| await                   | goon4me                             |
| open                    | opendaddy                           |
| read                    | peekpeek                            |
| write                   | scribby                             |
| close                   | tightenup                           |
| list                    | boobies                             |
| set                     | cozyset                             |
| dict                    | sugarywhispers                      |

## Quick intro

PyUwU works by first translating PyUwU files (suggested file ending: .uwu) into Python-files, and then using Python to run them. You therefore need a working installation of Python for PyUwU to work.

To run a PyUwU program, simply type

```
$ pyuwu source.uwu arg1 arg2 ...
```

to run `source.uwu` with arg1, arg2, ... as command line arguments. If you want more details on how to run PyUwU files (flags, etc), type

```
$ pyuwu -h
```

to print the built-in help page. You can also consult the man page by typing

```
$ man pyuwu
```

PyUwU also includes a translator from Python to PyUwU. This is found via the `py2uwu` command:

```
$ py2uwu test.py
```

This will create a PyUwU file called `test.uwu`. A full explanation of `py2uwu`, is found by typing

```
$ py2uwu -h
```

or by consulting the man page:

```
$ man py2uwu
```

## Structure of the repository

At the moment, PyUwU is written in Python. The git repository is structured into 4 directories:

- `pyuwu` contains a Python package containing the parser and other utilities used by the main script
- `etc` contains manual pages and other auxillary files
- `scripts` contains the runnable Python scripts, ie the ones run from the shell
- `testcases` contains a couple of sample \*.uwu and \*.py files intended for testing the implementation
- [`vscode-pyuwu`](https://github.com/nshout/vscode-pyuwu) contains the Visual Studio Code extension that enables syntax highlighting in VS Code.
