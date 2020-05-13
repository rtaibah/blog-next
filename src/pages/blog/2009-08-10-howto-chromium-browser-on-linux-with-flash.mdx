---

title: "Howto: Chromium Browser On Linux With Flash"
author: rami
layout: linuxologist 
categories: [Blog]
tags: [chromium, linux, ubuntu, flash]
image: Chromium-Linux-Flash1-1024x640.png

---

Chromium is the Open Source project behind Google's browser Chrome. It aims to build a safer, faster, and more stable way for all  users to experience the web. Indeed as I type this on Chromium on an Ubuntu laptop, I can truly feel the speed. While Chromium on Linux is still in the pre-release stage, it does seem very stable, and could very well be a backup browser to Firefox if not completely replace it.

Around last year, we jumped through hoops by means of [Wine and Codeweavers to get Chromium up and running on Linux](/2008/09/chromium-googles-browser-on-linux-and-mac/) (and Mac.) Luckily things have evolved since last year; today we have a daily build of Chromium on Linux, and Ubuntu even has its own [PPA](https://launchpad.net/~chromium-daily/+archive/ppa)!


If you ever ventured into the Chromium territory on Linux, you will probably be disappointed that Flash doesn't work straight out of the box. However, a very simple hack will solve that and make Chromium a usable browser (we are praying for the day Adobe Flash dies, but thats another issue.)

![Chromium-Linux-Flash](/assets/images/content/blog/Chromium-Linux-Flash1-1024x640.png)

If you are on Ubuntu, you should just use the [PPA](https://launchpad.net/~chromium-daily/+archive/ppa). While other distros will probably different ways to get the daily builds (Google is a friend). However getting Flash to work would probably be the same across the board.

## Installing Chromium

If you never added software from a PPA, here is what you should do to get Chromium:

Add these two lines to your /etc/apt/sources.list: 

    deb http://ppa.launchpad.net/chromium-daily/ppa/ubuntu YOUR_UBUNTU_VERSION_HERE main

    deb-src http://ppa.launchpad.net/chromium-daily/ppa/ubuntu YOUR_UBUNTU_VERSION_HERE main

You may want to add the corresponding GPG key to your apt keyring.

    sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 4E5E17B5

Update: 

    sudo apt-get update

Install: 

    sudo apt-get install chromium-browser

## Getting Flash To Work

Now to get Flash running, we basically need to create a symbolic link of libflashplayer.so in the Chromium plugin folder: 

    cd /usr/lib/chromium-browser/plugin

    sudo ln -s ../../flashplugin-installer/libflashplayer.so

One final step is to change the execution command to your Chromium icon to this _(Note these flags have two "-", for some reason WordPress is rendering only one)_: 

    chromium-browser --enable-plugins --enable-greasemonkey --enable-user-scripts --enable-extensions

Thats it! If you face any problems, just leave a comment or [@rtaibah](http://twitter.com/rtaibah) on Twitter!

**Update:** Chromium also integerates very well with GNOME, just go to options menu > Personal Stuff > Set To GTK Theme OR even get [more themes](https://tools.google.com/chrome/intl/en/themes/index.html)
