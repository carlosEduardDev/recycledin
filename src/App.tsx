import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";

const App = () => {
  return (
    <>
      <section className="max-h-[70vh]">
        <Header renderForm />
        Hi
        <Home />
      </section>
    </>
  );
};

export default App;
