const takeANumber = (line, name) => {
  line.push(name);
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

const nowServing = (line) => {
  return (line.length === 0) ? 'There is nobody waiting to be served!' : `Currently serving ${line.shift()}.`;
};

const currentLine = (line) => {
  
  let arr = [];
  
  if (line.length === 0) {
    return 'The line is currently empty';
  }
  
  for (var i = 0; i < line.length; i++) {
    var names = line[i];
    arr.push(`${i + 1}. ${names}`);
  }
  
  return `The line is currently: ${arr.join(', ')}`;
};