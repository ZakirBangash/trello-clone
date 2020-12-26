import "./App.css";
import Card from "./Components/MainCard";
import Test from "./test.js";

function App() {
  const initialCards = [
    {
      title: "Front End Planned",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front end in progress",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front End completed",
      subCards: [
        { title: "Ist sub card" },
        { title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front End commited to github",
      subCards: [
        { title: "Ist sub card" },
        {  title: "welcome to sub card 2" },
        { title: "welcome to sub card 3" },
      ],
    },


  ];

  return (
    <div className="app">
      
      {initialCards.map((card,index)=>(
        <Card title={card.title} subCards={card.subCards}/>
      ))}
      
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default App;
