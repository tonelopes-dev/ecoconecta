import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div className="max-h-full">
      {/* Header */}
      <header className="bg-sky-500 text-white p-4 ">
        <nav className="flex items-center">
          <a
            className="container mx-auto flex flex-row items-center gap-4"
            href="/"
            aria-label="Homepage"
          >
            <img
              className="w-16 "
              src="./src/assets/logo-ecoconecta.svg"
              alt="logo do ecoconecta"
            />
            <p className="text-4xl text-yellow-50">
              <span className="font-bold text-green-800">eco</span>conecta
            </p>
          </a>
          <ul>
            <Button
              variant="outline"
              className="bg-transparent"
            >
              Button
            </Button>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <section
          className="text-center py-10 flex justify-around relative"
          style={{
            backgroundImage: "url('./src/assets/bg-ecoconecta.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Div de Sobreposição */}
          <div className="absolute inset-0 bg-black bg-opacity-15"></div>

          {/* Conteúdo da Seção, agora dentro de outra div para manter a sobreposição separada */}
          <div className="z-10 flex flex-col p-5 items-center justify-center w-[50%]">
            <h2 className="text-6xl font-bold text-white text-left">Conectando você a pontos de coleta!</h2>
            <p className="text-gray-100 mt-4 text-2xl text-left">
              Ajude o planeta. Encontre locais para reciclagem e descarte consciente perto de você.
            </p>
          </div>
          <div className="z-10">
            <img
              className="w-auto"
              src="./src/assets/foto-banner.png"
              alt="Descrição da Imagem"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1 */}
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">Facilidade de Uso</h3>
              <p>Localize pontos de coleta com apenas alguns cliques.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">Sustentabilidade</h3>
              <p>Contribua para um mundo mais sustentável.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">Comunidade</h3>
              <p>Junte-se a uma comunidade de pessoas conscientes e ativas.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-center sticky bottom-0">
        <p>EcoConecta © 2024</p>
      </footer>
    </div>
  );
}
