---

title: "Downloading Music the 1337 Way!"
author: rami
layout: linuxologist
categories: [Blog]
tags: [bash-scripting, linux, music, howto]

---

**NOTE: This howto is for Linux users. If you are a Windows user go [pay someone](http://www.flvsoft.com/flv_to_video/purchase.html) $40 and then [another](http://www.avi2divx.com/extract-audio.htm) $15. Good luck.**


So you are at work and really want a song but just can't get it because torrenting at work is blocked or could really get you in trouble? No problem, why not use [youtube](http://youtube.com)? Chances are that the song is already there on some video, either the official music video or some random compilation!

Search for a video that has the song you are looking for, then download the video using [keepvid](http://keepvid.com) and save it on your desktop. Now you will need a script to convert your newly downloaded video from .flv to .avi. So fire up your favorite text editor and copy this into it:

    #!/bin/sh
    if [ -z "$1" ]; then
    echo "Usage: $0 {-divx|-xvid} list_of_flv_file
    exit 1
    fi

    # video encoding bit rate
    V_BITRATE=1000

    while [ "$1" ]; do
    case "$1" in
    -divx)
    MENC_OPTS="-ovc lavc -lavcopts

    vcodec=mpeg4:vbitrate=$V_BITRATE:mbd=2:v4mv:autoaspect"
    ;;
    -xvid)
    MENC_OPTS="-ovc xvid -xvidencopts bitrate=$V_BITRATE:autoaspect"
    ;;
    *)
    if file "$1" | grep -q "Macromedia Flash Video"; then
    mencoder "$1" $MENC_OPTS -vf pp=lb -oac mp3lame
    -lameopts fast:preset=standard -o
    "`basename $1 .flv`.avi"
    else
    echo "$1 is not Flash Video. Skipping"
    fi
    ;;
    esac
    shift
    done

Save the file as flv2avi.sh Next chmod it and move it into your /usr/bin (while you are in the directory of the script)

    sudo chmod a+x flv2avi.sh
    sudo mv flv2avi.sh /usr/bin/flv2avi.sh

Ok so now we are ready to convert our downloaded .flv file to avi, so run this command (while you are in the directory of the video)

    flv2avi.sh -divx name_of_file.flv

After some crunching you will get a new file called name_of_file.avi, all you need now is to strip the sound from the video. Use the following command:

    mplayer name_of_file.avi -ao pcm:file=temp1.wav

Thats it! You got your song in a .wav format. Convert the .wav file into whatever format you prefer :)
