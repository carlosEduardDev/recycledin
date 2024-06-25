import { Button } from "@/shadcn-components/ui/button";
import { Input } from "@/shadcn-components/ui/input";
import { Label } from "@/shadcn-components/ui/label";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/shadcn-components/ui/select";

const FormHome = () => {
  return (
    <form
      className="p-4 my-8 bg-background rounded-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <fieldset className="w-full flex  items-center gap-1.5">
        <fieldset className="flex-1">
          <Label htmlFor="product" className="text-sm text-black">
            Oque você procura?
          </Label>
          <Input
            type="text"
            id="product"
            className="border-none p-0 hover:border-none"
            placeholder="Digite o nome do resíduo que procura..."
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="product" className="text-sm text-black">
            Ordenar por
          </Label>{" "}
          <Select>
            <SelectTrigger className="w-[120px] h-[36px] border-none p-0">
              <SelectValue placeholder="Categorias" className="text-sm flex" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem className="text-[16px]" value="recente">Mais recente</SelectItem>
                <SelectItem className="text-[16px]" value="a-z">A-Z</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </fieldset>

        <Button className="h-[60px]">Buscar produtos</Button>
      </fieldset>
    </form>
  );
};

export default FormHome;
