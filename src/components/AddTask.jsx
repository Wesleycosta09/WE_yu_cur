import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });
  return (
    <div className="bg-slate-400 p-2 rounded-md text-white">
      <Input
        type="text"
        placeholder="Digite o Titulo da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></Input>

      <Input
        type="text"
        placeholder="Digite a descrição da Tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></Input>

      <button
        onClick={() => {
          // Verifica se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rouded-md"
      >
        Adcionar
      </button>
    </div>
  );
}

export default AddTasks;
