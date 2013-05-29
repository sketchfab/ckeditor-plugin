/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * Configurations for IP.Board (default)
 */
CKEDITOR.editorConfig = function( config )
{
    /* Styles */
    config.skin   = 'ips';
    config.uiColor = '#ebebeb';
    
    /* RTL */
    if( isRTL )
    {
        config.contentsLangDirection    = 'rtl';
    }
    
    CKEDITOR.lang.languages.ipb     = 1;
    config.language                 = 'ipb';
    
    /* Disable width resize */
    config.resize_maxWidth = '100%';

    /* Use p */
    config.enterMode      = CKEDITOR.ENTER_P;
    config.forceEnterMode = false;
    config.shiftEnterMode = CKEDITOR.ENTER_BR;
    
    /* Hide advanced options */
    config.linkShowAdvancedTab = false;
    config.linkShowTargetTab   = false;
    
    /* Use numerical entities instead of named entities */
    //config.entities_processNumerical = 'force';
    
    /* Hide elements path body > strong etc, and the right click context menu */
    IPS_remove_plugins.push('a11yhelp');
    IPS_remove_plugins.push('elementspath');
    IPS_remove_plugins.push('contextmenu');
    IPS_remove_plugins.push('flash');
    IPS_remove_plugins.push('filebrowser');
    IPS_remove_plugins.push('iframe');
    IPS_remove_plugins.push('scayt');
    IPS_remove_plugins.push('smiley');
    IPS_remove_plugins.push('table');
    IPS_remove_plugins.push('tabletools');
    IPS_remove_plugins.push('wsc');
    
    config.removePlugins = IPS_remove_plugins.join(',');
    
    /* Only use font-sizes we recognize */
    config.fontSize_sizes   = '8/8px;10/10px;12/12px;14/14px;18/18px;24/24px;36/36px;48/48px';
    
    /* Register our custom plug ins */
    if ( inACP )
    {
        config.extraPlugins = 'ipsbbcode,ipsquote,ipscode,ipsmedia,ipsoptions';
    }
    else
    {
        config.extraPlugins = 'ipsbbcode,ipsquote,ipscode,ipsmedia,ipsautosave,ipsswitch,pastefromword,ipsemoticon';
    }
    config.extraPlugins += ',sketchfab';
    
    config.disableNativeSpellChecker = false;
    
    /* Define tool bars */
    config.toolbar = new Array( 'ipsfull', 'ipsmini' );
    
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
    
};
