import StarshipType from "../../types/StarshipType";

const Starship = ({ name, model }: StarshipType): JSX.Element => {
  return (
    <>
      {name}
      {model}
    </>
  );
};

export default Starship;

/* <p id="total-ships">{starship.name}</p>; */
