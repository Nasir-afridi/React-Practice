function Comp() {
  let myName = "Muhammad Nasir";
  const Number = 435;
  let fullName = () => {
    return "Muhammad Nasir khan ";
  };

  return (
    <h3>
      Message number {Number} : Hello this is me {fullName()}
    </h3>
  );
}

export default Comp;
