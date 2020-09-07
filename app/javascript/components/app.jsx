import React from "react";
import ReadingRoom from "./reading-room";
import { Route } from "react-router";
import Switch from "react-bootstrap/esm/Switch";
import BookDetailsSection from "./book-details.section.jsx";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ReadingRoom />
      </Route>
      <Route path="/pequeno-principe" exact>
        <BookDetailsSection
          book={{
            author: "Antoine de Saint-Exupéry",
            publishingCompany: "Autêntica",
            title: "O pequeno príncipe",
            description:
              "O livro narra o encontro, no deserto do Saara, de um piloto francês, cujo avião sofrera uma pane, com um menino “de cabelos de ouro”. Num longo diálogo, o narrador descobre um pouco da vida do pequeno príncipe, percebe seu olhar infantil sobre a vida e o mundo; o pequeno príncipe, por sua vez, se vê diante de questões da vida dos adultos, e aquele encontro se transforma numa ligação forte, um dependendo do outro, compreendendo a importância que têm todos aqueles que cruzam nossa vida.",
          }}
        />
      </Route>
      <Route path="/reading-room" exact>
        <ReadingRoom />
      </Route>
    </Switch>
  );
};

export default App;
