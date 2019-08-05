# Jupyter Notebook extensions from Olom

This is a simple extension to add custom styling and javascript to all the jupyter notebooks.


## Installation

First install Jupyter / Jupyter Hub and all the required dependencies.

Then run:


```bash
pip install .
```


Check that it's correctly installed running


```bash
jupyter nbextension list
```


## Custom words highlighting

Edit the file nbolom/static/highlight_rules.js and nbolom/static/highlights.css to add custom syntax highlighting.
You can use special rules (that should be in the CSS file) or standard CodeMirror token types (like, variable or atom
for example).

The styling is applied after all the built-in modes, so you might need to use *!important* in the css rules.

The files define a simple rule to turn red all occurrences of the word *OLOMSAMPLE*

There is also a full fledged Python mode, *elm-python* that is applied to all Python cells. It can be modified from
nbolom/static/codemirror-elm.js

It allows you to define new keywords and identifiers in addition to the standard Python ones, just add a space delimited
list of terms to *extra_keywords* and *extra_builtins*. See the comments inside codemirror-elm.js.


## Customization

This package implements both a server side and a notebook extension.

To add custom css/js to all the notebooks edit the files nbolom/static/index.css and nbolom/static/index.js
You need to reinstall the package for the changes to take effect.

For more information and help see the guide at
https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html
and also the contrib nbextensions package from https://github.com/ipython-contrib/jupyter_contrib_nbextensions
