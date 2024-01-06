function inputLength(size) {

  if (isNaN(size))
    return false;

  if (size < 8) 
    return false;

  if (size > 128) 
    return false;

  return true;
  }

export { inputLength };