import React, { useState } from "react";

type Props = {
  defaultName?: string;
  onSubmit: (name: string) => void;
};

export default function NameForm({ defaultName = "", onSubmit }: Props) {
  const [name, setName] = useState(defaultName);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="input"
        />
      </div>

      <button>Enviar</button>
    </form>
  );
}
