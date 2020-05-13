---

title: "3 Reasons Why Your System Might Be Slow"
author: rami
layout: linuxologist
permalink: /2008/06/10/3-reasons-why-your-system-might-be-slow
categories: [Blog]
tags: [howto, linux]
summary: Computer users expect their systems to work well at all times, but unfortunately this isn't always the case. If your system becomes slow, there certainly is something you can do about it. This article will help you understand what's happening on the system, whether it's the computer in front of you or a system you're accessing remotely. Naturally, I presume you're running Linux, and the tools described here are Linux tools. If you're on some other weird system ;) , your mileage may vary.

---

_Editor's note: This is a guest blog by Martin Matusiak. Martin is a software engineer and a Linux enthusiast. He [blogs](http://www.matusiak.eu/numerodix/blog//) mostly about technology with emphasis on Open Source and Linux._

Computer users expect their systems to work well at all times, but unfortunately this isn't always the case. If your system becomes slow, there certainly is something you can do about it. This article will help you understand what's happening on the system, whether it's the computer in front of you or a system you're accessing remotely. Naturally, I presume you're running Linux, and the tools described here are Linux tools. If you're on some other weird system ;) , your mileage may vary.

![Slow Computer?]({{"assets/images/content/blog/slow-computer.jpg" | absolute_url }})

When we say _the system is slow_ we mean that it isn't responding to our input in a reasonable time, or taking too long to complete a task. This can happen when there is \*another\* program using too many system resources, starving \*your\* program of resources, causing it to run slowly

There are three common ways in which this can happen, and all three of these scenarios can be equally crippling and put your system into a state where it seems to be frozen. None of these situations are harmful to your system (ie. they make it slow until the problem is resolved, but they don't damage anything).

1- **A program is monopolizing the cpu.** 

A program is using all of the cpu cycles, blocking access to the cpu to other programs. This may be intentional (programs that do heavy processing) or accidental (programs get stuck repeating something over and over).

2- .**You're nearly out of physical memory.** 

You are either running too many programs, or programs that use too much memory. Your physical memory is almost entirely exhausted, and the running programs are using the harddisk as fallback memory, which is very slow.

3- **A program is doing heavy I/O.** 

You may be copying a large file, for instance. The program that is doing the copying is requesting lots of data from the harddrive, but while it's doing this the cpu is actually waiting for this data to be read from the harddrive, blocking access to other programs.

The impact of both cpu heavy and I/O heavy programs can be mitigated by tuning the kernel to be more responsive. If you are running a kernel supplied by one of the major distributions (Ubuntu, Fedora etc), then it's already finely tuned for your system, but even so you may still run into these problems sometimes, on your own system or some other one.

## 1. Cpu bound programs

### How it happens

![Infinite Loop Avenue?]({{"assets/images/content/blog/infiniteloop.jpeg" | absolute_url }})

The most common cycle for a program is to 1) accept some input, 2) do some work, 3) give some output. And this sequence is repeated for as long as the program is running. Typically, the work that has to be done takes a very short time compared to the time spent waiting for input, which gives all the other running programs a chance to use the cpu in the meantime.

If a program instead takes no input and gives no output and only does work all the time, then there is much less time in which the cpu is free for other programs to use. This will make the whole system very slow, because all programs have to wait a long time to get their turn.

### Demonstration

It's very easy to simulate this scenario. Here is an example. This program is a loop, which checks the condition (which is always true) and then performs the action in the loop (running the command \*true\*, which does nothing). No input, no output.

    $ while true; do true; done

Hit **Ctrl+C** when you've had enough.

### How to detect it

The easiest way to check for a cpu bound program is to use **top**. See if there is a program that's using almost 100% of the cpu. To be sure that it doesn't just occasionally spike leave it running for a while (or hit to refresh the display a few times).

    $ top
    Cpu0  : 98.2%us,  1.8%sy,  0.0%ni,  0.0%id,  0.0%wa,  0.0%hi,  0.0%si
    Cpu1  :  1.4%us,  0.5%sy,  0.0%ni, 98.2%id,  0.0%wa,  0.0%hi,  0.0%si
    
      PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
    26210 alex      20   0 19428 2368 1492 R   99  0.1   1:14.27 bash
     4075 alex      20   0  606m 195m  28m S    0  6.5  23:19.58 firefox
     6337 root      20   0  505m 116m 6716 S    0  3.9  34:30.25 Xorg

