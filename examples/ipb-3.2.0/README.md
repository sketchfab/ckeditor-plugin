Sketchfab CKEditor Plugin - Invision Power Board 3.2.0 install
==============================================================

How to install Sketchfab CKEditor plugin in Invision Power Board using CKEditor

Walkthrough
-----------

1. Enable [sketchfab] bbCode support
    1. In the admin panel, go to Look & Feel › Post Content › BBCode Management 
    2. Click Add BBCode
    3. Fill in the form with the following
        * Custom BBCode: Sketchfab
        * Custom BBCode Description: Embed 3D Sketchfab models into your posts
        * Custom BBCode Example: [sketchfab]dGUrytaktlDeNudCEGKk31oTJY[/sketchfab]
        * Custom BBCode Tag: sketchfab
        * Custom BBCode Aliases (Optional): skfb
        * Single Tag Only: No
        * Use Option in tag?: No
        * Option Regular Expression Filter: leave empty
        * Option is optional?: No
        * Switch option and content?: No
        * Prevent other codes parsing? Yes
        * Custom BBCode Replacement: ```<iframe frameborder="0" width="640" height="480" webkitallowfullscreen="true" mozallowfullscreen="true" src="http://sketchfab.com/embed/{content}?autostart=0&amp;transparent=0&amp;autospin=0&amp;controls=0&amp;watermark=1"></iframe>```
        * OR PHP file to execute: leave empty
        * Which groups can use this BBCode?: All current and future groups
        * Where can the BBCode be used?: Available in all sections
        * BBCode Application: System
        * BBCode Image: leave empty
        * Enter 'option' dialogue text: leave empty
        * Enter 'content' dialogue text: Id of your 3D model
    3. Save (click Add BBCode)

2. Add the Sketchfab CKE Plugin files
    1. Copy the folder /src/ckeditor-plugin/sketchfab in the /public/js/3rd_party/ckeditor/plugins folder
    3. Edit plugin.js and set the variable `siteName` as your own site name (strip any special character)

3. Configure CKEditor
    1. Edit the /public/js/3rd_party/ckeditor/ips_config.js
    2. After the lines

        /* Register our custom plug ins */
        if ( inACP )
        {
            config.extraPlugins = 'ipsbbcode,ipsquote,ipscode,ipsmedia,ipsoptions';
        }
        else
        {
            config.extraPlugins = 'ipsbbcode,ipsquote,ipscode,ipsmedia,ipsautosave,ipsswitch,pastefromword,ipsemoticon';
        }

    add:
        config.extraPlugins += ',sketchfab';

    3. Update the config.toolbar_ipsfull and config.toolbar_ipsmini variables to add the Sketchfab button where wanted. Example:

        config.toolbar_ipsfull =
            [
                ['Ipsswitch', '-', 'RemoveFormat', '-',  'PasteFromWord', '-', 'Ipsbbcode', '-', 'Font', 'FontSize', 'TextColor', 'Ipsemoticon', '-', 'Ipsmedia', '-' ], ['Find', 'Replace'], '-', ['Undo', 'Redo'],
                '/',
                ['Bold', 'Italic', 'Underline', 'Strike' ], ['Subscript', 'Superscript'], ['BulletedList', 'NumberedList'],
                ['Link', 'Unlink', 'Image', '-', 'Sketchfab', '-', 'Ipscode', 'Ipsquote' ], config.IPS_BBCODE_BUTTONS, ['Outdent', 'Indent', 'JustifyLeft','JustifyCenter','JustifyRight']
            
            ];

            config.toolbar_ipsmini =
            [
                ['Ipsswitch', 'RemoveFormat' ], ['Bold', 'Italic', 'Underline', 'Strike' ], ['BulletedList'], [ 'Font', 'TextColor'], ['Smiley', '-', 'Link', 'Unlink', 'Image', '-', 'Sketchfab', '-', 'Ipsmedia', '-', 'Ipscode', 'Ipsquote']
            ];


    3. Save. An example of the configured ips_config.js file is provided as a reference in /src/ipb-3.2.0/ips_config.js

4. Done ! (you may need to refresh your browser and server cache, or wait for a few minutes before the change is effective)
    
    * any question ? support@sketchfab.com

