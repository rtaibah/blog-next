---

title: "Howto: Fresh Ubuntu Install Without Losing Your Current Settings"
author: rami
layout: linuxologist
categories: [Blog]
tags: [ubuntu, howto, linux]
image: ubuntu-distros.jpg

---

![Ubuntu Distros](/assets/images/content/blog/ubuntu-distros.jpg)

**Warning**: There are  two commands mentioned in this how to, both that require double dashes -- -- but for some reason WordPress is not rendering that correctly. After each _dpkg_ hit _space_ and hit the dash button twice. Sorry for the the inconvenience.

A clean install or an upgrade? That's a question that keeps [tossed around](http://www.linux.com/feature/134517 "tossed around") every new **Ubuntu** release. Common wisdom would suggest that a clean install would probably be better, however the inconvenience of losing current installed apps and configuration makes most of us shy away from this path. But what if I told you that you could have the good of both worlds? A fresh install and keeping your apps and configuration intact?

## Configuration

Keeping your configuration intact is pretty straight forward and obvious. Just backup your /home folder onto an external drive or whatever. Make sure you also **grab the hidden files**, don't do my mistake!

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Crap! My backup of /home didn&#39;t include hidden files! Now I lost all my configuration!!</p>&mdash; Rami Taibah (@rtaibah) <a href="https://twitter.com/rtaibah/status/999382370">November 10, 2008</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Applications

Now for the current applications. Basically we just need to make a full list of the installed apps.

    sudo dpkg --get-selections \> /home/user/package.selections

Of course don't forget to backup *package.selections*on the external hard-drive. Also you should backup your */etc/apt/sources.list* file since you probably have some extra sources listed over there. Now you can go about your business and do a fresh install.

## Restore

Once your done with the fresh install, copy the file* package.selections* into your home. Then copy your *sources.list* file into /etc/apt/ and update it to match your current distro (e.g Gutsy --> Intrepid) you can use CTRL + H in gedit for that. Then do a "sudo apt-get update" ,and finally invoke:

    sudo dpkg --set-selections /home/package.selections && apt-get dselect-upgrade

apt-get will now start downloading all your apps, this will take some time depending on the number of apps you have installed.

Once that's done, just copy your backup-ed /home over the current /home (again don't forget hidden folders).

Log out and log back in to your shiny new fresh install!

**Edit:** As the commentators below also mentioned, it would also be wise to have your /home in a seperate partition (thanks Boo Radley), back  up /etc (thanks Bartek), and use the tar command to back up home (it will preserve your structure and permissions)

