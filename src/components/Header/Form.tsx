import { Button } from "@/shadcn-components/ui/button";
import { Input } from "@/shadcn-components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-components/ui/select";

const Form = () => {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form
      className="flex w-full max-w-[900px] items-center space-x-2 gap-6"
      onSubmit={handleSubmit}
    >
      <Select>
        <SelectTrigger className="w-[120px] h-[36px]">
          <SelectValue placeholder="Categorias" className="text-sm flex" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Resíduos</SelectLabel>
            <SelectItem value="plastico">Plástico</SelectItem>
            <SelectItem value="papel">Papel</SelectItem>
            <SelectItem value="metal">Metal</SelectItem>
            <SelectItem value="Vidro">Vidro</SelectItem>
            <SelectItem value="Orgânico">Orgânico</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <fieldset className="flex gap-2">
        <Input
          type="text"
          placeholder="Digite o nome do resíduo que você procura..."
          className="h-[36px] w-[600px]"
        />
        <Button className="h-[36px]">Pesquisar</Button>
      </fieldset>
    </form>
  );
};

export default Form;
