import { useState } from "react";
import Modal from "./components/Modal";
import NameForm from "./components/NameForm";
import NameList from "./components/NameList";

function App() {
  const [names, setNames] = useState(["Klee", "Kaeya", "Jean"]);
  const [toEditName, setToEditName] = useState("");
  const [modal, setModal] = useState(false);

  function updateName(updatedName: string) {
    fetch("https://my.webservice.com/edit")
      .then((response) => response.json())
      .then(() => {
        setNames(
          names.map((name) => (name === toEditName ? updatedName : name))
        );
      })
      .finally(() => setModal(false));
  }

  return (
    <>
      <NameList
        names={names}
        onEdit={(name) => {
          setToEditName(name);
          setModal(true);
        }}
      />
      <Modal open={modal} onClose={() => setModal(false)}>
        <NameForm onSubmit={updateName} defaultName={toEditName} />
      </Modal>
    </>
  );
}

export default App;
