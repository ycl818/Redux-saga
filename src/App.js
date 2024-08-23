import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

import { useState } from "react";
import EntryLines from "./components/EntryLines";

const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$1000,00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water Bill",
    value: "$20,00",
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: "$300",
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: "$50,00",
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log("🚀 ~ addEntry ~ result:", result);

    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title={"Test"} />
      <DisplayBalance title={"Your Balance"} value={"2,55,53"} size={"small"} />
      <DisplayBalances />
      <MainHeader title={"History"} type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader type="h3" title={"Add new transaction"} />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;
