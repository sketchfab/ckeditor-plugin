Sketchfab CKEditor Plugin - vBulletin 3.8 install
=============================================

How to install Sketchfab CKEditor plugin in vBulletin 3.8.

Warning
-------

Some files of the following installation might be overwritten if you update your version of vBulletin. Be sure to copy the files back after updating.

Walkthrough
-----------

1. Enable [sketchfab] bbCode support
    1. In the admin panel, go to Custom BB Codes › Add New BB Code
    2. Fill in the form with the following
        * Title: sketchfab
        * BB Code Tag Name: sketchfab
        * Replacement: ```<iframe frameborder="0" width="640" height="480" webkitallowfullscreen="true" mozallowfullscreen="true" src="http://sketchfab.com/embed/{param}?autostart=0&amp;transparent=0&amp;autospin=0&amp;controls=0&amp;watermark=1"></iframe>```
        * Example: [sketchfab]dGUrytaktlDeNudCEGKk31oTJY[/sketchfab]
        * Use {option}: No
        * Leave default value in all other fields
    3. Save

2. Add the Sketchfab Plugin files
    1. Copy the contents of /src/vbulletin-3.8/images/editor into your /your_vbulletin_path/images/editor folder
    2. Copy the file vbulletin_textedit.js from of /src/vbulletin/clientscript in the into your /your_vbulletin_path/clientscript folder


4. Edit vBulletin text editor template
    1. In the admin panel, go to 'Style and Templates' and search for the 'editor_toolbar_on' template
    2. Towards the end of the file, right after the following lines:

        ```
        <if condition="$vBeditTemplate['extrabuttons'] != '' ">
            <td><img src="$stylevar[imgdir_editor]/separator.gif" width="6" height="20" alt="" /></td>  
            $vBeditTemplate[extrabuttons]
        </if>
        ```


        Copy & paste these two lines:

        ```
        <td><img src="$stylevar[imgdir_editor]/separator.gif" width="6" height="20" alt="" /></td>
        <td><div class="imagebutton" id="{$editorid}_cmd_insertsketchfab"><img src="$stylevar[imgdir_editor]/sketchfab.png" width="21" height="20" alt="Embed a 3D model" /></div></td>
        ```

        and save.
        
    3. In the 'showthread_quickreply' template, copy and paste the same two lines right after:
    
        ```
        <if condition="$show['quote_bbcode']">
            <td><img src="$stylevar[imgdir_editor]/separator.gif" width="6" height="20" alt="" /></td>
            <td><div class="imagebutton" id="{$editorid}_cmd_wrap0_quote"><img src="$stylevar[imgdir_editor]/quote.gif" width="21" height="20" alt="$vbphrase[wrap_quote_tags]" /></div></td>
        </if>
        ```
        
        and save.
    
    4. In the 'postbit_quickedit' template, copy and paste the same two lines right after:

        ```
        <if condition="$show['quote_bbcode']">
            <td><img src="$stylevar[imgdir_editor]/separator.gif" width="6" height="20" alt="" /></td>
            <td><div class="imagebutton" id="{$editorid}_cmd_wrap0_quote"><img src="$stylevar[imgdir_editor]/quote.gif" width="21" height="20" alt="$vbphrase[wrap_quote_tags]" /></div></td>
        </if>
        ```
    
        and save.

5. Done ! (you may need to refresh your browser and server cache, or wait for a few minutes before the change is effective)
    * any question ? support@sketchfab.com
