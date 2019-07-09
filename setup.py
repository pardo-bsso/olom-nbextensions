from setuptools import setup, find_packages

LONG_DESCRIPTION = open('README.md', 'rb').read().decode('utf-8')


setup_args = dict(
    name='nbolom',
    version='0.0.1',
    maintainer='Adrián Pardini',
    maintainer_email='github@tangopardo.com.ar',
    packages=find_packages(),
    url='https://github.com/pardo-bsso/olom-nbextensions.git',
    download_url='https://github.com/pardo-bsso/olom-nbextensions',
    license='BSD',
    platforms=["Any"],
    description='Jupyter Notebook extensions from Olom',
    long_description=LONG_DESCRIPTION,
    long_description_content_type='text/markdown',
    classifiers=[
        'Intended Audience :: Science/Research',
        'Intended Audience :: End Users/Desktop',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Topic :: Scientific/Engineering',
        'Topic :: Software Development',
    ],
    include_package_data=True,
    data_files=[
        # like `jupyter nbextension install --sys-prefix`
        ("share/jupyter/nbextensions/nbolom", [
            "nbolom/static/index.js",
            "nbolom/static/index.css",
        ]),
        # like `jupyter nbextension enable --sys-prefix`
        ("etc/jupyter/nbconfig/notebook.d", [
            "jupyter-config/nbconfig/notebook.d/nbolom.json"
        ]),
        # like `jupyter serverextension enable --sys-prefix`
        ("etc/jupyter/jupyter_notebook_config.d", [
            "jupyter-config/jupyter_notebook_config.d/nbolom.json"
        ])
    ],
    zip_safe=False,
 )


if __name__ == '__main__':
    setup(**setup_args)
