---

title: "Howto: Your Perfect Ubuntu on Your Perfect Eee PC"
author: rami
layout: linuxologist
categories: Blog
tags: [eee-pc, ubuntu, howto]
summary: Now that you [installed Ubuntu](/2008/02/11/howto-install-ubuntu-on-your-eee-pc) on your Eee PC, you will soon realize that something is amiss. Wireless doesn't work, shutdown almost never works, the whole desktop seems to be cramped onto a small screen...etc. Now it's time to perfect our Ubuntu.

---

Now that you [installed Ubuntu](/2008/02/11/howto-install-ubuntu-on-your-eee-pc) on your Eee PC, you will soon realize that something is amiss. Wireless doesn't work, shutdown almost never works, the whole desktop seems to be cramped onto a small screen...etc. Now it's time to perfect our Ubuntu.

**Note: This guide is built on the assumption that you have no swap and that you got madwifi working NOT ndiswrapper.**

## CDROM tweaks

First of all and before installing any apps or configuring anything, we need to do two very basic things. Since we don't have a CDROM on our Eee PC's, we should stop it from booting. A minor tweak in a file called /etc/fstab should do the trick. 

    sudo gedit /etc/fstab 

And reference out (add a # before the line) the following: 

    /dev/sdc1 /media/cdrom0 udf,iso9660 user,noauto,exec 0 0

Next we should reference out the CDROM from our installation repository (your not going to lug around that external CDROM are you :p ?).

    sudo gedit /etc/apt/sources.list

Add a # at the beginning of this line (the exact wording of the line will probably differ, you just need to make sure of the "deb cdrom" at the beginning) :
  
    deb cdrom [Ubuntu 7.10 Gutsy Gibbon - Release i386 (20071016)] gutsy main restricted

This can also be accomplished by unchecking the CD-ROM from System > Administration > Software Sources.

## Fitting in the tiny desktop

I bet you wanna fit your desktop snuggly in that screen of yours, check out my [Optimizing Your Eee PC Real Estate](/2008/03/07/howto-optimize-your-eee-pc-screen-real-estate) post.

## Improve The Eee PC boot time

Xandros default desktop booted blazingly fast, perhaps around 15 seconds. With Ubuntu it takes much longer, we are hackers, and we will fix that! Right boys? Ok so here what will need to do. First of all add a small simple line in the etc/init.d/rc file:

    sudo /etc/init.d/rc

Now find the line CONCURRENCY=none, and change it to CONCURRENCY=shell (doing this will help the init scripts to run in parallel). You might also want to change the order of the hal scripts at boot time:

    sudo mv /etc/rc2.d/S12hal /etc/rc2.d/S13hal  
    sudo mv /etc/rc3.d/S12hal /etc/rc3.d/S13hal  
    sudo mv /etc/rc4.d/S12hal /etc/rc4.d/S13hal  
    sudo mv /etc/rc5.d/S12hal /etc/rc5.d/S13hal

## Fixing the Eee PC wireless

The default Atheros wireless card is not supported by default. But madwifi has released a patch to allow it to run on Linux. You will need a workable Internet connection for this via your ethernet. So lets get down and dirty!

Ubuntu comes with a "restricted drivers" function which tries to run the proprietary hardware on your system. We need to disable that first to avoid any conflict.

    sudo chmod 644 /etc/init.d/linux-restricted-modules-common

Now we will need to install the tools for compiling the driver, downloading the driver, and finally installing it.

    sudo apt-get install build-essential  

Then get these these two files from [here](http://snapshots.madwifi.org/madwifi-ng/madwifi-ng-r2756-20071018.tar.gz "here") and [here](http://madwifi.org/attachment/ticket/1679/madwifi-ng-0933.ar2425.20071130.i386.patch?format=raw "here"). Then extract them and compile (You have to be in the download directory in your terminal!)

    tar zxvf madwifi-ng-r2756-20071018.tar.gz  
    cd madwifi-ng-r2756-20071018  
    patch -p0 madwifi-ng-0933.ar2425.20071130.i386.patch?format=raw  
    make clean  
    make  
    sudo make install  
    sudo reboot

After reboot you should have your wireless up and running :) !!

Note: I personally hate the default network manager of Ubuntu, so I usually opt for another [program called wicd](/2007/12/06/wicd-the-solution-for-all-your-linux-wireless-woes).

## Eee PC microphone

    sudo nano /etc/modprobe.d/alsa-base

And add options snd-hda-intel model=3stack-dig

## Reducing drive writes on Eee PC

Set the 'noatime' or 'relatime' mount options in the /etc/fstab file. 
Look for the defaults section and add make it defaults,noatime instead.Also add this at the end of the file:

    tmpfs /var/log tmpfs defaults 0 0 
    tmpfs /tmp tmpfs defaults 0 0 
    tmpfs /var/tmp tmpfs defaults 0 0

## Eee PC Shutdown Fix

Many users experience an issue where their machine does not turn off when set to shutdown. This is due to a module not being removed and the sound subsystem remaining active. One workaround for this issue is to make sure the module is properly removed when the system goes down by adding it to the **halt** shutdown script.

Add **modprobe -r snd-hda-intel** to your **/etc/init.d/halt** file should workaround this issue. On my machine I have placed it just within the stop function as seen in the example below:

    `do_stop () {  
    modprobe -r snd-hda-intel  
    if [ "$INITHALT" = "" ]  

## Eee PC suspend and resume

Edit your /etc/default/acpi-support file

    sudo nano /etc/default/acpi-support

Change SAVE_VBE_STATE to false

    # Should we save and restore state using the VESA BIOS Extensions?  
    SAVE_VBE_STATE=false

Leave POST_VIDEO as true

    # Should we attempt to warm-boot the video hardware on resume?  
    POST_VIDEO=true
    Enable SAVE_VIDEO_PCI_STATE

    # Save and restore video state?  
    SAVE_VIDEO_PCI_STATE=true

Enable DPMS

    # Should we switch the screen off with DPMS on suspend?  
    USE_DPMS=true

## Other Eee PC resources

[http://wiki.eeeuser.com/ubuntu](http://wiki.eeeuser.com/ubuntu "http://wiki.eeeuser.com/ubuntu")

[http://wiki.eeeuser.com/yet\_another\_way\_to\_install\_ubuntu\_710](http://wiki.eeeuser.com/yet_another_way_to_install_ubuntu_710 "http://wiki.eeeuser.com/yet_another_way_to_install_ubuntu_710")

