export function App() {
  return (
    <div className="max-h-full">
      {/* Header */}
      <header className="bg-sky-500 text-white p-4 ">
        <nav className="max-w-[1280px] mx-auto">
          <a
            className="mx-auto flex flex-row items-center gap-3 w-[263px] flex-1 self-start"
            href="/"
            aria-label="Homepage"
          >
            <img
              className="w-16 "
              src="/assets/logo-ecoconecta.svg"
              alt="logo do ecoconecta"
            />
            <p className="text-4xl text-yellow-50">
              <span className="font-bold text-green-800">eco</span>conecta
            </p>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="">
        {/* Welcome Section */}
        <section
          className="text-left py-10 flex justify-center relative "
          style={{
            backgroundImage: "url('/assets/bg-ecoconecta.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Div de Sobreposição */}
          <div className="absolute inset-0 bg-black bg-opacity-20 "></div>

          {/* Conteúdo da Seção, agora dentro de outra div para manter a sobreposição separada */}
          <div className="flex md:flex-row flex-col-reverse sm:justify-around lg:justify-between items-center max-w-[1280px]">
            <div className="z-10 flex flex-col p-5 items-center justify-center md:w-[48%]">
              <h2 className=" lg:text-5xl md:text-4xl text-3xl font-bold text-white text-left">Conectando você a pontos de coleta!</h2>
              <p className="text-gray-100 mt-4 text-xl md:text-2xl text-left">
                Ajude o planeta. Encontre locais para reciclagem e descarte consciente perto de você.
              </p>
            </div>
            <div className="z-10">
              <iframe
                className="md:w-[560px] md:h-[315px] sm:w-[280px] sm:h-[158px]"
                src="https://www.youtube.com/embed/hO2d7EoqEq0?si=wkha079dXxVxvEYJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <img
                className="lg:w-auto w-40"
                src="/assets/Foto-banner.png"
                alt="Descrição da Imagem"
              /> */}
            </div>
          </div>
        </section>
        {/* coleta urbana especial */}
        <section className="p-10 max-w-[1280px] flex flex-col justify-center mx-auto">
          <h2 className="text-4xl text-left mb-3 font-bold">URBANA - Coleta Especial</h2>
          <h4 className="text-2xl text-left mb-3 font-bold">Coleta Especial, Poda e Entulho</h4>
          <p>
            Coleta Especial - Coleta de podas e entulhos feita pela Urbana, mediante pagamento de R$ 80,00 (oitenta Reais) por carrada, solicitado
            através do Alô Limpeza 3113-0555. Alô Limpeza - Serviço de Atendimento ao Público, para denúncias, reclamações e pedidos de coleta
            especial. Telefone de contato: 3113-0555.
          </p>
          <a
            href="https://www.natal.rn.gov.br/urbana/coleta-especial#:~:text=8%20%2D%20Como%20posso%20solicitar%20o,3113%2D0555%2C%20Op%C3%A7%C3%A3o%201."
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-cyan-500 mt-4">Para mais informações acesse ➡️ Prefeitura do Natal/RN</p>
          </a>
        </section>
        {/* Features Section */}
        <section className="py-10 max-w-[1280px] flex flex-col justify-center mx-auto">
          {/* Content information */}
          <div className="px-4 mb-4">
            <div className="flex sm:flex-row px-4 flex-col-reverse sm:justify-around lg:justify-between items-center max-w-[1280px]">
              {/* information */}
              <div className="z-10 flex flex-col p-5 items-start justify-start  md:w-[48%]">
                <h4 className="text-2xl text-left mb-3 font-bold">Sobre a Reciclagem</h4>
                <p className="mb-4 ">
                  A reciclagem é fundamental para a preservação do meio ambiente. Ao descartar corretamente os materiais recicláveis, você ajuda a
                  reduzir a extração de recursos naturais, o consumo de energia e a poluição.
                </p>
                <p>
                  ✅ <span className="font-bold">Tipos de Materiais Aceitos:</span> Papel, plástico, metal e vidro.
                </p>
                <p>
                  ❌ <span className="font-bold">Regras e Restrições:</span> Não é aceito lixo orgânico ou material contaminado.
                </p>
              </div>
              {/* logo image planet */}
              <img
                className="lg:w-auto w-40 md:mr-28"
                src="/assets/foto-banner.png"
                alt="Descrição da Imagem"
              />
            </div>
            <h2 className="text-4xl text-left mb-3">Pontos de Coleta de Lixo </h2>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" p-4 rounded-lg shadow flex flex-col justify-between ">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/midwaymall.jpeg"
                  alt="logo do Shopping Midway Mall"
                />
                <figcaption className="text-xs">Crédito: Foto: Folha da Cidade</figcaption>
              </figure>

              <h3 className="font-bold text-lg text-left">Shopping Midway Mall</h3>
              <h4>Detalhes do Ponto de Coleta</h4>

              <p>Horário de Funcionamento: Segunda a Sexta, das 10h às 22h.</p>

              <p className="text-left">
                Localizado na Av. Bernardo Vieira, 6800 - Tirol, Natal/RN. O ponto de coleta fica no piso L2, próximo à entrada da C&A.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Shopping+Midway+Mall,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow "
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/camara-municipal-de-natal.jpg"
                  alt="logo da Câmara Municipal de Natal"
                />
                <figcaption className="text-xs">Crédito: Foto: Elpídio Júnior/Divulgação/CMN</figcaption>
              </figure>

              <h3 className="font-bold text-lg text-left">Câmara Municipal de Natal</h3>
              <p className="text-left">
                Localizada na Av. Câmara Cascudo, 75 - Ribeira, Natal/RN. O ponto de coleta fica na entrada principal da Câmara.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=C%C3%A2mara+Municipal+de+Natal,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow "
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/procuradoria-geral-de-natal.jpeg"
                  alt="logo da Procuradoria Geral do Município"
                />
                <figcaption className="text-xs">Crédito: Foto: secom</figcaption>
              </figure>

              <h3 className="font-bold text-lg text-left">PGM (Procuradoria Geral do Município)</h3>
              <p className="text-left">
                Localizada na Rua Dr. João Medeiros Filho, 511 - Tirol, Natal/RN. O ponto de coleta fica na recepção da PGM.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Procuradoria+Geral+do+Munic%C3%ADpio+de+Natal,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow "
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/shopping-10-alecrim.jpg"
                  alt="logo do Shopping 10 Alecrim"
                />
                <figcaption className="text-xs">Crédito: Foto: AVFilmes</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">Shopping 10 Alecrim</h3>
              <p className="text-left">
                Localizado na Av. Eng. Roberto Freire, 880 - Tirol, Natal/RN. O ponto de coleta fica no piso G2, próximo à loja Renner.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Shopping+10+Alecrim,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow "
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/semtas.jpeg"
                  alt="logo da Secretaria Municipal de Trabalho e Assistência Social"
                />
                <figcaption className="text-xs">Crédito: Foto: Semtas</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">Semtas</h3>
              <p className="text-left">Localizada na Rua São José, 245 - Cidade Alta, Natal/RN. O ponto de coleta fica na recepção da Semtas.</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Secretaria+Municipal+de+Trabalho+e+Assist%C3%AAncia+Social+de+Natal,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/redemais-planalto.jpeg"
                  alt="logo da Rede Mais Planalto"
                />
                <figcaption className="text-xs">Crédito: Foto: redemaisrn</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">Rede Mais Planalto</h3>
              <p className="text-left">
                Presente em diversos supermercados da rede em Natal/RN. Consulte o site da Rede Mais Planalto para o endereço da loja mais próxima com
                ponto de coleta.
              </p>
              <a
                href="https://www.redemaisplanalto.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/partage-norte-shopping.jpg"
                  alt="logo do Partage Norte Shopping"
                />
                <figcaption className="text-xs">Crédito: Foto: rmcaeng</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">Partage Norte Shopping</h3>
              <p className="text-left">
                Localizado na Av. Dr. João Medeiros Filho, 2555 - Potengi, Natal/RN. O ponto de coleta fica no piso L2, próximo à praça de
                alimentação.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Partage+Norte+Shopping,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/semurb.jpeg"
                  alt="logo da Secretaria Municipal de Mobilidade Urbana"
                />
                <figcaption className="text-xs">Crédito: Foto: Alex Régis/Secom</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">Semurb</h3>
              <p className="text-left">
                Localizada na Av. Duque de Caxias, 140 - Petrópolis, Natal/RN. O ponto de coleta fica na recepção da Semurb.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Secretaria+Municipal+de+Mobilidade+Urbana+de+Natal,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/ufrn.jpg"
                  alt="logo da Secretaria Municipal de Mobilidade Urbana"
                />
                <figcaption className="text-xs">Crédito: Foto: Laurita Arruda</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">UFRN</h3>
              <p className="text-left">
                Localizado na Av. Senador Salgado Filho, 3000 - Campus Central, Natal/RN. O ponto de coleta fica na Biblioteca Central da UFRN.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Universidade+Federal+do+Rio+Grande+do+Norte,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/ifrn-campus-natal.jpg"
                  alt="logo do Instituto Federal do Rio Grande do Norte - Campus Central"
                />
                <figcaption className="text-xs">Crédito: Foto: Portal IFRN</figcaption>
              </figure>

              <h3 className="font-bold text-lg text-left">IFRN Campus Central</h3>
              <p className="text-left">
                Localizado na Av. Hermes da Fonseca, 780 - Tirol, Natal/RN. O ponto de coleta fica na entrada principal do IFRN Campus Central.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Instituto+Federal+do+Rio+Grande+do+Norte+Campus+Central,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/ccab-sul.JPG"
                  alt="logo do Centro Cultural Adolpho Bloch - Sul"
                />
                <figcaption className="text-xs">Crédito: Foto: 2POS</figcaption>
              </figure>
              <h3 className="font-bold text-lg text-left">CCAB Sul</h3>
              <p className="text-left">Localizado na Av. Bernardo Vieira, 3775 - Tirol, Natal/RN. O ponto de coleta fica na recepção do CCAB Sul.</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Adolpho+Bloch+Sul,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className=" p-4 rounded-lg shadow flex flex-col justify-between">
              <figure className="mb-4">
                <img
                  className="w-full mx-auto"
                  src="/assets/places/praia-shopping-natal.jpg"
                  alt="logo do Praia Shopping Natal"
                />
                <figcaption className="text-xs">Crédito: Foto: NOVO Notícias</figcaption>
              </figure>

              <h3 className="font-bold text-lg text-left">Praia Shopping Natal</h3>
              <p className="text-left">
                Localizado na Via Costeira, 1661 - Ponta Negra, Natal/RN. O ponto de coleta fica no piso L3, próximo à praça de alimentação.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Praia+Shopping+Natal,+Natal%2FRN&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-left sticky bottom-0">
        <div className="mx-auto max-w-[1280px] flex justify-between">
          <p>EcoConecta © 2024</p>{" "}
          <a
            href="https://www.linkedin.com/in/tonelopes-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Desenvolvido por Tone Lopes</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
