// Elm Python mode is just a slightly altered IPython Mode with Olom specific changes.
// Here we define `elm-python` mode in the require `python`
// callback to auto-load python mode, which is more likely not the best things
// to do, but at least the simple one for now.

define([
    'codemirror/lib/codemirror',
],
function(CodeMirror) {
    "use strict";

    var words = function(str) { return str.split(" "); };

    CodeMirror.defineMode("elm-python", function(conf, parserConf) {
        var pythonConf = {};
        for (var prop in parserConf) {
            if (parserConf.hasOwnProperty(prop)) {
                pythonConf[prop] = parserConf[prop];
            }
        }
        pythonConf.name = 'ipython';

        // You can change the extra_keywords and extra_builtins properties to add new rules for code highlight
        pythonConf.extra_keywords = words("OLOM_SAMPLE_KEYWORD");
        pythonConf.extra_builtins = words("OLOM_SAMPLE_BUILT_IN");

        return CodeMirror.getMode(conf, pythonConf);
    }, 'ipython');

    CodeMirror.defineMIME("text/x-ipython-elm", "elm-python");
    CodeMirror.defineMIME("text/x-python-elm",  "elm-python");

    CodeMirror.defineMIME("text/x-ipython", "elm-python");
    CodeMirror.defineMIME("text/x-python",  "elm-python");

    return {};
});
