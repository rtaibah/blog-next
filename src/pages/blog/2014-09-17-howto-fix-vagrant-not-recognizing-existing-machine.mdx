---

title: "HOWTO: Fix Vagrant Not Recognizing Existing Machine"
author: rami
layout: historical-blog 
categories: [Blog]
tags: [dev, vagrant]

---

I'v been using vagrant as a cornerstone of my development environment for a while now. This morning I booted up my machine, and tried to cd into my working directory only to be greeted with this:

    bash: cd: projects: No such file or directory

After a few seconds contemplating whether panic or confusion (or both) was the proper response, I fell back to confusion. Everything is on github anyways, I just didn't want to go through the cloning of my dotfiles and going through yet another bundle install.

I fired up VirtualBox GUI and found a new box. Apparently VirtualBox sometimes fails to report information about the machine; Vagrant did not recognize the original box and just imported my default base box. Maybe the system crashing last night was the culprit.

Here is how to fix a vagrant detachment.

    cd .vagrant/machines/default

    cp id id.bak #back up just in case

Grab the uuid of your original box using

    VBoxManage list vms

Now replace whatever uuid exists in the id file with the copied uuid from the VBoxManage command. You should be up and running now.
