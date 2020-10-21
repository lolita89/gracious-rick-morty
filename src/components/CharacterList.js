import React from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

// export default function Characterlist() {
//     const [CharacterList, GetCharacterList] = useState([]);

//     useEffect(() => {
//         axios
//             .get('https://rickandmortyapi.com/api/character/')
//             .then(response => {
//                 console.log("RESPONSE HERE", response.data.results);
//                 GetCharacterList(response.data.results)
//             })
//             .catch(err => {
//                 console.log(err)
//              });
//         }, []);

//     return (
//         <section className="character-list">
//             <h2>Welcome to Rick and Morty Land</h2>
//             {CharacterList.map((chars, id) => {
//                 return <CharacterCard key={id} chars={chars} />;
//             })}
//         </section>
//     );
// }

export default class CharacterList extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then((res) => {
            const characters = res.data.results;
            this.setState({ characters });
            console.log("RESPONSES", this.state.characters);
        })
        .catch(error => {
            console.log(error)     
        });
    }

  render() {
    return (
      <section className="character-list">
        <h2>Welcome to Rick and Morty Land</h2>
        {this.state.characters.map((chars, id) => {
          return <CharacterCard key={id} chars={chars} />;
        })}
      </section>
    );
  }
}
