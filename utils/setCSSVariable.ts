const setCSSVariable = (variableName: string, value: string): void => {
  document.documentElement.style.setProperty(variableName, value);
};

export default setCSSVariable;