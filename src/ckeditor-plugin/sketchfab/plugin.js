CKEDITOR.plugins.add('sketchfab', {
    init: function(editor) {
        var siteName = 'blenderartists';
        var bbCodeTag = 'sketchfab';

        var trim = function(str) {
            return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        };

        var c = editor.addCommand('openSketchfabDialog', new CKEDITOR.dialogCommand('openSketchfabDialog'));
        c.modes = {
            wysiwyg:1,
            source:1,
            enhancedsource: 1
        };

        editor.ui.addButton('Sketchfab', {
            label: 'Embed a 3D model from Sketchfab',
            command: 'openSketchfabDialog',
            icon: this.path + 'images/sketchfab-favicon.png'
        });

        var logoPath = this.path + 'images/sketchfab-logo.png';

        CKEDITOR.dialog.add('openSketchfabDialog', function(editor) {
            return {
                title: 'Embed a 3D model from Sketchfab',
                minWidth: 400,
                minHeight: 120,
                contents: [{
                    id: 'general',
                    label: 'Settings',
                    elements:  [{
                        type: 'html',
                        html: '<img style="float: left; width: 34px; margin-right: 5px; margin-bottom: 8px;" src="' + logoPath + '"/>' +
                              '<p style="margin-top: 12px; font-weight: bold;">Embed a 3D model from <a style="margin-top: 12px; font-weight: bold;" target="_blank" href="https://sketchfab.com/?utm_source=' + siteName + '&utm_medium=cke-plugin&utm_content=toplink&utm_campaign=' + siteName +'-cke-plugin"">sketchfab.com</a> in your post</p>'
                    }, {
                        type : 'text',
                        id : 'url',
                        label : 'Model url <span style="font-style:italic; font-size: 0.8em; line-height: 20px;">(example: https://sketchfab.com/show/x4ATBGtYWDF0yOyoi13xTwG9gkm)</span>',
                        validate : function() {
                            var url = this.getValue();
                            url = trim(url);
                            var regexp = /^(http|https):\/\/sketchfab.com\/(show|models)\/([^/]+)$/;
                            if (!regexp.test(url)) {
                                alert('Please enter a valid model url.\n\n' +
                                      '(example: https://sketchfab.com/show/x4ATBGtYWDF0yOyoi13xTwG9gkm)');
                                return false;
                            }
                            return true;
                        },
                        required : true,
                        commit: function(data) {
                            var url = this.getValue();
                            url = trim(url);
                            var modelId = url.substring(url.lastIndexOf('/') + 1);
                            data.modelId = modelId;
                        }
                    }, {
                        type: 'html',
                        html: '<p style="margin: 10px 0;"><a style="text-decoration:underline;" href="https://sketchfab.com/?utm_source=' + siteName + '&utm_medium=cke-plugin&utm_content=bottomlink&utm_campaign=' + siteName +'-cke-plugin" target="_blank">Sketchfab</a> is a free web service to publish interactive 3D models online without plugin.</p>'
                    }]
                }],
                onOk: function() {
                    var dialog = this,
                        data = {};
                    this.commitContent(data);

                    editor.insertText('[' + bbCodeTag +']' + data.modelId + '[/' + bbCodeTag +']');
                }
            };
        });
    }
});