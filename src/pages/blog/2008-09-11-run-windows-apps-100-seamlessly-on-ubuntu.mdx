---

title: "Run Windows Apps 100% Seamlessly on Ubuntu!"
author: rami
layout: linuxologist
categories: [Blog]
tags: [linux, linuxologist, windows, ubuntu]
image: linux-web20.png

---

I know that most of us Linux user usually cringe whenever we need to \*god forbid\* use a Microsoft WIndows machine. So we created applications like Wine in an effort minimize the contact with that horrid machine. With Wine a big percentage of Windows only apps could run on Linux, which more or less takes Windows out of the equation and lets us interact directly with our favorite App. Another solution of course would be installing Windows on a virtual machine.


But running an app on a virtual machine doesn't eliminate Windows from the equation. Right? So I will show you now how to run Windows apps 100% seamlessly on Ubuntu. You know something like this:

![Linux Web 2.0](/assets/images/content/blog/linux-web20.png)

## Tools

1. Windows installed on Vmware. ( I assume you have one or know how to create one)
2. [rdesktop](http://www.rdesktop.org/), you can grab that from apt-get or directly download it from their site
3. [SeamlessRDP](http://www.cendio.com/files/thinlinc/seamlessrdp/seamlessrdp.zip), download it an extract it in your Windows VM in c:/seamless

## What to do:

**In Windows VM**

1. In the Windows VM, get the local IP address of that machine using the Ipconfig command in DOS.
2. Also give that machine a static IP (Not DHCP). This will help you later when invoking the launch command, you won't need to change the IP everytime
3. Create a new Windows admin user, let's call it Linux for now (Password:123123)
4. Finally, we want to make Windows launch without a Desktop. So launch your registry editor (regedit in run) and navigate to: HKEY\_CURRENT\_USER -> Software -> Microsoft -> Windows -> CurrentVersion -> Policies -> Explorer. Once there create a new DWORD entry and call it "NoDesktop" and then change it's value to 1\.

**On Ubuntu Linux**

Right click on your desktop and choose "create launcher". In type, keep it as is (application), for name name it whatever you please (I named it Windows-VM), and in command type in 

    rdesktop -A -s 'c:seamlessseamlessrdpshell.exe c:windowsexplorer.exe' 192.168.1.104 -u linux -p 123123
    
Of course you will need to change the IP to your IP and the password (123123) to whatever password you chose. Thats it! Double click on the launcher and you will shortly get a the Windows taskbar on the bottom. Of course if you want to totally get rid of MS nuisance, just enable the autohide option ;)
