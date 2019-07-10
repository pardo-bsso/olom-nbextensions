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


## Customization

This package implements both a server side and a notebook extension.

To add custom css/js to all the notebooks edit the files nbolom/static/index.css and nbolom/static/index.js
You need to reinstall the package for the changes to take effect.

For more information and help see the guide at
https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html
and also the contrib nbextensions package from https://github.com/ipython-contrib/jupyter_contrib_nbextensions
