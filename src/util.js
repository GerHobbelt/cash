
cash.each = function(collection,callback){
  var i = 0, l = collection.length;
  for( ; i < l; i++){
    callback.call(collection[i],collection[i],i,collection);
  }
};

cash.extend = cash.fn.extend = function(target,source) {
    var prop;
    if(!source) {
      source = target;
      target = this;
    }
    for(prop in source) {
      if(source.hasOwnProperty(prop)) { target[prop] = source[prop]; }
    }
    return this;
};

cash.matches = function(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

cash.merge = function( first, second ) {
  var len = +second.length,
    j = 0,
    i = first.length;
  for ( ; j < len; j++ ) {
    first[ i++ ] = second[ j ];
  }
  first.length = i;
  return first;
};

cash.parseHTML = function(str) {
  var parsed = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/).exec(str);
  if(parsed) {
    return [document.createElement(parsed[1])];
  }
  parsed = buildFragment(str);
  return [].slice.call(parsed.childNodes);
};

function buildFragment(str){
  var fragment, tmp;
  fragment = fragment || document.createDocumentFragment();
  tmp = tmp || fragment.appendChild(document.createElement("div"));
  tmp.innerHTML = str;
  return tmp;
}
