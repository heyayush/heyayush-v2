---
template: post
title: Installing Zsh on Windows 10
draft: false
date: '2021-05-04T12:00:00.000Z'
description: >-
  Zsh is awesome, let's use it on windows as well.
category: Developer Tools
tags:
  - CLI
  - Developer Tools
---

## 1. Activating "Windows for Linux Subsystem" feature

Run this script on powershell

`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

Better to follow this guide https://docs.microsoft.com/en-us/windows/wsl/install-win10
and make sure to use wsl 2.
That will further help in vscode integration.
This VS Code extension will be useful- "Remote - WSL"
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl

Restart your machine.

## 2. Install a Linux Distribution

Open Microsoft Store App, search for a disto and install it.
I went with Ubuntu 20.04

## 3. Install Zsh

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install zsh
zsh
```

Proceed with the basic configuration of zsh
If you have an existing .zshrc .profile .bashrc which you want to use then go to c:/Users/{name}/AppData/Local/Packages/{disto name}/LocalState/rootfs/home/{name} and then update those files and restart your terminal.

Adding github ssh keys to .profile so that I don't have to enter credentials everytime on push
I usually set all the default starting script in the .profile file and then source it in .zshrc
`source ~/.profile`

```
eval $(ssh-agent)
ssh-add ~/.ssh/githu
```

Make sure that only owner has the read permission to this file. set chmod 400 to the private public key files

## 4. Install Oh My Zsh!

```
sudo apt-get install curl
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

You can also play around with the plugins available for zsh

## 5. Setup VS Code shell integration

Go to user settings.

Currently I was having bash installed

`"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",`

So replaced this with

`"terminal.integrated.shell.windows": "C:\\Users\\ayush.sharma\\AppData\\Local\\Microsoft\\WindowsApps\\ubuntu.exe",`

## 6. Install Node

Node for windows is fine but you will need to install it for your disto as well.

```
sudo apt-get install build-essential

export NVM_DIR="$HOME/.nvm" && (
  git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
  cd "$NVM_DIR"
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"

```

Need to add this in the .profile or .zshrc wherever you are keeping the default startup commands

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

You may also look at nvm docs for installation instructions.

\- Ayush 🙂
