

cash = $ = function(selector, context){
  return new cash.fn.init(selector, context);
};

cash.fn = cash.prototype = {cash: true, length: 0};

var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, singlet = /^[\w-]*$/;

cash.fn.init = function(selector, context){
  var result =[], matcher, elem;
  if(!selector) { return this; }
  this.length = 1;
  if(typeof selector !== "string") {
    if(selector.cash) { return selector; }
    this[0] = selector;
    return this;
  }
  if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
    result = $.parseHTML(selector);
  } else {
    matcher = idMatch.test(selector);
    elem = selector.slice(1);
    if(!context && matcher) {
      this[0] = document.getElementById(elem);
      return this;
    } else {
      context = ($(context)[0] || document);
      result = [].slice.call(
        singlet.test(elem) ?
        classMatch.test(selector) ? document.getElementsByClassName(elem) :
        document.getElementsByTagName(selector) :
        context.querySelectorAll(selector)
      );
    }
  }
  this.length = 0;
  $.merge(this,result);
  return this;
};

cash.fn.init.prototype = cash.fn;