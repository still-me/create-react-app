import React from "react";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";
import Panel from "./components/Panel";

const App = () => {
  return (
    <div>
      <h1>Главный компонент</h1>
      <Panel title="Заголовок">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          molestiae laborum corporis amet ullam pariatur necessitatibus
          voluptatum, nulla numquam consectetur.
        </p>
      </Panel>
      <Panel>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          molestiae laborum corporis amet ullam pariatur necessitatibus
          voluptatum, nulla numquam consectetur.
        </p>
      </Panel>

      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