Here we see that cpu0 is idle (free) 0% of the time, which means it is as busy as it possibly can be. 98.2% is due to user programs (ie. the program we just demonstrated). And when we look in the list of programs, we see that **bash** (the shell in which we ran our one-liner) is using 99% of the cpu.

### What you can do about it

There are two cases of cpu bound programs -- the intentional and the accidental.
If you're running a program that does a lot of work on purpose, for instance a video encoding task, then the more cpu it uses the quicker it will finish, so using a lot of cpu is good. But if it's making your whole system slow, then you can lower the priority at which the programs gets access to the cpu, so that it only uses as much cpu as the other programs leave available. To do this, use the **renice** command:

    $ renice 20 26210

The first number you give to *renice* describes how "nice" you are being to other programs, on a scale from -20 (very selfish) to 20 (very nice). The other number is the process id (pid) of the program, which is listed by *top* above. Doing this will probably still make *bash* use almost 100% of the cpu, but not at the expense of the other programs.

On the other hand, if the program isn't supposed to be using this much cpu, then it's either a bug in the program (certain versions of firefox used to spike to 100% cpu) or it's just heavier than the cpu can handle. You can still *renice* the program, but this will make your system more responsive at the expense of the program (so for instance, firefox may become unusable). The last resort is to **kill** it:

    $ kill 26210

On multi-cpu systems this is less of a problem, because most programs can only use one cpu, which leaves the other cpus to serve all the other programs and keep your system responsive.

## 2. Physical memory is almost full

### How it happens

