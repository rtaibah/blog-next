---

title: "HOWTO: Optimize Your Eee PC Screen Real Estate"
author: rami
layout: linuxologist
categories: [Blog]
tags: [eee-pc, howto]
image: tiny-menu-plugin-for-firefox.png

---

You will probably notice that the default [Ubuntu install](/2008/02/11/howto-install-ubuntu-on-your-eee-pc) screws up your valuable real estate very badly, everything is just cramped up. We need to do the some tweaks to snug everything into it's place.

## Smaller Fonts:

    gconftool-2 --set /apps/nautilus/preferences/desktop_font --type string "Sans 8"
    gconftool-2 --set /desktop/gnome/interface/document_font_name --type string "Sans 8"
    gconftool-2 --set /desktop/gnome/interface/font_name --type string "Sans 8"
    gconftool-2 --set /apps/metacity/general/titlebar_font --type string "Sans Bold 8"
    gconftool-2 --set /desktop/gnome/interface/monospace_font_name --type string "Monospace 8"

_Note: Lines might get wrapped, you should paste each line separately in your command line, so just CTRL+- until you get 5 lines_

## All applications can go full-screen using F11

    gconftool-2 --set /apps/metacity/window_keybindings/toggle_fullscreen --type string "F11"


## Smaller toolbars using icons only

    gconftool-2 --set /desktop/gnome/interface/toolbar_style --type string "icons"


## Setting the right mixer (fixes the mute key)

    gconftool-2 --set /desktop/gnome/sound/default_mixer_tracks --type list --list-type string "[PCM]"

## Do not display the incorrect battery warning at login

    gconftool-2 --set /apps/gnome-power-manager/notify/low_capacity --type bool 0

## constrain windows to the top of the screen

    gconftool-2 --set /apps/compiz/plugins/move/allscreens/options/constrain_y --type bool 0

## Making the top & bottom panels smaller

    gconftool-2 --set /apps/panel/toplevels/top_panel_screen0/size --type integer 19
    gconftool-2 --set /apps/panel/toplevels/bottom_panel_screen0/size --type integer 19

## Resolution

You might get 640X480 resolution instead of the 800×480 default resolution. So run the following command: 

    sudo dpkg-reconfigure xserver-xorg

And choose the defaults on everything, except on the final stage choose 800X480

## Minimize the taskbar and autohide it

This one is pretty straight forward. Just right click on both taskbars (top and bottom) and set it to the minimum (19 pixels). You could also autohide the bars, even though I don't like it since a small portion of the taskbars appear when hidden. (Does anybody know how to change that?) 

## Optimizing Firefox Screen Space

1- To minimize your menu you can install the [tiny menu plugin](https://addons.mozilla.org/en-US/firefox/addon/1455 "tiny menu plugin"), [microfox](https://addons.mozilla.org/en-US/firefox/addon/354 "microfox"), or [littlefox plugin](https://addons.mozilla.org/en-US/firefox/addon/307 "littlefox plugin").

![Tiny Menu Plugin For Firefox](/assets/images/content/blog/tiny-menu-plugin-for-firefox.png)

![Microfox Plugin for Firefox](/assets/images/content/blog/microfox-plugin-for-firefox.png)

![Littlefox Plugin for Firefox](/assets/images/content/blog/littlefox-plugin-for-firefox.png)

2-Install the stop-or-reload plugin. This plugin merges the stop and reload button into one.

3- Install a compact theme like 
[Whitehart](https://addons.mozilla.org/en-US/firefox/addon/364 "Whitehart").

4-Install the [AutohideStatusBar plugin](http://caspar.regis.free.fr/ahs/ "AutohideStatusBar plugin"), to hide the status bar until you are near it.

5-Install the [Fullerscreen plugin](https://addons.mozilla.org/en-US/firefox/addon/4650 "Fullerscreen plugin") to get more space when going full screen.

6-Change the overall font size of firefox: 

    cd /home/user/.mozilla/firefox/*.default/chrome/

Then edit userChrome.css:

    kwrite userChrome.css

Then change it to look like this: 

    * {
    font-family: sans-serif !important;
    font-size: 8pt !important;
    }
