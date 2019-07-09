def _jupyter_server_extension_paths():
    return [{
        "module": "nbolom"
    }]


def _jupyter_nbextension_paths():
    return [dict(
        section="notebook",
        # the path is relative to the `my_fancy_module` directory
        src="static",
        # directory in the `nbextension/` namespace
        dest="nbolom",
        # _also_ in the `nbextension/` namespace
        require="nbolom/index")]


def load_jupyter_server_extension(nbapp):
    nbapp.log.info("Olom server extension loaded")
