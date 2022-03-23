export const Increment = (n) => {
  return {
    type: "INCREMENT",
    payload: n
  }
}
export const Decrement = (n) => {
  return {
    type: "DECREMENT",
    payload: n
  }
}