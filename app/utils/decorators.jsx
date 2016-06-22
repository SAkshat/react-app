
function textTruncate(string, truncate_length, truncator) {
  var string = string ||'',
      truncate_length = truncate_length || 20,
      truncator = truncator || '...'
  if(string.length < truncate_length) {
    return string
  } else {
    return string.substring(0, truncate_length - truncator.length).concat(truncator)
  }
}

export default textTruncate;
