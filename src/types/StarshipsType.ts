import StarshipType from "./StarshipType";

interface StarshipsType {
  count: number;
  next: string;
  previous: null | string;
  results: StarshipType[];
}

export default StarshipsType;
