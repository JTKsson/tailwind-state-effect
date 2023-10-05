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

    if (bulbasaurVote === 0 && charmanderVote === 0 && squirtleVote === 0) {
      return "Start voting!";
    }

    if (winners.length === 1) {
      return `${winners[0]} is in the lead with ${topVotes} votes!`;
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
    <div className="flex flex-col grow relative">
      <h2 className="sticky top-0 text-lg md:text-2xl p-4 font-gabarito bg-black text-center text-white">{winner}</h2>
      <div className="flex flex-col md:flex-row grow">

        <div className="bg-grass md:w-1/3 flex flex-col p-4 items-center justify-center font-gabarito">
          <h3 className="text-2xl">Bulbasaur</h3>
          <img className="w-1/2 md:w-3/4" src={bulbasaur} alt="Bulbasaur" />
          <button className="bg-yellow border-2 border-blue rounded py-1 px-2 w-fit" onClick={voteBulbasaur}>Vote Bulbasaur</button>
          <p>{bulbasaurVote} votes</p>
        </div>

        <div className="bg-fire md:w-1/3 flex flex-col p-4 items-center justify-center font-gabarito">
          <h3 className="text-2xl">Charmander</h3>
          <img className="w-1/2 md:w-3/4" src={charmander} alt="Charmander"/>
          <button className="bg-yellow border-2 border-blue rounded py-1 px-2 w-fit" onClick={voteCharmander}>Vote Charmander</button>
          <p>{charmanderVote} votes</p>
        </div>

        <div className="bg-water md:w-1/3 flex flex-col p-4 items-center justify-center font-gabarito">
          <h3 className="text-2xl">Squirtle</h3>
          <img className="w-1/2 md:w-3/4" src={squirtle} alt="Squirtle"/>
          <button className="bg-yellow border-2 border-blue rounded py-1 px-2 w-fit" onClick={voteSquirtle}>Vote Squirtle</button>
          <p>{squirtleVote} votes</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonVote;
