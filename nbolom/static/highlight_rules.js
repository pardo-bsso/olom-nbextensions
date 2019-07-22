define(function () {
  /* Rules is a list of
   * {
   *    regex: string | RegExp, what to look for.
   *    token: string | array style token to apply
   * }
   *
   * Edit the file highlights.css to set the styling. The final class names are cm-the-token-value
   * See https://codemirror.net/demo/simplemode.html for more options
   */
  var rules = [
    {regex: /OLOMSAMPLE/, token: 'olom-sample'},
  ];

  return rules;
});
