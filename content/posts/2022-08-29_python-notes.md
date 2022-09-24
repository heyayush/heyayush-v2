## Introduction

- Programming Language
- Efficient high level data structures
- Elegant syntax and dynamic typing
- Runs on interpreter system
- Efficient in handling big data and perform complex mathematics
- Can be used in procedural way, an object-orientated way or a functional way.

## Syntax

- New line instead of semicolon to complete a command.
- Indentation, using whitespace to define scope instead of curly brackets.
- Indentation to indicate block of code.

## Variables

- Completely object oriented, and not "statically typed".
- You do not need to declare variables before using them, or declare their type.
- Every variable is an object.
- No command for declaring a variable. A variable is created the moment you first assign a value to it.
- Variable names are case-sensitive.

## Setting Virtual Environment

- virtualenv is a tool to create isolated Python environments.
- This prevents dependency collisions and undesired behaviors that would otherwise arise from premature or unintended version changes.

1. pip install virtualenv
2. cd into project directory
3. Run `virtualenv myvenv1`
4. Activate it by `myvenv1\Scripts\activate`
5. Deactivate it by `deactivate`
6. Creating requirements.txt `pip freeze > requirements.txt`
7. Installing packages from a requirements.txt by `pip install -r requirements.txt`

### Installing TA-Lib

1. download windows 64 bit binary it is a `.whl` file
2. go to that virtual env and then `pip install C:\Users\ayush\Downloads\TA_Lib-0.4.24-cp310-cp310-win_amd64.whl`
