export const updateValue = (newText) => {
  return {
    type: 'update-value',
    payload: newText
  };
}
export const rerender = () => {
  return {
    type: 'rerender'
  }
}
