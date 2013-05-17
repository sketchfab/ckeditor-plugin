Sketchfab CKEditor Plugin - vBulletin 4 install
=============================================

How to install Sketchfab CKEditor plugin in vBulletin 4.

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

2. Add the Sketchfab CKE Plugin files
    1. Create a sketchfab/ folder in /forum/clientscript/ckeplugins
    2. Copy the contents of /src/vbulletin-4 in the created folder
    3. Edit plugin.js and set the variable `siteName` as your own site name (strip any special character)

3. Enable the plugin in vBulletin
    1. In the admin panel, go to Plugins & Products › Add new plugin
    2. Fill the form with the following details
        * Product: vBulletin
        * Hook location: editor_construct
        * Title: Sketchfab CKE
        * Execution order: leave default value
        * Plugin PHP code: `$this->config['_extraPlugins'] .= ',sketchfab';`
        * Plugin is active: Yes
    3. Save and Reload

4. Configure CKEditor
    1. Open /forum/vb/ckeditor.php
    2. Find the `setToolbar($toolbartype)` and add the 'Sketchfab' in the `$toolbar[]` array for all text-editor modes (qr, qe, ...), after the element where you want the button to appear (full code sample below)
    3. Save

5. Done ! (you may need to refresh your browser and server cache, or wait for a few minutes before the change is effective)
    * any question ? support@sketchfab.com


ckeditor.php sample code
------------------------

```
/**
 * Sets the toolbar options in the editor based on the editor type requested
 *
 * @var int Toolbar type 0 - Simple / 1 - Standard / 2 - WYSIWYG
 */
protected function setToolbar($toolbartype)
{
    $toolbar = array();
    $iespell = (is_browser('ie') AND !is_browser('ie64bit') AND !is_browser('mac'));
    $justify = (vB::$vbulletin->stylevars['textdirection']['string'] == 'ltr' ? array('JustifyLeft', 'JustifyCenter', 'JustifyRight') : array('JustifyRight', 'JustifyCenter', 'JustifyLeft'));
    if ($this->editor_type == 'qr')
    {
        $toolbar[] = array('RemoveFormat');
        $toolbar[] = array('PasteText', '-', 'Bold', 'Italic', 'Underline');
        $toolbar[] = array('Font', 'FontSize', 'TextColor');
        $toolbar[] = array('Smiley');
        $toolbar[] = array('Link', 'Email', 'Unlink', 'Image', 'Video', 'Sketchfab', '-', 'Quote');
        if ($iespell)
        {
            $toolbar[] = array('iespell');
        }
        $this->config['toolbar'] = $toolbar;
    }
    else if ($this->editor_type == 'qr_small')
    {
        $toolbar[] = array('RemoveFormat');
        $toolbar[] = array('PasteText', '-', 'Bold', 'Italic', 'Underline');
        $toolbar[] = array('Font', 'FontSize', 'TextColor');
        $toolbar[] = array('Smiley');
        $toolbar[] = array('Link', 'Email', 'Unlink', 'Image', 'Video', 'Sketchfab');
        if ($iespell)
        {
            $toolbar[] = array('iespell');
        }
        $this->config['toolbar'] = $toolbar;
    }
    else if ($this->editor_type == 'qe')
    {
        $toolbar[] = array('RemoveFormat');
        $toolbar[] = array('PasteText', '-', 'Bold', 'Italic', 'Underline');
        $toolbar[] = array('Font', 'FontSize', 'TextColor');
        $toolbar[] = array('Smiley');
        $toolbar[] = array('Link', 'Email', 'Unlink', 'Image', 'Video', 'Sketchfab', '-', 'Quote');
        if ($iespell)
        {
            $toolbar[] = array('iespell');
        }
        $this->config['toolbar'] = $toolbar;
    }
    else if ($this->editor_type == 'cms_article')
    {
        $toolbar[] = array('RemoveFormat');
        $toolbar[] = array('PasteText', 'PasteFromWord');
        $toolbar[] = array('Font', 'FontSize', 'TextColor');
        $toolbar[] = array('Smiley');
        $toolbar[] = array('Attach', '-', 'Undo', 'Redo');
        if ($iespell)
        {
            $toolbar[] = array('iespell');
        }
        $toolbar[] = '/';
        $toolbar[] = array('Bold', 'Italic', 'Underline');
        $toolbar[] = $justify;
        $toolbar[] = array('NumberedList', 'BulletedList', 'Outdent', 'Indent');
        $toolbar[] = array('Link', 'Email', 'Unlink', 'Image', 'Video', 'Sketchfab');
        $toolbar[] = array('Quote');
        $toolbar[] = array('Code', 'Html', 'Php');
        $toolbar[] = '/';
        $toolbar[] = array('Table', 'TableProperties', 'DeleteTable', '-', 'InsertRowBefore', 'InsertRowAfter', 'DeleteRow', '-', 'InsertColumnBefore', 'InsertColumnAfter', 'DeleteColumn', '-', 'Subscript', 'Superscript', 'HorizontalRule', 'PageBreak', 'PreviewBreak');

        $this->config['toolbar'] = $toolbar;
        $this->addCustomToolbarButtons();
    }
    else
    {
        $toolbar[] = array('RemoveFormat');
        $toolbar[] = array('PasteText', 'PasteFromWord');
        $toolbar[] = array('Font', 'FontSize', 'TextColor');
        $toolbar[] = array('Smiley');
        $toolbar[] = array('Attach', '-', 'Undo', 'Redo');
        if ($iespell)
        {
            $toolbar[] = array('iespell');
        }
        $toolbar[] = '/';
        $toolbar[] = array('Bold', 'Italic', 'Underline');
        $toolbar[] = $justify;
        $toolbar[] = array('NumberedList', 'BulletedList', 'Outdent', 'Indent');
        $toolbar[] = array('Link', 'Email', 'Unlink', 'Image', 'Video', 'Sketchfab');
        $toolbar[] = array('Quote');
        $toolbar[] = array('Code', 'Html', 'Php');
        $toolbar[] = '/';
        $toolbar[] = array('Table', 'TableProperties', 'DeleteTable', '-', 'InsertRowBefore', 'InsertRowAfter', 'DeleteRow', '-', 'InsertColumnBefore', 'InsertColumnAfter', 'DeleteColumn', '-', 'Subscript', 'Superscript', 'HorizontalRule');
        
        $this->config['toolbar'] = $toolbar;
        $this->addCustomToolbarButtons();
    }

    switch ($this->editor_type)
    {
        case 'fe':
        case 'qr':
        case 'qe':
            $editormode = $this->editor_type;
            break;
        case 'qr_small':
            $editormode = 'qr';
            break;
        default:
            $editormode = 'fe';
    }

    ($hook = vBulletinHook::fetch_hook('editor_toolbar_set')) ? eval($hook) : false;

    // unserialize the option if we need to
    if (!is_array( vB::$vbulletin->options['editormodes_array']))
    {
         vB::$vbulletin->options['editormodes_array'] = unserialize( vB::$vbulletin->options['editormodes']);
    }

    if ($toolbartype == 2 OR ($toolbartype == 1 AND vB::$vbulletin->options['editormodes_array'][$editormode] == 2))
    {
        array_unshift($this->config['toolbar'][0], '-');
        array_unshift($this->config['toolbar'][0], 'EnhancedSource');
    }
}
