import logo from './logo.svg';
import './App.css';
import cnn from './assets/cnn.png'
import convolutie from './assets/convolutie.png'
import relu from "./assets/relu.png"
import mfcc from "./assets/mfcc.png"
import acceval from "./assets/acceval.png"
import learningrate from "./assets/learningrate.png"
import mfccoeff from "./assets/mfccoeff.png"

function App() {
  return (
    <div className="App">
      <div class="bg-gray-200 mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">

          {/* header */}
          <div class="shadow-xl mx-auto w-1/2 mb-10 p-10  bg-white  rounded-lg">
            <h1 class="text-5xl font-extrabold text-red-400 pb-5">Hoe bouw je een muziekgenre classificeerder?</h1>
            <p class="italic pb-3">Gemaakt door Jonathan Mieloo, Jan Pieter Kroeb, Philip Schutte, Dylan Koster</p>
            <p class="italic pb-3">
              Gebaseerd op de scriptie van Casper Dahmen: Muziekgenre classificatie met een convolutioneel neuraal netwerk gebruikmakend van mel-frequentiecepstrum coefficienten, 2020
            </p>
            <p>
              In de tijd van muziekstreaming is het voor de muziekliefhebber belangrijk om aanbevelingen te krijgen over potentiële nieuwe singles die de luisteraar ook kan liefhebben. Een manier om deze nieuwe singles te vinden is door verder te kijken naar nieuwe nummers binnen dezelfde genre. Vanwege de drang van muziekconsumptie heeft een streamservice zoals Spotify al computers gebruikt voor het generen van speellijsten met nummers die de luisteraar potentieel leuk zou kunnen vinden.
              Het herkennen van muziekgenres door middel van een computer is een kwestie dat bestaat uit  verschillende moeilijkheden, voornamelijk het verkrijgen van bruikbare informatie uit de muziek en het classificeren elk genre door vast te stellen welke kenmerken bij een genre behoren.
            </p>
          </div>
          <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          {/* mfcc */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-32 h-32 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">Classificatie Criteria</h1>
            </div>
            <div class="order-1 w-5/12 px-6 py-4">
            </div>
          </div>
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"><img className="shadow-xl mx-auto rounded-lg " src={mfcc}></img></div>
            <div class="z-20 flex items-center order-1  w-8 h-8 rounded-full">

            </div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Mel-Frequentie Cepstrum Coëfficient</h3>
              <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">De scripte gebruikt MFCC om kenmerken uit de muziek te halen, MFCC staat voor Mel-Frequentie Cepstrum Coëfficient. Dit zijn korte-termijns kenmerken gebaseerd op de frequenties in het geluid. MFCC gebruikt de mel schaal voor geluid, waarin de frequenties gerelateerd worden aan de frequenties die waargenomen worden door mensen. Mensen merken eerder het verschil op tussen lage frequenties dan tussen hoge frequenties. De mel-schaal is dan ook logaritmisch gerelateerd aan de hertz schaal (Absolute frequenties).
              <br />
                <br />

                  Als eerste wordt de audio opgedeeld in frames, meestal van rond de 20 tot 40 milliseconden lang, welke worden gekozen zodat de eigenschappen in een frame niet veranderen. Op elke frame wordt een door middel van een window functie voor gezorgd dat er geen of weinig verstoringen zijn in het begin en het eind van elke frame. In deze scriptie is gekozen voor de Hamming-window functie. Elke frame wordt vermenigvuldigt met de bijbehorende window-functie, waardoor we een nieuwe frame krijgen waarmee verder wordt gewerkt.
              <br />
                <br />
                  Op deze frames wordt dan een Discrete Fouriertransformatie toegepast. Deze transformatie verandert de frame in een power spectrum. Een power spectrum geeft aan welke frequenties het meest aanwezig en het krachtigst zijn in een frame. Deze power spectrum. Zo'n filterbank bestaat uit een aantal bandfilters, welke elk een bepaalde frequentieband doorlaten. Om een mel-schaal filterbank te krijgen zijn de bandfilters die een hogere frequentie toelaten breder zijn dan bandfilters die een lagere frequentie toelaten. Zo zijn lagere frequenties sensitiever voor verandering dan hogere frequentie, net zoals het menselijke gehoor. De output van deze filterbank is een spectrum genaamd het mel spectrum. Van dit spectrum wordt de logaritme genomen, waardoor het een mel-sceptrum wordt.
              <br />
                <br />
                  Hierna wordt er nog één transformatie toegepast op deze mel-sceptrum. Dit is de Discrete Cosinus Transformatie 2 (DCT-II), deze transformatie zet het spectrum om naar één vector met de coëfficienten van de audioframe. Met DCT-II is de meeste data geconcentreerd, wat betekent dat een aantal coëfficienten erg groot zijn en de rest bijna 0. Ruis zit bijvoorbeeld in de lage coëfficienten, waardoor het amper meegenomen wordt in de berekening.
                  Voor elke frame wordt er zo'n vector met coëfficienten die de kenmerken van een audiostuk representeren.
              </p>
            </div>
          </div>

          {/* cnn */}
          <div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-32 h-32 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">Het Neurale Netwerk</h1>
              </div>
              <div class="order-1 w-5/12 px-6 py-4">
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"><img className=" shadow-xl mx-auto rounded-lg  w-3/4" src={cnn}></img></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
              </div>
              <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">Covolutionele Neurale Netwerken</h3>
                <p class="text-left text-sm  leading-snug tracking-wide text-white text-opacity-100">
                  Een convolutioneel neural netwerk (CNN), een type kunstmatige intelligentie, is aangeleerd hoe deze spectogrammen geclassificeerd kunnen worden in genres. Gebaseerd op de patronen die te vinden zijn in de spectogrammen van muziek, kan het CNN de muziek opdelen in deze genres. CNNs worden gebrukt in vele computer vision en machine learning problemen. Het CNN bestaat uit verschillende lagen: De input, hidden en output laag. De input laag ontvangt een multidimensionele vector gebaseerd op de MFCC. De hidden laag voeren hier vervolgens operaties op uit, en de output laag is het resultaat waarmee muziek geclassificeerd kan worden. De hidden laag bestaat uit onder andere convolutionele lagen om patronen te herkennen, pooling lagen om dimensies van de output te verkleinen en de fully-connected lagen die de input classificeren naar een label.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"><img className=" shadow-xl mx-auto rounded-lg  w-3/4" src={convolutie}></img></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Convolutie Laag</h3>
                <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">De convolutie lagen passen convolutie toe op de input laag, met als resultaat een feature map die patronen representeert. Convolutie werkt door een kernel/filter te laten lopen over de input en het scalair product te nemen. Hier komt als resultaat de eerder genoemde feature map uit voort.
              </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"><img className="shadow-xl mx-auto rounded-lg  w-1/4" src={relu}></img></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">3</h1>
              </div>
              <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">ReLu Laag</h3>
                <p class="text-left text-sm  leading-snug tracking-wide text-white text-opacity-100">
                  Na de convolutie laag volgt de rectified linear unit (ReLu) laag, die positive getallen hetzelfde houdt maar negatieve getallen omzet naar nul. Dit versnelt de training van het netwerk.

                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Pooling Laag</h3>
                <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Hierna volgt de pooling laag, die de dimensie van de feature map verkleint, waardoor de complexiteit van het model verminderd wordt. Dit is vergelijkbaar met de convolutie operatie, maar nu heeft de kernel geen waardes, maar neemt deze de gemiddelde of de maximale waarde van het deel van de input waarop de kernel ligt.
              </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">5</h1>
              </div>
              <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">Fully-connected laag</h3>
                <p class="text-left text-sm  leading-snug tracking-wide text-white text-opacity-100">

                  De fully connected laag is een van de laatste lagen, waarmee de input geclassificeerd wordt naar de genres. De output van de vorige lagen wordt genomen en als het ware "flattened", zodat er een enkele vector resteert die geclassificeerd kan worden, waarbij iedere node in de laag zijn eigen gewicht toegekend krijgt gebaseerd op hoe sterk het toe te kennen is aan de corresponderende label.
              </p>
              </div>
            </div>
          </div>

          {/* methode */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-32 h-32 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">Methode</h1>
            </div>
            <div class="order-1 w-5/12 px-6 py-4">
            </div>
          </div>
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 order-1 bg-white w-5/12 shadow-xl px-6 py-4 rounded-lg">
              <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Voor het labelen van een genre aan een nummer is een uitgebreid dataset nodig, hier gebruikt zijn de GTZAN en FMA datasets, die gezamenlijk 9000 secties van verschillende nummers heeft en 15 verschillende koppelbare genres heeft, waarvan uiteindelijk 10 genres gebruikt worden.
                Bij elk nummer worden de MFCCs bepaald, waar de coëfficiënten dan daaruit worden in een spectrogram verwerkt. Uiteindelijk wordt deze informatie allemaal verwerkt door het deep learning algoritme van TensorFlow. Hiermee kan een CNN gecreeerd worden, waarmee het algoritme uiteindelijk dan het genre uithaalt.
                </p>
            </div>
            <div class="order-1 w-5/12 px-6 py-4">

            </div>
          </div>

          {/* resultaten */}
          <div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-32 h-32 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">Resultaten</h1>
              </div>
              <div class="order-1 w-5/12 px-6 py-4">
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div className='w-5/12'><img className="shadow-xl mx-auto rounded-lg w-2/4" src={acceval}></img></div>
              <div className="w-1/12"></div>
              <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Hoe meer genres, hoe minder accuraat</h3>
                <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">De resultaten beschouwen de invloed van bepaalde parameters op de invloed van de nauwkeurigheid van het model. Deze nauwkeurigheid is een getal tussen de 0 en 1, waarbij 0 betekent dat het model alleen maar foute classificaties maakt en 1 een foutloos classificerend model aangeeft.
                Allereerst is gekeken naar het verband tussen het aantal te classificeren genres en de nauwkeurigheid van het model. Zoals verwacht, blijkt dat hoe meer genres het model moet classificeren, des te minder accuraat het model wordt. Bij gebruik van de volledige GTZAN dataset (10 genres, 100 nummers per genre) blijkt het model net onder een nauwkeurigheid van 0.5 uit te komen.
              </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-3/12"></div>
              <div className="w-5/12"><img className="mx-auto shadow-xl rounded-lg w-3/4" src={mfccoeff}></img></div>

              <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">Parameters</h3>
                <p class="text-sm text-left leading-snug tracking-wide text-white text-opacity-100">              Daarnaast is geprobeerd om vast te stellen wat de beste parameters zijn voor het model. Het gaat hier om de parameters: nauwkeurigheid bij aantal seconden van nummer, aantal MFC coëfficiënten en de ‘learning rate’ het model.
                De nauwkeurigheid van het model verbetert niet als er meer dan 20 seconden van een nummer wordt gebruikt. De nauwkeurigheid ligt hier rond de 0.65. Zelfs bij het gebruik van slechts 3 seconden, wordt er nog een nauwkeurigheid tussen de 0.45-0.50 behaalt.
                Het aantal MFC coëfficiënten dat de hoogste nauwkeurigheid oplevert is 20. Het gebruik van 18, 15 en 13 coëfficiënten levert een nauwkeurigheid op die 0.2 lager is, dus is het gebruik van 20 coëfficiënten steekt duidelijk boven de andere drie opties uit.
                Voor de ‘learning rate’ van het model komt naar voren dat een rate van 0.0001 ongeveer 0.2 minder nauwkeurig is dan de hogere learning rates. De ‘learning rate’ van 0.001 presteert het beste met een nauwkeurigheid van 0.72.
                <br></br>De optimale parameters die hierboven zijn beschreven zijn gecombineerd in een ‘optimaal’ model:
              <ul class="list-disc list-inside">
                    <li>Seconden van nummer: 20</li>
                    <li>MFC coëfficiënten: 20</li>
                    <li>Learning rate: 0.001</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="w-1/12 order-1"></div>
              <div className="w-5/12"><img className="shadow-xl  mx-auto rounded-lg w-2/4" src={learningrate}></img></div>

              <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Nauwkeurigheid</h3>
                <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  De nauwkeurigheid van dit model op de ‘training’ dataset, is net boven de 0.9. De test dataset levert een nauwkeurigheid van 0.8 op. Dit duidt op ‘overfitting’, wat inhoudt dat het model zichzelf kenmerken heeft aangeleerd uit de ‘training’ dataset die niet in de test dataset zitten, wat resulteert in een lagere nauwkeurigheid bij de test dataset.
                  Het blijkt dat alle 42 nummers van het klassieke genre ook correct voorspeld werden door het model, terwijl van de 46 rock nummers er maar 27 correct werden geclassificeerd. Dit komt hoogst waarschijnlijk omdat rock veel overlap heeft met andere genres.
                  Tenslotte is de optimale versie van het model ook getest met 2400 nummers uit de FMA dataset. Het model haalt een correct classificatie percentage van slechts 47%. Het model is wel getraind op de GTZAN dataset en aangezien de genres die voorkomen in de GTZAN en FMA datasets niet volledig hetzelfde zijn, kan dit natuurlijk een negatieve invloed hebben op de nauwkeurigheid van het model.
              </p>
              </div>
            </div>
          </div>

          {/* breder kader */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-64 h-32 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">Muziek Genre Classificatie in een breder kader</h1>
            </div>
            <div class="order-1 w-5/12 px-6 py-4">
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 order-1 bg-red-400 w-5/12 shadow-xl px-6 py-4 rounded-lg">
              <p class="text-left text-sm leading-snug tracking-wide text-white text-opacity-100">
                Het gebruiken van machine learning is op zichzelf al een groot onderdeel van computer science en komt ook veel voor in moderne applicaties voor zoals het dynamisch geven van prijzen, filteren van tekst, het detecteren van fraude en voor assistenten op de telefoon zoals Siri, Alexa of Google Assistant. Bij grote datahoeveelheden is het gebruikelijk om deep learning te gebruiken, aangezien de prestaties hiervan beter werken bij een schaalvergroting in data.
                Ook is er binnen de scriptie sprake van electrical engineering, aangezien er gewerkt wordt met MFCC’s, wat onder het vlak signaalverwerking valt. Signaalverwerking zelf wordt gebruikt voor meer dan alleen audio gerelateerde onderwerpen zoals videocompressie,  weervoorspellingen, voorspellingen van de economie, seismologie, fotomanipulatie en nog veel meer.
                </p>
            </div>
            <div class="order-1 w-5/12 px-6 py-4">

            </div>
          </div>

          {/* visie */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-32 h-32 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">Visie op Informatica Onderzoek</h1>
            </div>
            <div class="order-1 w-5/12 px-6 py-4">
            </div>
          </div>
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div className='w-5/12'></div>
            <div className="w-1/12"></div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Jan Pieter</h3>
              <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Tijdens het analyseren van de scriptie begon het duidelijk voor mij te worden hoe oudere technieken ook zo veel onderzoek nodig hadden, en hoeveel onderzoek ook is ontstaan uit onderzoek. Iets voor velen zelfsprekends zoals een automatische lijst met nieuwe nummers zijn eigenlijk ontstaan door vele ontwikkelingen binnen de informatica zoals machine learning en zelfs wat beeldverwerking.
              Ook al waren de resultaten niet spectaculair, andere mensen kunnen misschien geïnspireerd raken en verbeteringen vinden binnen het vlak van AI of zelfs alternatieven, waardoor deze scriptie voor een uiteindelijk beter product kan zorgen.

              </p>
            </div>
          </div>
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-3/12"></div>
            <div className="w-5/12"></div>

            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-white text-xl">Dylan</h3>
              <p class="text-left text-sm leading-snug tracking-wide text-white text-opacity-100">Deze scriptie laat zien dat het combineren van oudere technieken van belang kan zijn voor het creeëren van nieuwere, mogelijk snellere of betere technieken. Het raden van muziekgenres op basis van een audioclip is niks nieuws, maar een onderzoek zoals deze laat wel zien dat de manier waarop het gedaan is, NCC met MFCC, mogelijk voor bedrijven juist wel of geen goed idee is om te implementeren. De scriptie legt met veel detail uit hoe de methodes NCC en MFCC werken, waardoor iemand met interesse in één of beide van deze methodes deze makkelijk kan reconstrueren.  Met duidelijke resultaten zoals in deze scriptie gepresenteerd kan geïnterreseerde lezers duidelijkheid bieden of dit de manier is waarop ze het willen doen. Daarbij komt nog dat zo'n scriptie duidelijk maakt wat er allemaal mogelijk is op het gebied van wiskunde en machine learning. Op het gebied van machine learning is natuurlijk in de laatste paar jaren extreem voor voortgang geboekt, en deze scripte laat dat goed zien.
              </p>
            </div>
          </div>
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div className='w-5/12'></div>
            <div className="w-1/12"></div>
            <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Philip</h3>
              <p class="text-left text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Hoewel deze scriptie geen nieuwe technieken presenteert, wordt er wel mee ondersteunt dat neurale netwerken erg breed toepasbaar zijn. Hierbij is natuurlijk wel van belang dat het verkrijgen van input voor het netwerk op de juiste manier verloopt (in dit geval m.b.v. MFCC). Het eindmodel van de scriptie is misschien niet goed genoeg voor muziekservices als Spotify, maar het geeft andere onderzoekers wel de mogelijkheid om het model zodanig te verbeteren dat het model wel gebruikt kan worden in de praktijk. Ik ben dan ook van mening dat niet elk onderzoek/scriptie met baanbrekende resultaten hoeft te komen om nuttig te zijn. Het lijkt mij alleen maar nuttig voor een onderzoeker binnen een bepaald vakgebied als er binnen dat vakgebied veel voorgaand onderzoek is gedaan. Hierdoor kan de onderzoeker zich oriënteren op wat voor elementen uit relevante onderzoeken niet goed werken en waarom dat dan niet het geval is, of juist de goede elementen combineren tot een zo goed mogelijk eindresultaat. Vakgebieden als machine learning combineren veel kennis uit de wiskunde en informatica. Er zijn talloze onderzoeken voorafgaand aan de fase waarin machine learning zich nu in bevindt. Vandaar verwacht ik dat voor dit soort vakgebieden de vooruitgang over de loop van de tijd vanaf nu geen ‘hoge pieken’ meer zal hebben, maar dat het vrij geleidelijk omhoog zal lopen.
              </p>
            </div>
          </div>
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-3/12"></div>
            <div className="w-5/12"></div>

            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-white text-xl">Jonathan</h3>
              <p class="text-left text-sm leading-snug tracking-wide text-white text-opacity-100">Deze scriptie introduceert in een zekere zin niet nieuwe concepten als het gaat om machine learning of signaalverwerking. Maar niet iedere informatica studie hoeft naar mijn mening baanbrekend te zijn, maar kan ook tonen dat sommige concepten in de praktijk uit te voeren van. De scriptie van Casper Dahmen is hier een voorbeeld van. Het is namelijk een sterke demonstratie van wat mogelijk is met machine learning, een veld dat de afgelopen jaren enorm gegroeid is. Muziekgenres classificeren is iets waarbij meteen aan vele toepassingen gedacht kan worden, zoals bijvoorbeeld de gebruiker de juiste muziek aanraden gebaseerd op de luistergeschiedenis van die gebruiker. Echter is het wel belangrijk om te kijken bij het maken van een scriptie als deze, het opstel niet te snel vervalt naar een ‘project’ waar weinig academische waardes te halen is. Maar dat is in deze scriptie zeker niet het geval naar mijn mening. Zelf ben ik erg benieuwd naar wat de toekomst van informatica ons gaat brengen, met onder andere nieuwe ontdekkingen op het gebied van machine learning en andere delen van kunstmatige intelligentie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
