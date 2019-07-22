define([
    'require',
    'jquery',
    'base/js/namespace',
    'base/js/events',
    'notebook/js/codecell',
    'codemirror/lib/codemirror',
    './highlight_rules',
], function (
    requirejs,
    $,
    Jupyter,
    events,
    codecell,
    CodeMirror,
    highlight_rules
) {
    "use strict";

    // define default values for config parameters
    var params = {
    };

    var initialize = function () {
        // update params with any specified in the server's config file.
        // the "thisextension" value of the Jupyter notebook config's
        // data may be undefined, but that's ok when using JQuery's extend
        $.extend(true, params, Jupyter.notebook.config.nbolom);

        // add our extension's css to the page
        $('<link/>')
            .attr({
                rel: 'stylesheet',
                type: 'text/css',
                href: requirejs.toUrl('./index.css')
            })
            .appendTo('head');
        $('<link/>')
            .attr({
                rel: 'stylesheet',
                type: 'text/css',
                href: requirejs.toUrl('./highlights.css')
            })
            .appendTo('head');

        CodeMirror.defineMode('olom-highlights', function () {
          return {
            token: function (stream, state) {
              stream.eatSpace();
              for (var rule of highlight_rules) {
                if (stream.match(rule.regex)) {
                  return rule.token;
                }
              }
              stream.skipToEnd();
              return null;
            }
          };
        });

        var add_cell_highlights = function(cell) {
          if (!cell instanceof codecell.CodeCell) {
            return;
          }
          cell.code_mirror.addOverlay('olom-highlights');
        };

        Jupyter.notebook.get_cells().forEach(add_cell_highlights);
        events.on('create.Cell', function (evt, data) {
          add_cell_highlights(data.cell);
        });
    };

    // The specially-named function load_ipython_extension will be called
    // by the notebook when the nbextension is to be loaded.
    // It mustn't take too long to execute however, or the notebook will
    // assume an error has occurred.
    var load_ipython_extension = function () {
        // Once the config has been loaded, do everything else.
        // The loaded object is a javascript Promise object, so the then
        // call return immediately. See
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
        // for details.
        return Jupyter.notebook.config.loaded.then(initialize);
    };

    // return object to export public methods
    return {
        load_ipython_extension : load_ipython_extension
    };
});

