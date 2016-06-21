
function textTruncate(string = '', truncate_length = 20, truncator = '...') {
  if(string.length < truncate_length) {
    return string
  } else {
    return string.substring(0, truncate_length - truncator.length).concat(truncator)
  }
}

export default textTruncate;
