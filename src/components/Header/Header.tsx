import { IHeaderProps } from "@/interfaces";
import Form from "./Form";

const Header = (props: IHeaderProps) => {
  return (
    <header className="flex justify-between items-center bg-primary-header h-[104px] py-8 px-[100px]">
      <h1 className="text-4xl text-[32px] font-[500] text-background">
        Recycle Din
      </h1>
      {props.renderForm && <Form />}
      <a
        href="#"
        className="text-background text-sm border-b border-transparent hover:border-b hover:border-background"
      >
        Conheça a Recycle Din
      </a>
    </header>
  );
};

export default Header;
