import "./App.css";
import Card from "./Components/MainCard";
import Test from "./test.js";

function App() {
  const initialCards = [
    {
      title: "Front End Planned",
      subCards: [
        { subCardTitle: "Ist sub card" },
        { subCardTitle: "welcome to sub card 2" },
        { subCardTitle: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front end in progress",
      subCards: [
        { subCardTitle: "Ist sub card" },
        { subCardTitle: "welcome to sub card 2" },
        { subCardTitle: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front End completed",
      subCards: [
        { subCardTitle: "Ist sub card" },
        { subCardTitle: "welcome to sub card 2" },
        { subCardTitle: "welcome to sub card 3" },
      ],
    },
    {
      title: "Front End commited to github",
      subCards: [
        { subCardTitle: "Ist sub card" },
        { subCardTitle: "welcome to sub card 2" },
        { subCardTitle: "welcome to sub card 3" },
      ],
    },


  ];

  return (
    <div className="app">
      
      {initialCards.map(({title},index)=>{
        // <Card title={title}  />
        console.log(title)
      
      
      })}
      
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default App;
