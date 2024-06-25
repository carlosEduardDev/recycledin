import FormHome from "./FormHome";

const Home = () => {
  return (
    <section className="py-12 px-[100px] bg-[url('../../src/assets/hero.png')] bg-cover">
      <h1 className="text-5xl font-extrabold text-background">Procure e compre resíduos e produtos recicláveis</h1>
      <FormHome />
    </section>
  );
};

export default Home;
