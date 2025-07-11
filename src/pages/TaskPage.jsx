import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className=" w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className=" absolute left-0 text-slate-100"
          >
            <ChevronLeft />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-500 p-4 rounded-md"></div>
        <h2 className="text-xl text-slate-white font-bold bg-slate-600 absolute-center p-2">
          {title}
        </h2>
        <div className="bg-slate-400 p-4 rounded-md -mt-3.5 relative">
          <p className="text-slate-900 absolute-center p-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
