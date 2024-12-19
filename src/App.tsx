import PageHeader from "./components/layout/PageHeader";
import PageMain from "./components/layout/PageMain";
import PageFooter from "./components/layout/PageFooter";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white artboard">
        <header>
          <PageHeader />
        </header>
        <main>
          <h2 className="my-4 text-3xl text-center">Deskripsi Tanaman Nilam</h2>
          <PageMain />
        </main>
        <footer>
          <PageFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
