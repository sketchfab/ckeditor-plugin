CKEDITOR.plugins.add('sketchfab', {
    init: function(editor) {
        var bbCodeTag = 'sketchfab';

        editor.addCommand('openSketchfabDialog', new CKEDITOR.dialogCommand('openSketchfabDialog'));

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
                              '<p style="margin-top: 12px; font-weight: bold;">Embed a 3D model from <a style="margin-top: 12px; font-weight: bold;" target="_blank" href="https://sketchfab.com">Sketchfab.com</a> in your post</p>'
                    }, {
                        type : 'text',
                        id : 'url',
                        label : 'Model url',
                        validate : function() {
                            var url = this.getValue();
                            var regexp = /^(http|https):\/\/sketchfab.com\/show\/(.+)$/;
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
                            var modelId = url.substring(url.lastIndexOf('/') + 1);
                            data.modelId = modelId;
                        }
                    }, {
                        type: 'html',
                        html: '<p style="font-style:italic; font-size: 0.8em;">Example: https://sketchfab.com/show/x4ATBGtYWDF0yOyoi13xTwG9gkm</p>'
                    }]
                }],
                onOk: function() {
                    var dialog = this,
                        data = {};
                    this.commitContent(data);

                    editor.insertText('[' + bbCodeTag +']' + data.modelId + '[/' + bbCodeTag +']\n');
                }
            };
        });
    }
});