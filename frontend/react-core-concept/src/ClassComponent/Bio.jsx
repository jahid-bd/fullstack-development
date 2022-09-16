const Bio = (props) => {
  const name = "Jahid Hasan";
  const isName = true;
  return (
    <>
      <h1>Hello React, I'M {isName ? name : <>Another</>}</h1>
      <h2>I am a FullStack Developer</h2>
      <p>Hi, I am {props.name} a FullStack Developer.</p>
    </>
  );
};

export default Bio;
