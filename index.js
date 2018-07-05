const takeANumber = (line, name) => {
  line.push(name);
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

const nowServing = (line) => {
  return (line.length === 0) ? 'There is nobody waiting to be served' : `Cuurently serving ${line.shift()}.`;
};