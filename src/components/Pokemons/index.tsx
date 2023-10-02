import { useState, useEffect } from "react";
import bulbasaur from "../../assets/500px-0001Bulbasaur.png";
import charmander from "../../assets/500px-0004Charmander.png";
import squirtle from "../../assets/500px-0007Squirtle.png";

const PokemonVote = () => {
  const [bulbasaurVote, setBulbasaurVote] = useState<number>(0);
  const [charmanderVote, setCharmanderVote] = useState<number>(0);
  const [squirtleVote, setSquirtleVote] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null);

  const voteBulbasaur = () => {
    setBulbasaurVote(bulbasaurVote + 1);
  };

  const voteCharmander = () => {
    setCharmanderVote(charmanderVote + 1);
  };

  const voteSquirtle = () => {
    setSquirtleVote(squirtleVote + 1);
  };

  const calculateWinner = () => {
    const votes: { [key: string]: number } = {
      Bulbasaur: bulbasaurVote,
      Charmander: charmanderVote,
      Squirtle: squirtleVote,
    };

    const topVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter(
      (pokemon) => votes[pokemon] === topVotes
    );

    if (winners.length === 1) {
      return `${winners[0]} is the winner with ${topVotes} votes!`;
    } else {
      return `It's a tie between ${winners.join(
        " and "
      )} with ${topVotes} votes each!`;
    }
  };

  useEffect(() => {
    const newWinner = calculateWinner();
    setWinner(newWinner);
  }, [bulbasaurVote, charmanderVote, squirtleVote]);

  return (
    <div>
      <h2 className="text-2xl">{winner}</h2>
      <div className="flex flex-row">
        <div>
          <h3>Bulbasaur</h3>
          <img src={bulbasaur} alt="Bulbasaur" width="150px" />
          <button onClick={voteBulbasaur}>Vote Bulbasaur</button>
          <p>{bulbasaurVote}</p>
        </div>

        <div>
          <h3>Charmander</h3>
          <img src={charmander} alt="Charmander" width="150px" />
          <button onClick={voteCharmander}>Vote Charmander</button>
          <p>{charmanderVote}</p>
        </div>

        <div>
          <h3>Squirtle</h3>
          <img src={squirtle} alt="Squirtle" width="150px" />
          <button onClick={voteSquirtle}>Vote Squirtle</button>
          <p>{squirtleVote}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonVote;
