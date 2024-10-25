function Component() {
  let number = Math.random() * 100;

  return (
    <h1 style={{ "background-color": "blue", color: "white" }}>
      Random Number is : {Math.round(number)}
    </h1>
  );
}

export default Component;
