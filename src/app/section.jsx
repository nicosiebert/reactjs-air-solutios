function Section(props) {
  return (
    <section className="section">
      <header>{props.title}</header>
      {props.section}
    </section>
  );
}
export default Section;
