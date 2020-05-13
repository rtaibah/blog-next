---

title: "Ext4 Filesystem Explained in Plain English"
author: rami
layout: linuxologist 
categories: [Blog]
tags: [linux, ext, filesystems]
image: harddrive.jpg

---

![Harddrive](/assets/images/content/blog/harddrive.jpg)

Linux Kernel 2.6.28 was released while you were partying on New Years and declared the much anticipated Ext4 filesystem as stable. The web buzzed on [how fast and reliable Ext4](http://arstechnica.com/journals/linux.ars/2009/01/12/super-fast-ext4-filesystem-arrives-in-ubuntu-9-04) and the Ubutnu community celebrated to the news that the [upcoming 9.04 version will include Ext4](http://www.linux-magazine.com/online/news/ubuntu_9_04_supports_ext4). Ext4 brings a lot of enhancements, but to a non-technical person like me it does sound confusing, with a lot of technical terms that don't make much sense. So I thought I should read up and do my best to understand Ext4 and how it will enhance our day-to-day computing experience.

## Extents

For a system to write a file on a hard disk, it needs a methodology and specific instructions to allocate space. The old Ext3 uses a block mapping scheme: A 100 Mb file will be mapped as 25600 blocks (each block 4Kb), the bigger the file the more blocks it will map, and huge mapping will lead to slower handling.

Today, with the explosion of multimedia and high-speed Internet, this method seems ineffecient. So, Ext4 introduces the concept of Extents. **An extent is basically a bunch of blocks**. So for our example 100 Mb file, it will basically say "write the data is in the next n blocks" instead of mapping each individual block separately. Ext4 will support up to 128 Mb extents, so for a 1000 Mb file (or 1 Gb), it will map 10 extents instead of 256,000 blocks. This will ultimately improve performance and also help in reducing fragmentation.


![extents](/assets/images/content/blog/extents.png)

## Multiblock Allocation

Sounds confusing right? Well let me explain: In our 100 Mb example, Ext3 uses a block allocator that decides which free blocks will be used to write the data. But this allocator can only allocate one block at a time, meaning that a 100 Mb file will need to call the allocator 25600 times! Not exactly efficient right? It's even worse when one realizes that this block allocator cannot optimize its allocation policy because it doesn't really how many times it will be called to allocate! It doesn't really know the size of the file its being asked allocate!

Ext4 will support multi-block allocation, which allocates many blocks in a single call, instead of a single block per call, avoiding a lot of overhead.

## Backward Compatibility

If you need the advantages of Ext4, your existing Ext3 can be easily "upgraded" to Ext4 without the need to format. This means that all your data will stay intact once you upgrade (though I would highly recommend backing up)

## Online Defragmentation

While the above features greatly reduce the amount of fragmentation in your hard disk, time will most certainly lead to some form of fragmentation. Ext4 will have an [online tool ](http://www.kernel.org/pub/linux/kernel/people/tytso/ext4-patches/2.6.28-ext4-3/broken-out/defrag-09-online-defrag-command)which can defragment individual files or entire file systems.(This feature is still not implemented in Linux Kernel 2.6.28, but will be included in future releases.)

## Bits and Pieces

* Faster file system checking: Unallocated blocks are skipped --> Faster checking
* Improved timestamps: Up to the nanosecond. Which will defer the year [2038 problem](http://en.wikipedia.org/wiki/Year_2038_Problem)
* Unlimited subdirectories: Ext3 had a limit of 32,000
* Larger files: Ext4  can support volumes with sizes up to 1 exabyte and files with sizes up to 16 terabyte

## Ext4 Put to The Test

The popular Linux hardware blog [Phoronix ran an extensive test on the Ext4 ](http://www.phoronix.com/scan.php?page=article&item=ubuntu_ext4&num=1)benchmarking it against other popular Linux filesystems like Ext3, XFS, JFS, and ReiserFS. The most beaming result was 4GB file writing performance. Ext4 totally blew the others filesystems out of the water:


![ext4-write-performance](http://192.168.1.33/blog2/wp-content/uploads/2009/01/ext4-write-performance.png)Softpedia also ran another test on an Ubuntu system and found that [Ext4 shaved 8.7 seconds from the system's booting time](http://news.softpedia.com/news/Ubuntu-9-04-Boots-in-21-4-Seconds-101885.shtml):

* Ubuntu 8.10 with EXT3 filesystem boots in 31.8 seconds (on the AMD Sempron system);
* Ubuntu 9.04 Alpha (Build 20090112.1) with EXT3 filesystem boots in 28.3 seconds (on the AMD Sempron system);
* Ubuntu 9.04 Alpha (Build 20090112.1) with EXT4 filesystem boots in 23.1 seconds (on the AMD Sempron system).
* Ubuntu 8.10 with EXT3 filesystem boots in 26.8 seconds (on the Intel Core 2 Duo system);
* Ubuntu 9.04 Alpha (Build 20090112.1) with EXT3 filesystem boots in 24.5 seconds (on the Intel Core 2 Duo system);
* Ubuntu 9.04 Alpha (Build 20090112.1) with EXT4 filesystem boots in 21.4 seconds (on the Intel Core 2 Duo system)!