![100's of Apps running at the same time on Linux]({{"assets/images/content/blog/165-apps-on-linux.jpg" | absolute_url }})

There are two types of memory on your system: physical (RAM) and virtual (swap). Physical memory is relatively small and very quick to access, while virtual memory is just part of your harddisk being used as extra memory (very slow to access). As long as all the running programs can store their work in physical memory, everything is fine. (This is why it's good to have a lot of it.)

But once you fill all of the physical memory, the operating system will start moving some of the work into swap (onto the harddisk) to make space for new programs. You probably won't notice that this is happening. But when you switch from one program to another, and the second program has its work in swap, this work now has to be moved back into memory, and some of the stuff currently in memory has to be moved out to swap. This will definitely be noticeable and will make your system slow until it's finished.

The effect of this situation is that your system will feel normal for some of the time (when using the same program), and then very unresponsive from time to time (when switching between programs).

### Demonstration

This effect is best demonstrated with a desktop program. Start the [gimp](http://gimp.org) and create a canvas so large that it exceeds your available physical memory. For instance, try a canvas 10,000×10,000 pixels (*gimp* will tell you how much memory it needs to create it). It will probably take a while to create the canvas, so just let it finish. (In order to make room for this image in memory, other programs are being moved into swap, this is called **swapping**.) Then do some painting on the canvas. Now switch back to another program (firefox, for instance). You should now sense that your system is slow to respond, but this is temporary for as long as it takes to restore firefox into memory.

### How to detect it

It's a good idea to know how much memory your system uses under normal conditions, that way you can keep an eye on things. The command **free -m** will tell you about the state of your memory:

    $ free -m
                 total       used       free     shared    buffers     cached
    Mem:          3015       1640       1375          0          9        124
    -/+ buffers/cache:       1505       1509
    Swap:         2878                  2878

Here we see that we have 3015mb of physical memory, half of which is free. We also have almost as much swap memory, but none of that is in use.
After we create our huge canvas with the *gimp* we can run *free* again and see what has changed.

    $ free -m
                 total       used       free     shared    buffers     cached
    Mem:          3015       2993         22          0          2        957
    -/+ buffers/cache:       2033        982
    Swap:         2878        819       2059

We're now using 819mb of swap memory, so clearly we've exceeded the capacity of physical memory.

While *swapping* takes place *top* will also show that there is a lot of I/O activity taking place. (Press **Shift+M** to sort the program listing by memory use.)

    $ top
    Cpu(s):  4.0%us,  1.6%sy,  0.0%ni, 51.0%id, 42.1%wa,  0.6%hi,  0.8%si
    Mem:   3088224k total,  3043496k used,    44728k free,     3548k buffers
    Swap:  2947888k total,   998812k used,  1949076k free,   957956k cached
    
      PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
     2579 alex      20   0 1593m **1.4g**  13m S    0 47.0   0:22.26 gimp

Here we see that user and system activity adds up to only 6%, the cpu is idle 51% of the time, but spending 42% of the time waiting for I/O operations (ie. harddisk activity). And among the programs, the gimp alone is using 1.4gb of memory.

### What you can do about it

If you notice that your system becomes unresponsive when switching between programs, you have a pretty good idea that it's because of swapping. There is no way to make swapping faster, so what you should do is less swapping. Keep an eye on how much memory your system is using and you should also have an idea about the memory use of various programs (the big ones). When you notice heavy swapping, the easiest way to fix it is to shut down the program that's using the most memory. When you do this you free up physical memory. The data in swap will not automatically be moved into memory (because this is expensive), but you should notice that your system is performing normally again.

## 3. IO bound programs

### How it happens

Input/Output (I/O, also written \*io\*) is an umbrella term for \\\*everything\\\* that happens on your system that does not involve the cpu, the memory or the video card (gpu). When talking about performance, io usually means the harddrive, because that's what your system uses most heavily (and therefore what we spend the most time waiting for), but it can also refer to your network card, your cdrom drive, your keyboard etc.
A program running on the cpu, which does a lot of io (such as reading/writing large files), will spend a lot of time waiting for this io to complete. This leaves the cpu busy and other programs have less opportunity to run. The effect is that the whole system may become consistently unresponsive until the heavy io is completed.

### Demonstration

We can demonstrate the effect of heavy io by reading and writing a lot of data to the harddrive. Here we find the device that your root partition is on (probably */dev/sda1*) and then read 5gb from it, writing it to a file */tmp/dummy* (you may want to check that you have enough free space).

    $ device=`mount | grep " / " | awk '{ print $1 }'`
    $ sudo dd if=$device of=/tmp/dummy bs=5120 count=1048576

This should take around 10 minutes, so you can see how your system behaves while this is happening.

### How to detect it

We can detect heavy io with *top*.

    $ top
    Cpu0  : 13.7%us,  6.5%sy,  0.0%ni,  0.0%id, 79.0%wa,  0.8%hi,  0.0%si
    Cpu1  :  4.7%us,  3.9%sy,  0.0%ni, 73.2%id, 17.3%wa,  0.8%hi,  0.0%si
    
      PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND
    30956 root      20   0 10388 1812  640 D    5  0.1   0:02.76 dd

Here we see that cpu0 is spending 79% of its time waiting for io. In the list of programs we see the program *dd* that we ran. It's only using 5% cpu, which seems to conflict with the number 79%, but then we see it has status **D**, which means waiting for io. The reason for this is that while *dd* is only doing actual work on the cpu 5% of the time, it's still using a lot of cpu time because of all the io.

Most io is harddrive io, but we can see if this is the case with the tool **atop**, which is similar to *top*.

    $ atop
    CPU | sys     14% | user     21% | irq       2% | idle     39% | wait    125% |
    cpu | sys     10% | user     11% | irq       2% | idle      0% | cpu000 w 78% |
    cpu | sys      4% | user     10% | irq       0% | idle     38% | cpu001 w 48% |
    DSK |         sda | busy     98% | read    1371 | write   1011 | avio    4 ms |
    
      PID  SYSCPU  USRCPU  VGROW  RGROW  RDDSK  WRDSK  ST EXC S  CPU CMD     1/4
    30956   0.60s   0.00s     0K     0K 113.4M 114.0M  **   * D   6% dd

Here we again see that the program *dd* has status **D** (io wait), and cpu0 is spending 78% waiting for io. In addition, we see that the harddrive *sda* (which is the one we are reading and writing to, */dev/sda*) is busy 98% of the time. So we know that it's the harddrive that's responsible for using 78% of cpu0.

### What you can do about it

If your system becomes unresponsive because of io, it is because the cpu is not being shared among the programs in a way that allows them all to stay responsive. So the answer is to prioritize certain programs over others. **ionice** is the io counterpart to *nice*.

    $ ionice -p30956 -n7

Here we are telling *ionice* first the process id of the program, and then the io priority it should have, on a scale from 0 (highest priority) to 7 (lowest).

