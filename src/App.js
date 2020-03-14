import React from "react";
import STORE from "./store";
import List from "./List";

export default function App(props) {
  const store = STORE;
  console.log(store);
  const ListArray = store.lists.map(function(item) {
    return <List key={item.id} item={item} allCards={store.allcards} />;
  });
  return (
    <main className="App">
      <header>trollyes</header>
      <div>{ListArray}</div>
    </main>
  );
}
