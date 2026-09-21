window.VOXA_PACKS = {
  "es": {
    "code": "es-ES",
    "name": "spanska",
    "scenarios": [
      {
        "id": "wrong_train",
        "title": "Fel tåg",
        "icon": "🚆",
        "intro": "Upptäck misstaget och hitta rätt",
        "turns": [
          {
            "hear": "Perdone, este tren va a Valencia?",
            "sv": "Ursäkta, går det här tåget till Valencia?",
            "task": "Säg att du trodde att tåget gick till Madrid.",
            "say": "Pensaba que este tren iba a Madrid.",
            "reply": "No, para Madrid tiene que cambiar en la próxima estación.",
            "replySv": "Nej, för Madrid måste du byta vid nästa station."
          },
          {
            "hear": "Tiene billete para Madrid?",
            "sv": "Har du biljett till Madrid?",
            "task": "Säg ja och fråga om biljetten fortfarande gäller.",
            "say": "Sí. ¿Mi billete sigue siendo válido?",
            "reply": "Sí, puede usar el mismo billete.",
            "replySv": "Ja, du kan använda samma biljett."
          },
          {
            "hear": "Quiere que le diga dónde cambiar?",
            "sv": "Vill du att jag berättar var du ska byta?",
            "task": "Tacka och be personen visa det på kartan.",
            "say": "Sí, gracias. ¿Puede enseñármelo en el mapa?",
            "reply": "Claro, es aquí.",
            "replySv": "Självklart, det är här."
          }
        ]
      },
      {
        "id": "lost_bag",
        "title": "Fel väska",
        "icon": "🧳",
        "intro": "Red ut en förväxling vid bagagebandet",
        "turns": [
          {
            "hear": "Disculpe, creo que esa maleta es mía.",
            "sv": "Ursäkta, jag tror att den där väskan är min.",
            "task": "Säg att din väska ser nästan likadan ut.",
            "say": "La mía es casi igual.",
            "reply": "Vamos a mirar las etiquetas.",
            "replySv": "Vi tittar på bagagelapparna."
          },
          {
            "hear": "Cuál es su nombre?",
            "sv": "Vad heter du?",
            "task": "Säg att ditt namn står på etiketten.",
            "say": "Mi nombre está en la etiqueta.",
            "reply": "Sí, tiene razón. Esta es la suya.",
            "replySv": "Ja, du har rätt. Den här är din."
          },
          {
            "hear": "Lo siento por la confusión.",
            "sv": "Förlåt för förväxlingen.",
            "task": "Säg att det inte gör något och önska en trevlig resa.",
            "say": "No pasa nada. ¡Buen viaje!",
            "reply": "Igualmente, gracias.",
            "replySv": "Detsamma, tack."
          }
        ]
      },
      {
        "id": "market",
        "title": "Loppmarknadsfynd",
        "icon": "🧥",
        "intro": "Fråga om ett märkligt fynd",
        "turns": [
          {
            "hear": "Le interesa esta chaqueta antigua?",
            "sv": "Är du intresserad av den här gamla jackan?",
            "task": "Fråga om den är från trakten.",
            "say": "¿Es de aquí de la zona?",
            "reply": "Sí, era de mi abuelo.",
            "replySv": "Ja, den tillhörde min farfar."
          },
          {
            "hear": "Es de los años setenta.",
            "sv": "Den är från sjuttiotalet.",
            "task": "Säg att du gillar den men att den är lite stor.",
            "say": "Me gusta, pero me queda un poco grande.",
            "reply": "Puede probársela allí.",
            "replySv": "Du kan prova den där."
          },
          {
            "hear": "Qué le parece?",
            "sv": "Vad tycker du?",
            "task": "Säg att du tar den om priset är tjugo euro.",
            "say": "Me la llevo si son veinte euros.",
            "reply": "Trato hecho.",
            "replySv": "Överenskommet."
          }
        ]
      },
      {
        "id": "neighbor",
        "title": "Ny granne",
        "icon": "🏠",
        "intro": "Lös en vardaglig grannsituation",
        "turns": [
          {
            "hear": "Hola, soy su vecino de arriba.",
            "sv": "Hej, jag är din granne ovanför.",
            "task": "Presentera dig och säg att du just flyttat in.",
            "say": "Hola, soy Mikael. Acabo de mudarme.",
            "reply": "Encantado. Bienvenido al edificio.",
            "replySv": "Trevligt. Välkommen till huset."
          },
          {
            "hear": "Se oye mucho la música por la noche?",
            "sv": "Hörs musiken mycket på kvällen?",
            "task": "Säg att den hördes lite i går kväll.",
            "say": "Anoche se oía un poco.",
            "reply": "Lo siento, bajaré el volumen.",
            "replySv": "Förlåt, jag sänker volymen."
          },
          {
            "hear": "Necesita algo para el piso?",
            "sv": "Behöver du något till lägenheten?",
            "task": "Fråga var återvinningen finns.",
            "say": "Sí, ¿dónde está el reciclaje?",
            "reply": "Está en el patio.",
            "replySv": "Den finns på gården."
          }
        ]
      },
      {
        "id": "parcel",
        "title": "Mystiskt paket",
        "icon": "📦",
        "intro": "Hämta ett paket när något inte stämmer",
        "turns": [
          {
            "hear": "Tengo un paquete, pero el nombre no coincide.",
            "sv": "Jag har ett paket, men namnet stämmer inte.",
            "task": "Säg att adressen är rätt men namnet är felstavat.",
            "say": "La dirección es correcta, pero mi nombre está mal escrito.",
            "reply": "Puede enseñarme una identificación?",
            "replySv": "Kan du visa legitimation?"
          },
          {
            "hear": "La dirección sí coincide.",
            "sv": "Adressen stämmer.",
            "task": "Förklara att du väntar på ett paket från Finland.",
            "say": "Estoy esperando un paquete de Finlandia.",
            "reply": "Un momento, voy a comprobarlo.",
            "replySv": "Ett ögonblick, jag kontrollerar."
          },
          {
            "hear": "Ya está. Era un error en el sistema.",
            "sv": "Klart. Det var ett fel i systemet.",
            "task": "Tacka och fråga var du ska skriva under.",
            "say": "Gracias. ¿Dónde tengo que firmar?",
            "reply": "Aquí, por favor.",
            "replySv": "Här, tack."
          }
        ]
      },
      {
        "id": "coworking",
        "title": "Coworking-strul",
        "icon": "💻",
        "intro": "Få arbetsdagen att fungera",
        "turns": [
          {
            "hear": "La sala que reservó está ocupada.",
            "sv": "Rummet du bokade är upptaget.",
            "task": "Säg att du har ett videosamtal om tio minuter.",
            "say": "Tengo una videollamada dentro de diez minutos.",
            "reply": "Puedo buscarle otra sala.",
            "replySv": "Jag kan hitta ett annat rum åt dig."
          },
          {
            "hear": "Hay una sala libre en la segunda planta.",
            "sv": "Det finns ett ledigt rum på andra våningen.",
            "task": "Fråga om wifi fungerar bra där.",
            "say": "¿Funciona bien el wifi allí?",
            "reply": "Sí, la conexión es rápida.",
            "replySv": "Ja, anslutningen är snabb."
          },
          {
            "hear": "Necesita un adaptador?",
            "sv": "Behöver du en adapter?",
            "task": "Säg ja och fråga om du får låna en.",
            "say": "Sí, ¿me puede prestar uno?",
            "reply": "Claro, aquí tiene.",
            "replySv": "Självklart, varsågod."
          }
        ]
      },
      {
        "id": "bike",
        "title": "Cykel med problem",
        "icon": "🚲",
        "intro": "Hantera ett fel på en hyrd cykel",
        "turns": [
          {
            "hear": "Qué problema tiene la bicicleta?",
            "sv": "Vad är det för problem med cykeln?",
            "task": "Säg att bromsen låter konstigt.",
            "say": "El freno hace un ruido extraño.",
            "reply": "Voy a revisarlo.",
            "replySv": "Jag ska kontrollera det."
          },
          {
            "hear": "La rueda también está un poco baja.",
            "sv": "Däcket har också lite för lite luft.",
            "task": "Fråga om de kan pumpa det.",
            "say": "¿Puede inflarla también?",
            "reply": "Sí, sin problema.",
            "replySv": "Ja, inga problem."
          },
          {
            "hear": "Tardaremos unos diez minutos.",
            "sv": "Det tar ungefär tio minuter.",
            "task": "Säg att du väntar utanför.",
            "say": "Perfecto, espero fuera.",
            "reply": "Le aviso cuando esté lista.",
            "replySv": "Jag säger till när den är klar."
          }
        ]
      },
      {
        "id": "museum",
        "title": "Efter stängning",
        "icon": "🖼️",
        "intro": "Hitta ut och få hjälp på ett museum",
        "turns": [
          {
            "hear": "El museo está cerrando.",
            "sv": "Museet håller på att stänga.",
            "task": "Säg att du inte hittar utgången.",
            "say": "No encuentro la salida.",
            "reply": "La salida principal está cerrada.",
            "replySv": "Huvudentrén är stängd."
          },
          {
            "hear": "Tiene que usar la puerta lateral.",
            "sv": "Du måste använda sidodörren.",
            "task": "Fråga om den leder till samma gata.",
            "say": "¿Sale a la misma calle?",
            "reply": "No, sale a la plaza de atrás.",
            "replySv": "Nej, den leder till torget bakom."
          },
          {
            "hear": "Quiere que le acompañe?",
            "sv": "Vill du att jag följer med dig?",
            "task": "Tacka och säg att du hittar nu.",
            "say": "Gracias, ya sé por dónde ir.",
            "reply": "Perfecto. Buenas noches.",
            "replySv": "Perfekt. God kväll."
          }
        ]
      },
      {
        "id": "charger",
        "title": "1 % batteri",
        "icon": "🔋",
        "intro": "Lös ett akut men vardagligt mobilproblem",
        "turns": [
          {
            "hear": "Busca un enchufe?",
            "sv": "Letar du efter ett eluttag?",
            "task": "Säg att mobilen nästan är urladdad.",
            "say": "Sí, mi móvil casi no tiene batería.",
            "reply": "Hay uno detrás de esa mesa.",
            "replySv": "Det finns ett bakom bordet."
          },
          {
            "hear": "Tiene cargador?",
            "sv": "Har du laddare?",
            "task": "Säg att du glömde din och fråga om du får låna en.",
            "say": "Lo olvidé. ¿Puedo pedir uno prestado?",
            "reply": "Creo que tengo uno compatible.",
            "replySv": "Jag tror att jag har en som passar."
          },
          {
            "hear": "Es este conector?",
            "sv": "Är det den här kontakten?",
            "task": "Säg att den passar och tacka.",
            "say": "Sí, ese sirve. Muchas gracias.",
            "reply": "De nada.",
            "replySv": "Ingen orsak."
          }
        ]
      },
      {
        "id": "laundry",
        "title": "Tvättmaskinen vägrar",
        "icon": "🧺",
        "intro": "Be om hjälp i en tvättomat",
        "turns": [
          {
            "hear": "La máquina no empieza?",
            "sv": "Startar inte maskinen?",
            "task": "Säg att du redan har betalat.",
            "say": "No, y ya he pagado.",
            "reply": "A veces hay que cerrar la puerta otra vez.",
            "replySv": "Ibland måste man stänga luckan igen."
          },
          {
            "hear": "Ahora aparece un error.",
            "sv": "Nu visas ett felmeddelande.",
            "task": "Fråga vad felkoden betyder.",
            "say": "¿Qué significa este código?",
            "reply": "Dice que hay demasiada ropa.",
            "replySv": "Det står att det är för mycket tvätt."
          },
          {
            "hear": "Puede usar la máquina de al lado.",
            "sv": "Du kan använda maskinen bredvid.",
            "task": "Fråga om betalningen kan flyttas dit.",
            "say": "¿Se puede pasar el pago a esa máquina?",
            "reply": "Sí, yo lo arreglo.",
            "replySv": "Ja, jag ordnar det."
          }
        ]
      },
      {
        "id": "keys",
        "title": "Nyckeln fungerar inte",
        "icon": "🔑",
        "intro": "Kom in när låset krånglar",
        "turns": [
          {
            "hear": "No funciona su llave?",
            "sv": "Fungerar inte din nyckel?",
            "task": "Säg att den fungerade i morse.",
            "say": "Esta mañana funcionaba.",
            "reply": "Déjeme probarla.",
            "replySv": "Låt mig prova den."
          },
          {
            "hear": "Parece que la cerradura está bloqueada.",
            "sv": "Det verkar som att låset har fastnat.",
            "task": "Fråga om det finns en reservnyckel.",
            "say": "¿Hay una llave de repuesto?",
            "reply": "Sí, pero está en la oficina.",
            "replySv": "Ja, men den finns på kontoret."
          },
          {
            "hear": "Puedo traerla en cinco minutos.",
            "sv": "Jag kan hämta den på fem minuter.",
            "task": "Säg att du väntar här.",
            "say": "Gracias, espero aquí.",
            "reply": "Vuelvo enseguida.",
            "replySv": "Jag är strax tillbaka."
          }
        ]
      },
      {
        "id": "weather_plan",
        "title": "Planen regnar bort",
        "icon": "🌧️",
        "intro": "Ändra plan tillsammans med någon",
        "turns": [
          {
            "hear": "Parece que va a llover todo el día.",
            "sv": "Det verkar regna hela dagen.",
            "task": "Säg att ni kanske borde ändra planen.",
            "say": "Quizá deberíamos cambiar de plan.",
            "reply": "Qué te apetece hacer?",
            "replySv": "Vad känner du för att göra?"
          },
          {
            "hear": "Podríamos ir a una exposición.",
            "sv": "Vi kunde gå på en utställning.",
            "task": "Säg att du hellre vill hitta något lokalt och mindre turistigt.",
            "say": "Prefiero algo local y menos turístico.",
            "reply": "Conozco un sitio pequeño cerca.",
            "replySv": "Jag känner till ett litet ställe i närheten."
          },
          {
            "hear": "Vamos andando o en autobús?",
            "sv": "Går vi eller tar vi buss?",
            "task": "Föreslå bussen eftersom det regnar.",
            "say": "Mejor en autobús, con esta lluvia.",
            "reply": "Buena idea.",
            "replySv": "Bra idé."
          }
        ]
      },
      {
        "id": "photo",
        "title": "Fotohjälp",
        "icon": "📷",
        "intro": "Be en främling om en bättre bild",
        "turns": [
          {
            "hear": "Quiere que le haga una foto?",
            "sv": "Vill du att jag tar en bild på dig?",
            "task": "Tacka och be att hela byggnaden kommer med.",
            "say": "Sí, gracias. ¿Puede incluir todo el edificio?",
            "reply": "Claro. Póngase un poco a la izquierda.",
            "replySv": "Självklart. Ställ dig lite till vänster."
          },
          {
            "hear": "Así está bien?",
            "sv": "Är det bra så?",
            "task": "Be om en bild i liggande format också.",
            "say": "Sí. ¿Puede hacer otra en horizontal?",
            "reply": "Por supuesto.",
            "replySv": "Självklart."
          },
          {
            "hear": "Quiere verla?",
            "sv": "Vill du se den?",
            "task": "Säg att den blev bra och tacka.",
            "say": "Ha quedado muy bien. Muchas gracias.",
            "reply": "Con gusto.",
            "replySv": "Gärna."
          }
        ]
      },
      {
        "id": "local_event",
        "title": "Vad händer här?",
        "icon": "🎭",
        "intro": "Ta reda på vad lokalborna gör",
        "turns": [
          {
            "hear": "Hoy hay mucha gente en la plaza.",
            "sv": "Det är mycket folk på torget idag.",
            "task": "Fråga vad som händer.",
            "say": "¿Qué pasa hoy aquí?",
            "reply": "Hay un festival del barrio.",
            "replySv": "Det är en kvartersfestival."
          },
          {
            "hear": "Empieza a las seis.",
            "sv": "Den börjar klockan sex.",
            "task": "Fråga om man behöver biljett.",
            "say": "¿Hace falta entrada?",
            "reply": "No, es gratis.",
            "replySv": "Nej, det är gratis."
          },
          {
            "hear": "También habrá música en directo.",
            "sv": "Det blir också livemusik.",
            "task": "Fråga vilken tid musiken börjar.",
            "say": "¿A qué hora empieza la música?",
            "reply": "Sobre las ocho.",
            "replySv": "Runt åtta."
          }
        ]
      },
      {
        "id": "missed_bus",
        "title": "Missad sista buss",
        "icon": "🚌",
        "intro": "Hitta en lösning sent på kvällen",
        "turns": [
          {
            "hear": "El último autobús ya salió.",
            "sv": "Sista bussen har redan gått.",
            "task": "Fråga om det finns något annat sätt att ta sig till centrum.",
            "say": "¿Hay otra forma de llegar al centro?",
            "reply": "Puede tomar el tranvía hasta medianoche.",
            "replySv": "Du kan ta spårvagnen till midnatt."
          },
          {
            "hear": "La parada está a diez minutos.",
            "sv": "Hållplatsen ligger tio minuter bort.",
            "task": "Fråga åt vilket håll du ska gå.",
            "say": "¿En qué dirección tengo que ir?",
            "reply": "Siga esta calle hasta el semáforo.",
            "replySv": "Följ den här gatan till trafikljuset."
          },
          {
            "hear": "El tranvía pasa cada veinte minutos.",
            "sv": "Spårvagnen går var tjugonde minut.",
            "task": "Tacka och fråga om du kan köpa biljett ombord.",
            "say": "Gracias. ¿Puedo comprar el billete a bordo?",
            "reply": "No, cómprelo en la aplicación o en la parada.",
            "replySv": "Nej, köp den i appen eller vid hållplatsen."
          }
        ]
      },
      {
        "id": "train_seat",
        "title": "Någon sitter på din plats",
        "icon": "💺",
        "intro": "Lös en platsförväxling vänligt",
        "turns": [
          {
            "hear": "Creo que este es mi asiento.",
            "sv": "Jag tror att det här är min plats.",
            "task": "Säg att din biljett visar samma plats.",
            "say": "Mi billete también indica este asiento.",
            "reply": "Vamos a comparar los billetes.",
            "replySv": "Vi jämför biljetterna."
          },
          {
            "hear": "Ah, mi billete es para mañana.",
            "sv": "Ah, min biljett är för i morgon.",
            "task": "Säg att sådant händer.",
            "say": "No pasa nada, esas cosas pasan.",
            "reply": "Qué despiste.",
            "replySv": "Så tankspritt av mig."
          },
          {
            "hear": "Buscaré otro asiento.",
            "sv": "Jag letar efter en annan plats.",
            "task": "Säg att personen kan sitta kvar tills konduktören kommer.",
            "say": "Puede quedarse hasta que venga el revisor.",
            "reply": "Muchas gracias.",
            "replySv": "Tack så mycket."
          }
        ]
      },
      {
        "id": "ingredient",
        "title": "Okänd ingrediens",
        "icon": "🥬",
        "intro": "Förstå något du aldrig sett förut",
        "turns": [
          {
            "hear": "Busca algo en particular?",
            "sv": "Letar du efter något särskilt?",
            "task": "Fråga vad den här grönsaken heter.",
            "say": "Sí, ¿cómo se llama esta verdura?",
            "reply": "Se llama acelga.",
            "replySv": "Den heter mangold."
          },
          {
            "hear": "La ha probado alguna vez?",
            "sv": "Har du provat den någon gång?",
            "task": "Säg nej och fråga hur man brukar tillaga den.",
            "say": "No. ¿Cómo se suele cocinar?",
            "reply": "Se puede saltear con ajo.",
            "replySv": "Man kan steka den med vitlök."
          },
          {
            "hear": "Quiere llevar un manojo?",
            "sv": "Vill du ta en bunt?",
            "task": "Säg ja och fråga hur länge den håller.",
            "say": "Sí. ¿Cuánto tiempo se conserva?",
            "reply": "Unos tres días en la nevera.",
            "replySv": "Ungefär tre dagar i kylskåp."
          }
        ]
      },
      {
        "id": "clothes",
        "title": "Storleken finns inte",
        "icon": "👕",
        "intro": "Hitta ett alternativ i en butik",
        "turns": [
          {
            "hear": "No nos queda esa talla.",
            "sv": "Vi har inte den storleken kvar.",
            "task": "Fråga om de har samma plagg i en annan färg.",
            "say": "¿Lo tienen en otro color?",
            "reply": "Sí, en azul y en negro.",
            "replySv": "Ja, i blått och svart."
          },
          {
            "hear": "Quiere probar el azul?",
            "sv": "Vill du prova den blå?",
            "task": "Säg ja och fråga var provrummet är.",
            "say": "Sí. ¿Dónde está el probador?",
            "reply": "Al fondo, a la derecha.",
            "replySv": "Längst in till höger."
          },
          {
            "hear": "Qué tal le queda?",
            "sv": "Hur sitter den?",
            "task": "Säg att ärmarna är lite för långa.",
            "say": "Las mangas son un poco largas.",
            "reply": "Puedo buscar otro modelo.",
            "replySv": "Jag kan leta efter en annan modell."
          }
        ]
      },
      {
        "id": "recycling",
        "title": "Sorteringsmysteriet",
        "icon": "♻️",
        "intro": "Fråga hur lokala regler fungerar",
        "turns": [
          {
            "hear": "No sabe dónde tirar eso?",
            "sv": "Vet du inte var det ska slängas?",
            "task": "Säg att du inte vet vilken behållare glas ska i.",
            "say": "No sé en qué contenedor va el vidrio.",
            "reply": "El verde es para vidrio.",
            "replySv": "Den gröna är för glas."
          },
          {
            "hear": "Y las tapas de metal?",
            "sv": "Och metallocken?",
            "task": "Säg att du trodde de skulle sorteras separat.",
            "say": "Pensaba que iban por separado.",
            "reply": "Sí, van en el contenedor amarillo.",
            "replySv": "Ja, de ska i den gula behållaren."
          },
          {
            "hear": "Aquí reciclamos casi todo.",
            "sv": "Här återvinner vi nästan allt.",
            "task": "Säg att reglerna är annorlunda hemma hos dig.",
            "say": "En mi país las reglas son diferentes.",
            "reply": "Sí, cambia mucho según el lugar.",
            "replySv": "Ja, det varierar mycket mellan olika platser."
          }
        ]
      },
      {
        "id": "elevator",
        "title": "Hissen stannar",
        "icon": "🛗",
        "intro": "Kommunicera lugnt när något oväntat händer",
        "turns": [
          {
            "hear": "Parece que el ascensor se ha parado.",
            "sv": "Det verkar som att hissen har stannat.",
            "task": "Säg att du trycker på larmknappen.",
            "say": "Voy a pulsar el botón de alarma.",
            "reply": "Bien, yo llamaré por teléfono.",
            "replySv": "Bra, jag ringer."
          },
          {
            "hear": "Dicen que vienen en diez minutos.",
            "sv": "De säger att de kommer om tio minuter.",
            "task": "Fråga om dörrarna ska lämnas i fred.",
            "say": "¿Debemos dejar las puertas como están?",
            "reply": "Sí, mejor no tocarlas.",
            "replySv": "Ja, bäst att inte röra dem."
          },
          {
            "hear": "Ya vienen los técnicos.",
            "sv": "Teknikerna är på väg nu.",
            "task": "Säg att det är skönt att höra.",
            "say": "Me alegra oírlo.",
            "reply": "Pronto saldremos.",
            "replySv": "Snart kommer vi ut."
          }
        ]
      },
      {
        "id": "dog",
        "title": "Hundmöte",
        "icon": "🐕",
        "intro": "Småprata spontant med en hundägare",
        "turns": [
          {
            "hear": "No se preocupe, es muy tranquilo.",
            "sv": "Oroa dig inte, den är väldigt lugn.",
            "task": "Fråga om du får klappa hunden.",
            "say": "¿Puedo acariciarlo?",
            "reply": "Sí, claro. Le encanta.",
            "replySv": "Ja, självklart. Den älskar det."
          },
          {
            "hear": "Se llama Bruno.",
            "sv": "Han heter Bruno.",
            "task": "Fråga hur gammal han är.",
            "say": "¿Cuántos años tiene?",
            "reply": "Tiene cuatro años.",
            "replySv": "Han är fyra år."
          },
          {
            "hear": "Tiene perro usted también?",
            "sv": "Har du också hund?",
            "task": "Säg nej men att du tycker mycket om hundar.",
            "say": "No, pero me gustan mucho los perros.",
            "reply": "Entonces Bruno ya tiene un nuevo amigo.",
            "replySv": "Då har Bruno redan fått en ny vän."
          }
        ]
      }
    ],
    "phrases": [
      [
        "Pensaba que este tren iba a Madrid.",
        "att du trodde att tåget gick till Madrid."
      ],
      [
        "Sí. ¿Mi billete sigue siendo válido?",
        "ja och fråga om biljetten fortfarande gäller."
      ],
      [
        "Sí, gracias. ¿Puede enseñármelo en el mapa?",
        "be personen visa det på kartan."
      ],
      [
        "La mía es casi igual.",
        "att din väska ser nästan likadan ut."
      ],
      [
        "Mi nombre está en la etiqueta.",
        "att ditt namn står på etiketten."
      ],
      [
        "No pasa nada. ¡Buen viaje!",
        "att det inte gör något och önska en trevlig resa."
      ],
      [
        "¿Es de aquí de la zona?",
        "om den är från trakten."
      ],
      [
        "Me gusta, pero me queda un poco grande.",
        "att du gillar den men att den är lite stor."
      ],
      [
        "Me la llevo si son veinte euros.",
        "att du tar den om priset är tjugo euro."
      ],
      [
        "Hola, soy Mikael. Acabo de mudarme.",
        "Presentera dig och säg att du just flyttat in."
      ],
      [
        "Anoche se oía un poco.",
        "att den hördes lite i går kväll."
      ],
      [
        "Sí, ¿dónde está el reciclaje?",
        "var återvinningen finns."
      ],
      [
        "La dirección es correcta, pero mi nombre está mal escrito.",
        "att adressen är rätt men namnet är felstavat."
      ],
      [
        "Estoy esperando un paquete de Finlandia.",
        "Förklara att du väntar på ett paket från Finland."
      ],
      [
        "Gracias. ¿Dónde tengo que firmar?",
        "fråga var du ska skriva under."
      ],
      [
        "Tengo una videollamada dentro de diez minutos.",
        "att du har ett videosamtal om tio minuter."
      ],
      [
        "¿Funciona bien el wifi allí?",
        "om wifi fungerar bra där."
      ],
      [
        "Sí, ¿me puede prestar uno?",
        "ja och fråga om du får låna en."
      ],
      [
        "El freno hace un ruido extraño.",
        "att bromsen låter konstigt."
      ],
      [
        "¿Puede inflarla también?",
        "om de kan pumpa det."
      ],
      [
        "Perfecto, espero fuera.",
        "att du väntar utanför."
      ],
      [
        "No encuentro la salida.",
        "att du inte hittar utgången."
      ],
      [
        "¿Sale a la misma calle?",
        "om den leder till samma gata."
      ],
      [
        "Gracias, ya sé por dónde ir.",
        "säg att du hittar nu."
      ],
      [
        "Sí, mi móvil casi no tiene batería.",
        "att mobilen nästan är urladdad."
      ],
      [
        "Lo olvidé. ¿Puedo pedir uno prestado?",
        "att du glömde din och fråga om du får låna en."
      ],
      [
        "Sí, ese sirve. Muchas gracias.",
        "att den passar och tacka."
      ],
      [
        "No, y ya he pagado.",
        "att du redan har betalat."
      ],
      [
        "¿Qué significa este código?",
        "vad felkoden betyder."
      ],
      [
        "¿Se puede pasar el pago a esa máquina?",
        "om betalningen kan flyttas dit."
      ],
      [
        "Esta mañana funcionaba.",
        "att den fungerade i morse."
      ],
      [
        "¿Hay una llave de repuesto?",
        "om det finns en reservnyckel."
      ],
      [
        "Gracias, espero aquí.",
        "att du väntar här."
      ],
      [
        "Quizá deberíamos cambiar de plan.",
        "att ni kanske borde ändra planen."
      ],
      [
        "Prefiero algo local y menos turístico.",
        "att du hellre vill hitta något lokalt och mindre turistigt."
      ],
      [
        "Mejor en autobús, con esta lluvia.",
        "Föreslå bussen eftersom det regnar."
      ],
      [
        "Sí, gracias. ¿Puede incluir todo el edificio?",
        "be att hela byggnaden kommer med."
      ],
      [
        "Sí. ¿Puede hacer otra en horizontal?",
        "Be om en bild i liggande format också."
      ],
      [
        "Ha quedado muy bien. Muchas gracias.",
        "att den blev bra och tacka."
      ],
      [
        "¿Qué pasa hoy aquí?",
        "vad som händer."
      ],
      [
        "¿Hace falta entrada?",
        "om man behöver biljett."
      ],
      [
        "¿A qué hora empieza la música?",
        "vilken tid musiken börjar."
      ],
      [
        "¿Hay otra forma de llegar al centro?",
        "om det finns något annat sätt att ta sig till centrum."
      ],
      [
        "¿En qué dirección tengo que ir?",
        "åt vilket håll du ska gå."
      ],
      [
        "Gracias. ¿Puedo comprar el billete a bordo?",
        "fråga om du kan köpa biljett ombord."
      ],
      [
        "Mi billete también indica este asiento.",
        "att din biljett visar samma plats."
      ],
      [
        "No pasa nada, esas cosas pasan.",
        "att sådant händer."
      ],
      [
        "Puede quedarse hasta que venga el revisor.",
        "att personen kan sitta kvar tills konduktören kommer."
      ],
      [
        "Sí, ¿cómo se llama esta verdura?",
        "vad den här grönsaken heter."
      ],
      [
        "No. ¿Cómo se suele cocinar?",
        "nej och fråga hur man brukar tillaga den."
      ],
      [
        "Sí. ¿Cuánto tiempo se conserva?",
        "ja och fråga hur länge den håller."
      ],
      [
        "¿Lo tienen en otro color?",
        "om de har samma plagg i en annan färg."
      ],
      [
        "Sí. ¿Dónde está el probador?",
        "ja och fråga var provrummet är."
      ],
      [
        "Las mangas son un poco largas.",
        "att ärmarna är lite för långa."
      ],
      [
        "No sé en qué contenedor va el vidrio.",
        "att du inte vet vilken behållare glas ska i."
      ],
      [
        "Pensaba que iban por separado.",
        "att du trodde de skulle sorteras separat."
      ],
      [
        "En mi país las reglas son diferentes.",
        "att reglerna är annorlunda hemma hos dig."
      ],
      [
        "Voy a pulsar el botón de alarma.",
        "att du trycker på larmknappen."
      ],
      [
        "¿Debemos dejar las puertas como están?",
        "om dörrarna ska lämnas i fred."
      ],
      [
        "Me alegra oírlo.",
        "att det är skönt att höra."
      ],
      [
        "¿Puedo acariciarlo?",
        "om du får klappa hunden."
      ],
      [
        "¿Cuántos años tiene?",
        "hur gammal han är."
      ],
      [
        "No, pero me gustan mucho los perros.",
        "nej men att du tycker mycket om hundar."
      ]
    ]
  },
  "it": {
    "code": "it-IT",
    "name": "italienska",
    "scenarios": [
      {
        "id": "wrong_train",
        "title": "Treno sbagliato",
        "icon": "🚆",
        "intro": "Scopri l’errore e trova la strada giusta",
        "turns": [
          {
            "hear": "Scusi, questo treno va a Valencia?",
            "sv": "Ursäkta, går det här tåget till Valencia?",
            "task": "Säg att du trodde att tåget gick till Madrid.",
            "say": "Pensavo che questo treno andasse a Madrid.",
            "reply": "No, per Madrid deve cambiare alla prossima stazione.",
            "replySv": "Nej, för Madrid måste du byta vid nästa station."
          },
          {
            "hear": "Ha un biglietto per Madrid?",
            "sv": "Har du biljett till Madrid?",
            "task": "Säg ja och fråga om biljetten fortfarande gäller.",
            "say": "Sì. Il mio biglietto è ancora valido?",
            "reply": "Sì, può usare lo stesso biglietto.",
            "replySv": "Ja, du kan använda samma biljett."
          },
          {
            "hear": "Vuole che le dica dove cambiare?",
            "sv": "Vill du att jag berättar var du ska byta?",
            "task": "Tacka och be personen visa det på kartan.",
            "say": "Sì, grazie. Può mostrarmelo sulla mappa?",
            "reply": "Certo, è qui.",
            "replySv": "Självklart, det är här."
          }
        ]
      },
      {
        "id": "lost_bag",
        "title": "Fel väska",
        "icon": "🧳",
        "intro": "Red ut en förväxling vid bagagebandet",
        "turns": [
          {
            "hear": "Scusi, credo che quella valigia sia mia.",
            "sv": "Ursäkta, jag tror att den där väskan är min.",
            "task": "Säg att din väska ser nästan likadan ut.",
            "say": "La mia è quasi uguale.",
            "reply": "Controlliamo le etichette.",
            "replySv": "Vi tittar på bagagelapparna."
          },
          {
            "hear": "Qual è il suo nome?",
            "sv": "Vad heter du?",
            "task": "Säg att ditt namn står på etiketten.",
            "say": "Il mio nome è sull’etichetta.",
            "reply": "Sì, ha ragione. Questa è la sua.",
            "replySv": "Ja, du har rätt. Den här är din."
          },
          {
            "hear": "Mi dispiace per la confusione.",
            "sv": "Förlåt för förväxlingen.",
            "task": "Säg att det inte gör något och önska en trevlig resa.",
            "say": "Non fa niente. Buon viaggio!",
            "reply": "Altrettanto, grazie.",
            "replySv": "Detsamma, tack."
          }
        ]
      },
      {
        "id": "market",
        "title": "Loppmarknadsfynd",
        "icon": "🧥",
        "intro": "Fråga om ett märkligt fynd",
        "turns": [
          {
            "hear": "Le interessa questa vecchia giacca?",
            "sv": "Är du intresserad av den här gamla jackan?",
            "task": "Fråga om den är från trakten.",
            "say": "È di questa zona?",
            "reply": "Sì, era di mio nonno.",
            "replySv": "Ja, den tillhörde min farfar."
          },
          {
            "hear": "È degli anni settanta.",
            "sv": "Den är från sjuttiotalet.",
            "task": "Säg att du gillar den men att den är lite stor.",
            "say": "Mi piace, ma mi sta un po’ grande.",
            "reply": "Può provarla lì.",
            "replySv": "Du kan prova den där."
          },
          {
            "hear": "Che ne pensa?",
            "sv": "Vad tycker du?",
            "task": "Säg att du tar den om priset är tjugo euro.",
            "say": "La prendo se costa venti euro.",
            "reply": "Affare fatto.",
            "replySv": "Överenskommet."
          }
        ]
      },
      {
        "id": "neighbor",
        "title": "Ny granne",
        "icon": "🏠",
        "intro": "Lös en vardaglig grannsituation",
        "turns": [
          {
            "hear": "Salve, sono il vicino del piano di sopra.",
            "sv": "Hej, jag är din granne ovanför.",
            "task": "Presentera dig och säg att du just flyttat in.",
            "say": "Ciao, sono Mikael. Mi sono appena trasferito.",
            "reply": "Piacere. Benvenuto nel palazzo.",
            "replySv": "Trevligt. Välkommen till huset."
          },
          {
            "hear": "Si sente molto la musica la sera?",
            "sv": "Hörs musiken mycket på kvällen?",
            "task": "Säg att den hördes lite i går kväll.",
            "say": "Ieri sera si sentiva un po’.",
            "reply": "Mi dispiace, abbasserò il volume.",
            "replySv": "Förlåt, jag sänker volymen."
          },
          {
            "hear": "Le serve qualcosa per l’appartamento?",
            "sv": "Behöver du något till lägenheten?",
            "task": "Fråga var återvinningen finns.",
            "say": "Sì, dov’è la raccolta differenziata?",
            "reply": "È nel cortile.",
            "replySv": "Den finns på gården."
          }
        ]
      },
      {
        "id": "parcel",
        "title": "Mystiskt paket",
        "icon": "📦",
        "intro": "Hämta ett paket när något inte stämmer",
        "turns": [
          {
            "hear": "Ho un pacco, ma il nome non corrisponde.",
            "sv": "Jag har ett paket, men namnet stämmer inte.",
            "task": "Säg att adressen är rätt men namnet är felstavat.",
            "say": "L’indirizzo è giusto, ma il mio nome è scritto male.",
            "reply": "Può mostrarmi un documento?",
            "replySv": "Kan du visa legitimation?"
          },
          {
            "hear": "L’indirizzo corrisponde.",
            "sv": "Adressen stämmer.",
            "task": "Förklara att du väntar på ett paket från Finland.",
            "say": "Aspetto un pacco dalla Finlandia.",
            "reply": "Un momento, controllo.",
            "replySv": "Ett ögonblick, jag kontrollerar."
          },
          {
            "hear": "Ecco fatto. Era un errore del sistema.",
            "sv": "Klart. Det var ett fel i systemet.",
            "task": "Tacka och fråga var du ska skriva under.",
            "say": "Grazie. Dove devo firmare?",
            "reply": "Qui, per favore.",
            "replySv": "Här, tack."
          }
        ]
      },
      {
        "id": "coworking",
        "title": "Coworking-strul",
        "icon": "💻",
        "intro": "Få arbetsdagen att fungera",
        "turns": [
          {
            "hear": "La sala che ha prenotato è occupata.",
            "sv": "Rummet du bokade är upptaget.",
            "task": "Säg att du har ett videosamtal om tio minuter.",
            "say": "Ho una videochiamata tra dieci minuti.",
            "reply": "Posso cercarle un’altra sala.",
            "replySv": "Jag kan hitta ett annat rum åt dig."
          },
          {
            "hear": "C’è una sala libera al secondo piano.",
            "sv": "Det finns ett ledigt rum på andra våningen.",
            "task": "Fråga om wifi fungerar bra där.",
            "say": "Il wifi funziona bene lì?",
            "reply": "Sì, la connessione è veloce.",
            "replySv": "Ja, anslutningen är snabb."
          },
          {
            "hear": "Le serve un adattatore?",
            "sv": "Behöver du en adapter?",
            "task": "Säg ja och fråga om du får låna en.",
            "say": "Sì, posso prenderne uno in prestito?",
            "reply": "Certo, tenga.",
            "replySv": "Självklart, varsågod."
          }
        ]
      },
      {
        "id": "bike",
        "title": "Cykel med problem",
        "icon": "🚲",
        "intro": "Hantera ett fel på en hyrd cykel",
        "turns": [
          {
            "hear": "Che problema ha la bicicletta?",
            "sv": "Vad är det för problem med cykeln?",
            "task": "Säg att bromsen låter konstigt.",
            "say": "Il freno fa uno strano rumore.",
            "reply": "Controllo subito.",
            "replySv": "Jag ska kontrollera det."
          },
          {
            "hear": "Anche la ruota è un po’ sgonfia.",
            "sv": "Däcket har också lite för lite luft.",
            "task": "Fråga om de kan pumpa det.",
            "say": "Può gonfiarla anche?",
            "reply": "Sì, nessun problema.",
            "replySv": "Ja, inga problem."
          },
          {
            "hear": "Ci vorranno circa dieci minuti.",
            "sv": "Det tar ungefär tio minuter.",
            "task": "Säg att du väntar utanför.",
            "say": "Perfetto, aspetto fuori.",
            "reply": "La avviso quando è pronta.",
            "replySv": "Jag säger till när den är klar."
          }
        ]
      },
      {
        "id": "museum",
        "title": "Efter stängning",
        "icon": "🖼️",
        "intro": "Hitta ut och få hjälp på ett museum",
        "turns": [
          {
            "hear": "Il museo sta chiudendo.",
            "sv": "Museet håller på att stänga.",
            "task": "Säg att du inte hittar utgången.",
            "say": "Non trovo l’uscita.",
            "reply": "L’uscita principale è chiusa.",
            "replySv": "Huvudentrén är stängd."
          },
          {
            "hear": "Deve usare la porta laterale.",
            "sv": "Du måste använda sidodörren.",
            "task": "Fråga om den leder till samma gata.",
            "say": "Dà sulla stessa strada?",
            "reply": "No, dà sulla piazza dietro.",
            "replySv": "Nej, den leder till torget bakom."
          },
          {
            "hear": "Vuole che l’accompagni?",
            "sv": "Vill du att jag följer med dig?",
            "task": "Tacka och säg att du hittar nu.",
            "say": "Grazie, adesso so dove andare.",
            "reply": "Perfetto. Buona serata.",
            "replySv": "Perfekt. God kväll."
          }
        ]
      },
      {
        "id": "charger",
        "title": "1 % batteri",
        "icon": "🔋",
        "intro": "Lös ett akut men vardagligt mobilproblem",
        "turns": [
          {
            "hear": "Cerca una presa?",
            "sv": "Letar du efter ett eluttag?",
            "task": "Säg att mobilen nästan är urladdad.",
            "say": "Sì, il mio telefono è quasi scarico.",
            "reply": "Ce n’è una dietro quel tavolo.",
            "replySv": "Det finns ett bakom bordet."
          },
          {
            "hear": "Ha un caricabatterie?",
            "sv": "Har du laddare?",
            "task": "Säg att du glömde din och fråga om du får låna en.",
            "say": "L’ho dimenticato. Posso prenderne uno in prestito?",
            "reply": "Credo di averne uno compatibile.",
            "replySv": "Jag tror att jag har en som passar."
          },
          {
            "hear": "È questo il connettore?",
            "sv": "Är det den här kontakten?",
            "task": "Säg att den passar och tacka.",
            "say": "Sì, va bene. Grazie mille.",
            "reply": "Prego.",
            "replySv": "Ingen orsak."
          }
        ]
      },
      {
        "id": "laundry",
        "title": "Tvättmaskinen vägrar",
        "icon": "🧺",
        "intro": "Be om hjälp i en tvättomat",
        "turns": [
          {
            "hear": "La macchina non parte?",
            "sv": "Startar inte maskinen?",
            "task": "Säg att du redan har betalat.",
            "say": "No, e ho già pagato.",
            "reply": "A volte bisogna richiudere lo sportello.",
            "replySv": "Ibland måste man stänga luckan igen."
          },
          {
            "hear": "Adesso compare un errore.",
            "sv": "Nu visas ett felmeddelande.",
            "task": "Fråga vad felkoden betyder.",
            "say": "Che cosa significa questo codice?",
            "reply": "Dice che c’è troppa roba.",
            "replySv": "Det står att det är för mycket tvätt."
          },
          {
            "hear": "Può usare la macchina accanto.",
            "sv": "Du kan använda maskinen bredvid.",
            "task": "Fråga om betalningen kan flyttas dit.",
            "say": "Si può trasferire il pagamento su quella macchina?",
            "reply": "Sì, ci penso io.",
            "replySv": "Ja, jag ordnar det."
          }
        ]
      },
      {
        "id": "keys",
        "title": "Nyckeln fungerar inte",
        "icon": "🔑",
        "intro": "Kom in när låset krånglar",
        "turns": [
          {
            "hear": "La chiave non funziona?",
            "sv": "Fungerar inte din nyckel?",
            "task": "Säg att den fungerade i morse.",
            "say": "Stamattina funzionava.",
            "reply": "Mi faccia provare.",
            "replySv": "Låt mig prova den."
          },
          {
            "hear": "Sembra che la serratura sia bloccata.",
            "sv": "Det verkar som att låset har fastnat.",
            "task": "Fråga om det finns en reservnyckel.",
            "say": "C’è una chiave di riserva?",
            "reply": "Sì, ma è in ufficio.",
            "replySv": "Ja, men den finns på kontoret."
          },
          {
            "hear": "Posso prenderla in cinque minuti.",
            "sv": "Jag kan hämta den på fem minuter.",
            "task": "Säg att du väntar här.",
            "say": "Grazie, aspetto qui.",
            "reply": "Torno subito.",
            "replySv": "Jag är strax tillbaka."
          }
        ]
      },
      {
        "id": "weather_plan",
        "title": "Planen regnar bort",
        "icon": "🌧️",
        "intro": "Ändra plan tillsammans med någon",
        "turns": [
          {
            "hear": "Sembra che pioverà tutto il giorno.",
            "sv": "Det verkar regna hela dagen.",
            "task": "Säg att ni kanske borde ändra planen.",
            "say": "Forse dovremmo cambiare programma.",
            "reply": "Che cosa ti va di fare?",
            "replySv": "Vad känner du för att göra?"
          },
          {
            "hear": "Potremmo andare a una mostra.",
            "sv": "Vi kunde gå på en utställning.",
            "task": "Säg att du hellre vill hitta något lokalt och mindre turistigt.",
            "say": "Preferisco qualcosa di locale e meno turistico.",
            "reply": "Conosco un piccolo posto qui vicino.",
            "replySv": "Jag känner till ett litet ställe i närheten."
          },
          {
            "hear": "Andiamo a piedi o in autobus?",
            "sv": "Går vi eller tar vi buss?",
            "task": "Föreslå bussen eftersom det regnar.",
            "say": "Meglio l’autobus, con questa pioggia.",
            "reply": "Buona idea.",
            "replySv": "Bra idé."
          }
        ]
      },
      {
        "id": "photo",
        "title": "Fotohjälp",
        "icon": "📷",
        "intro": "Be en främling om en bättre bild",
        "turns": [
          {
            "hear": "Vuole che le faccia una foto?",
            "sv": "Vill du att jag tar en bild på dig?",
            "task": "Tacka och be att hela byggnaden kommer med.",
            "say": "Sì, grazie. Può includere tutto l’edificio?",
            "reply": "Certo. Si sposti un po’ a sinistra.",
            "replySv": "Självklart. Ställ dig lite till vänster."
          },
          {
            "hear": "Così va bene?",
            "sv": "Är det bra så?",
            "task": "Be om en bild i liggande format också.",
            "say": "Sì. Può farne un’altra in orizzontale?",
            "reply": "Certamente.",
            "replySv": "Självklart."
          },
          {
            "hear": "Vuole vederla?",
            "sv": "Vill du se den?",
            "task": "Säg att den blev bra och tacka.",
            "say": "È venuta molto bene. Grazie mille.",
            "reply": "Con piacere.",
            "replySv": "Gärna."
          }
        ]
      },
      {
        "id": "local_event",
        "title": "Vad händer här?",
        "icon": "🎭",
        "intro": "Ta reda på vad lokalborna gör",
        "turns": [
          {
            "hear": "Oggi c’è molta gente in piazza.",
            "sv": "Det är mycket folk på torget idag.",
            "task": "Fråga vad som händer.",
            "say": "Che cosa succede qui oggi?",
            "reply": "C’è una festa di quartiere.",
            "replySv": "Det är en kvartersfestival."
          },
          {
            "hear": "Comincia alle sei.",
            "sv": "Den börjar klockan sex.",
            "task": "Fråga om man behöver biljett.",
            "say": "Serve un biglietto?",
            "reply": "No, è gratis.",
            "replySv": "Nej, det är gratis."
          },
          {
            "hear": "Ci sarà anche musica dal vivo.",
            "sv": "Det blir också livemusik.",
            "task": "Fråga vilken tid musiken börjar.",
            "say": "A che ora comincia la musica?",
            "reply": "Verso le otto.",
            "replySv": "Runt åtta."
          }
        ]
      },
      {
        "id": "missed_bus",
        "title": "Missad sista buss",
        "icon": "🚌",
        "intro": "Hitta en lösning sent på kvällen",
        "turns": [
          {
            "hear": "L’ultimo autobus è già partito.",
            "sv": "Sista bussen har redan gått.",
            "task": "Fråga om det finns något annat sätt att ta sig till centrum.",
            "say": "C’è un altro modo per arrivare in centro?",
            "reply": "Può prendere il tram fino a mezzanotte.",
            "replySv": "Du kan ta spårvagnen till midnatt."
          },
          {
            "hear": "La fermata è a dieci minuti.",
            "sv": "Hållplatsen ligger tio minuter bort.",
            "task": "Fråga åt vilket håll du ska gå.",
            "say": "In che direzione devo andare?",
            "reply": "Segua questa strada fino al semaforo.",
            "replySv": "Följ den här gatan till trafikljuset."
          },
          {
            "hear": "Il tram passa ogni venti minuti.",
            "sv": "Spårvagnen går var tjugonde minut.",
            "task": "Tacka och fråga om du kan köpa biljett ombord.",
            "say": "Grazie. Posso comprare il biglietto a bordo?",
            "reply": "No, lo compri nell’app o alla fermata.",
            "replySv": "Nej, köp den i appen eller vid hållplatsen."
          }
        ]
      },
      {
        "id": "train_seat",
        "title": "Någon sitter på din plats",
        "icon": "💺",
        "intro": "Lös en platsförväxling vänligt",
        "turns": [
          {
            "hear": "Credo che questo sia il mio posto.",
            "sv": "Jag tror att det här är min plats.",
            "task": "Säg att din biljett visar samma plats.",
            "say": "Anche il mio biglietto indica questo posto.",
            "reply": "Confrontiamo i biglietti.",
            "replySv": "Vi jämför biljetterna."
          },
          {
            "hear": "Ah, il mio biglietto è per domani.",
            "sv": "Ah, min biljett är för i morgon.",
            "task": "Säg att sådant händer.",
            "say": "Non fa niente, può capitare.",
            "reply": "Che distrazione.",
            "replySv": "Så tankspritt av mig."
          },
          {
            "hear": "Cercherò un altro posto.",
            "sv": "Jag letar efter en annan plats.",
            "task": "Säg att personen kan sitta kvar tills konduktören kommer.",
            "say": "Può restare finché non arriva il controllore.",
            "reply": "Grazie mille.",
            "replySv": "Tack så mycket."
          }
        ]
      },
      {
        "id": "ingredient",
        "title": "Okänd ingrediens",
        "icon": "🥬",
        "intro": "Förstå något du aldrig sett förut",
        "turns": [
          {
            "hear": "Cerca qualcosa in particolare?",
            "sv": "Letar du efter något särskilt?",
            "task": "Fråga vad den här grönsaken heter.",
            "say": "Sì, come si chiama questa verdura?",
            "reply": "Si chiama bietola.",
            "replySv": "Den heter mangold."
          },
          {
            "hear": "L’ha mai assaggiata?",
            "sv": "Har du provat den någon gång?",
            "task": "Säg nej och fråga hur man brukar tillaga den.",
            "say": "No. Come si cucina di solito?",
            "reply": "Si può saltare con l’aglio.",
            "replySv": "Man kan steka den med vitlök."
          },
          {
            "hear": "Vuole prenderne un mazzo?",
            "sv": "Vill du ta en bunt?",
            "task": "Säg ja och fråga hur länge den håller.",
            "say": "Sì. Quanto tempo si conserva?",
            "reply": "Circa tre giorni in frigorifero.",
            "replySv": "Ungefär tre dagar i kylskåp."
          }
        ]
      },
      {
        "id": "clothes",
        "title": "Storleken finns inte",
        "icon": "👕",
        "intro": "Hitta ett alternativ i en butik",
        "turns": [
          {
            "hear": "Non abbiamo più quella taglia.",
            "sv": "Vi har inte den storleken kvar.",
            "task": "Fråga om de har samma plagg i en annan färg.",
            "say": "Lo avete in un altro colore?",
            "reply": "Sì, in blu e in nero.",
            "replySv": "Ja, i blått och svart."
          },
          {
            "hear": "Vuole provare quello blu?",
            "sv": "Vill du prova den blå?",
            "task": "Säg ja och fråga var provrummet är.",
            "say": "Sì. Dov’è il camerino?",
            "reply": "In fondo, a destra.",
            "replySv": "Längst in till höger."
          },
          {
            "hear": "Come le sta?",
            "sv": "Hur sitter den?",
            "task": "Säg att ärmarna är lite för långa.",
            "say": "Le maniche sono un po’ lunghe.",
            "reply": "Posso cercare un altro modello.",
            "replySv": "Jag kan leta efter en annan modell."
          }
        ]
      },
      {
        "id": "recycling",
        "title": "Sorteringsmysteriet",
        "icon": "♻️",
        "intro": "Fråga hur lokala regler fungerar",
        "turns": [
          {
            "hear": "Non sa dove buttare quello?",
            "sv": "Vet du inte var det ska slängas?",
            "task": "Säg att du inte vet vilken behållare glas ska i.",
            "say": "Non so in quale contenitore va il vetro.",
            "reply": "Quello verde è per il vetro.",
            "replySv": "Den gröna är för glas."
          },
          {
            "hear": "E i tappi di metallo?",
            "sv": "Och metallocken?",
            "task": "Säg att du trodde de skulle sorteras separat.",
            "say": "Pensavo che andassero separati.",
            "reply": "Sì, vanno nel contenitore giallo.",
            "replySv": "Ja, de ska i den gula behållaren."
          },
          {
            "hear": "Qui ricicliamo quasi tutto.",
            "sv": "Här återvinner vi nästan allt.",
            "task": "Säg att reglerna är annorlunda hemma hos dig.",
            "say": "Nel mio paese le regole sono diverse.",
            "reply": "Sì, cambia molto da un posto all’altro.",
            "replySv": "Ja, det varierar mycket mellan olika platser."
          }
        ]
      },
      {
        "id": "elevator",
        "title": "Hissen stannar",
        "icon": "🛗",
        "intro": "Kommunicera lugnt när något oväntat händer",
        "turns": [
          {
            "hear": "Sembra che l’ascensore si sia fermato.",
            "sv": "Det verkar som att hissen har stannat.",
            "task": "Säg att du trycker på larmknappen.",
            "say": "Premo il pulsante di allarme.",
            "reply": "Bene, io telefono.",
            "replySv": "Bra, jag ringer."
          },
          {
            "hear": "Dicono che arrivano tra dieci minuti.",
            "sv": "De säger att de kommer om tio minuter.",
            "task": "Fråga om dörrarna ska lämnas i fred.",
            "say": "Dobbiamo lasciare stare le porte?",
            "reply": "Sì, meglio non toccarle.",
            "replySv": "Ja, bäst att inte röra dem."
          },
          {
            "hear": "I tecnici stanno arrivando.",
            "sv": "Teknikerna är på väg nu.",
            "task": "Säg att det är skönt att höra.",
            "say": "Mi fa piacere sentirlo.",
            "reply": "Presto usciremo.",
            "replySv": "Snart kommer vi ut."
          }
        ]
      },
      {
        "id": "dog",
        "title": "Hundmöte",
        "icon": "🐕",
        "intro": "Småprata spontant med en hundägare",
        "turns": [
          {
            "hear": "Non si preoccupi, è molto tranquillo.",
            "sv": "Oroa dig inte, den är väldigt lugn.",
            "task": "Fråga om du får klappa hunden.",
            "say": "Posso accarezzarlo?",
            "reply": "Sì, certo. Gli piace molto.",
            "replySv": "Ja, självklart. Den älskar det."
          },
          {
            "hear": "Si chiama Bruno.",
            "sv": "Han heter Bruno.",
            "task": "Fråga hur gammal han är.",
            "say": "Quanti anni ha?",
            "reply": "Ha quattro anni.",
            "replySv": "Han är fyra år."
          },
          {
            "hear": "Ha un cane anche lei?",
            "sv": "Har du också hund?",
            "task": "Säg nej men att du tycker mycket om hundar.",
            "say": "No, ma mi piacciono molto i cani.",
            "reply": "Allora Bruno ha già un nuovo amico.",
            "replySv": "Då har Bruno redan fått en ny vän."
          }
        ]
      }
    ],
    "phrases": [
      [
        "Pensavo che questo treno andasse a Madrid.",
        "att du trodde att tåget gick till Madrid."
      ],
      [
        "Sì. Il mio biglietto è ancora valido?",
        "ja och fråga om biljetten fortfarande gäller."
      ],
      [
        "Sì, grazie. Può mostrarmelo sulla mappa?",
        "be personen visa det på kartan."
      ],
      [
        "La mia è quasi uguale.",
        "att din väska ser nästan likadan ut."
      ],
      [
        "Il mio nome è sull’etichetta.",
        "att ditt namn står på etiketten."
      ],
      [
        "Non fa niente. Buon viaggio!",
        "att det inte gör något och önska en trevlig resa."
      ],
      [
        "È di questa zona?",
        "om den är från trakten."
      ],
      [
        "Mi piace, ma mi sta un po’ grande.",
        "att du gillar den men att den är lite stor."
      ],
      [
        "La prendo se costa venti euro.",
        "att du tar den om priset är tjugo euro."
      ],
      [
        "Ciao, sono Mikael. Mi sono appena trasferito.",
        "Presentera dig och säg att du just flyttat in."
      ],
      [
        "Ieri sera si sentiva un po’.",
        "att den hördes lite i går kväll."
      ],
      [
        "Sì, dov’è la raccolta differenziata?",
        "var återvinningen finns."
      ],
      [
        "L’indirizzo è giusto, ma il mio nome è scritto male.",
        "att adressen är rätt men namnet är felstavat."
      ],
      [
        "Aspetto un pacco dalla Finlandia.",
        "Förklara att du väntar på ett paket från Finland."
      ],
      [
        "Grazie. Dove devo firmare?",
        "fråga var du ska skriva under."
      ],
      [
        "Ho una videochiamata tra dieci minuti.",
        "att du har ett videosamtal om tio minuter."
      ],
      [
        "Il wifi funziona bene lì?",
        "om wifi fungerar bra där."
      ],
      [
        "Sì, posso prenderne uno in prestito?",
        "ja och fråga om du får låna en."
      ],
      [
        "Il freno fa uno strano rumore.",
        "att bromsen låter konstigt."
      ],
      [
        "Può gonfiarla anche?",
        "om de kan pumpa det."
      ],
      [
        "Perfetto, aspetto fuori.",
        "att du väntar utanför."
      ],
      [
        "Non trovo l’uscita.",
        "att du inte hittar utgången."
      ],
      [
        "Dà sulla stessa strada?",
        "om den leder till samma gata."
      ],
      [
        "Grazie, adesso so dove andare.",
        "säg att du hittar nu."
      ],
      [
        "Sì, il mio telefono è quasi scarico.",
        "att mobilen nästan är urladdad."
      ],
      [
        "L’ho dimenticato. Posso prenderne uno in prestito?",
        "att du glömde din och fråga om du får låna en."
      ],
      [
        "Sì, va bene. Grazie mille.",
        "att den passar och tacka."
      ],
      [
        "No, e ho già pagato.",
        "att du redan har betalat."
      ],
      [
        "Che cosa significa questo codice?",
        "vad felkoden betyder."
      ],
      [
        "Si può trasferire il pagamento su quella macchina?",
        "om betalningen kan flyttas dit."
      ],
      [
        "Stamattina funzionava.",
        "att den fungerade i morse."
      ],
      [
        "C’è una chiave di riserva?",
        "om det finns en reservnyckel."
      ],
      [
        "Grazie, aspetto qui.",
        "att du väntar här."
      ],
      [
        "Forse dovremmo cambiare programma.",
        "att ni kanske borde ändra planen."
      ],
      [
        "Preferisco qualcosa di locale e meno turistico.",
        "att du hellre vill hitta något lokalt och mindre turistigt."
      ],
      [
        "Meglio l’autobus, con questa pioggia.",
        "Föreslå bussen eftersom det regnar."
      ],
      [
        "Sì, grazie. Può includere tutto l’edificio?",
        "be att hela byggnaden kommer med."
      ],
      [
        "Sì. Può farne un’altra in orizzontale?",
        "Be om en bild i liggande format också."
      ],
      [
        "È venuta molto bene. Grazie mille.",
        "att den blev bra och tacka."
      ],
      [
        "Che cosa succede qui oggi?",
        "vad som händer."
      ],
      [
        "Serve un biglietto?",
        "om man behöver biljett."
      ],
      [
        "A che ora comincia la musica?",
        "vilken tid musiken börjar."
      ],
      [
        "C’è un altro modo per arrivare in centro?",
        "om det finns något annat sätt att ta sig till centrum."
      ],
      [
        "In che direzione devo andare?",
        "åt vilket håll du ska gå."
      ],
      [
        "Grazie. Posso comprare il biglietto a bordo?",
        "fråga om du kan köpa biljett ombord."
      ],
      [
        "Anche il mio biglietto indica questo posto.",
        "att din biljett visar samma plats."
      ],
      [
        "Non fa niente, può capitare.",
        "att sådant händer."
      ],
      [
        "Può restare finché non arriva il controllore.",
        "att personen kan sitta kvar tills konduktören kommer."
      ],
      [
        "Sì, come si chiama questa verdura?",
        "vad den här grönsaken heter."
      ],
      [
        "No. Come si cucina di solito?",
        "nej och fråga hur man brukar tillaga den."
      ],
      [
        "Sì. Quanto tempo si conserva?",
        "ja och fråga hur länge den håller."
      ],
      [
        "Lo avete in un altro colore?",
        "om de har samma plagg i en annan färg."
      ],
      [
        "Sì. Dov’è il camerino?",
        "ja och fråga var provrummet är."
      ],
      [
        "Le maniche sono un po’ lunghe.",
        "att ärmarna är lite för långa."
      ],
      [
        "Non so in quale contenitore va il vetro.",
        "att du inte vet vilken behållare glas ska i."
      ],
      [
        "Pensavo che andassero separati.",
        "att du trodde de skulle sorteras separat."
      ],
      [
        "Nel mio paese le regole sono diverse.",
        "att reglerna är annorlunda hemma hos dig."
      ],
      [
        "Premo il pulsante di allarme.",
        "att du trycker på larmknappen."
      ],
      [
        "Dobbiamo lasciare stare le porte?",
        "om dörrarna ska lämnas i fred."
      ],
      [
        "Mi fa piacere sentirlo.",
        "att det är skönt att höra."
      ],
      [
        "Posso accarezzarlo?",
        "om du får klappa hunden."
      ],
      [
        "Quanti anni ha?",
        "hur gammal han är."
      ],
      [
        "No, ma mi piacciono molto i cani.",
        "nej men att du tycker mycket om hundar."
      ]
    ]
  },
  "de": {
    "code": "de-DE",
    "name": "tyska",
    "scenarios": [
      {
        "id": "wrong_train",
        "title": "Fel tåg",
        "icon": "🚆",
        "intro": "Upptäck misstaget och hitta rätt",
        "turns": [
          {
            "hear": "Entschuldigung, fährt dieser Zug nach Valencia?",
            "sv": "Ursäkta, går det här tåget till Valencia?",
            "task": "Säg att du trodde att tåget gick till Madrid.",
            "say": "Ich dachte, dieser Zug fährt nach Madrid.",
            "reply": "Nein, nach Madrid müssen Sie am nächsten Bahnhof umsteigen.",
            "replySv": "Nej, för Madrid måste du byta vid nästa station."
          },
          {
            "hear": "Haben Sie eine Fahrkarte nach Madrid?",
            "sv": "Har du biljett till Madrid?",
            "task": "Säg ja och fråga om biljetten fortfarande gäller.",
            "say": "Ja. Ist meine Fahrkarte noch gültig?",
            "reply": "Ja, Sie können dieselbe Fahrkarte benutzen.",
            "replySv": "Ja, du kan använda samma biljett."
          },
          {
            "hear": "Soll ich Ihnen zeigen, wo Sie umsteigen?",
            "sv": "Vill du att jag berättar var du ska byta?",
            "task": "Tacka och be personen visa det på kartan.",
            "say": "Ja, danke. Können Sie es mir auf der Karte zeigen?",
            "reply": "Natürlich, hier.",
            "replySv": "Självklart, det är här."
          }
        ]
      },
      {
        "id": "lost_bag",
        "title": "Fel väska",
        "icon": "🧳",
        "intro": "Red ut en förväxling vid bagagebandet",
        "turns": [
          {
            "hear": "Entschuldigung, ich glaube, das ist mein Koffer.",
            "sv": "Ursäkta, jag tror att den där väskan är min.",
            "task": "Säg att din väska ser nästan likadan ut.",
            "say": "Meiner sieht fast genauso aus.",
            "reply": "Schauen wir auf die Anhänger.",
            "replySv": "Vi tittar på bagagelapparna."
          },
          {
            "hear": "Wie heißen Sie?",
            "sv": "Vad heter du?",
            "task": "Säg att ditt namn står på etiketten.",
            "say": "Mein Name steht auf dem Anhänger.",
            "reply": "Ja, Sie haben recht. Das ist Ihrer.",
            "replySv": "Ja, du har rätt. Den här är din."
          },
          {
            "hear": "Entschuldigung für die Verwechslung.",
            "sv": "Förlåt för förväxlingen.",
            "task": "Säg att det inte gör något och önska en trevlig resa.",
            "say": "Kein Problem. Gute Reise!",
            "reply": "Danke, gleichfalls.",
            "replySv": "Detsamma, tack."
          }
        ]
      },
      {
        "id": "market",
        "title": "Loppmarknadsfynd",
        "icon": "🧥",
        "intro": "Fråga om ett märkligt fynd",
        "turns": [
          {
            "hear": "Interessieren Sie sich für diese alte Jacke?",
            "sv": "Är du intresserad av den här gamla jackan?",
            "task": "Fråga om den är från trakten.",
            "say": "Kommt sie aus dieser Gegend?",
            "reply": "Ja, sie gehörte meinem Großvater.",
            "replySv": "Ja, den tillhörde min farfar."
          },
          {
            "hear": "Sie ist aus den Siebzigern.",
            "sv": "Den är från sjuttiotalet.",
            "task": "Säg att du gillar den men att den är lite stor.",
            "say": "Sie gefällt mir, aber sie ist etwas groß.",
            "reply": "Sie können sie dort anprobieren.",
            "replySv": "Du kan prova den där."
          },
          {
            "hear": "Wie finden Sie sie?",
            "sv": "Vad tycker du?",
            "task": "Säg att du tar den om priset är tjugo euro.",
            "say": "Ich nehme sie für zwanzig Euro.",
            "reply": "Abgemacht.",
            "replySv": "Överenskommet."
          }
        ]
      },
      {
        "id": "neighbor",
        "title": "Ny granne",
        "icon": "🏠",
        "intro": "Lös en vardaglig grannsituation",
        "turns": [
          {
            "hear": "Hallo, ich bin Ihr Nachbar von oben.",
            "sv": "Hej, jag är din granne ovanför.",
            "task": "Presentera dig och säg att du just flyttat in.",
            "say": "Hallo, ich bin Mikael. Ich bin gerade eingezogen.",
            "reply": "Freut mich. Willkommen im Haus.",
            "replySv": "Trevligt. Välkommen till huset."
          },
          {
            "hear": "Hört man abends die Musik sehr?",
            "sv": "Hörs musiken mycket på kvällen?",
            "task": "Säg att den hördes lite i går kväll.",
            "say": "Gestern Abend hat man sie ein bisschen gehört.",
            "reply": "Tut mir leid, ich drehe leiser.",
            "replySv": "Förlåt, jag sänker volymen."
          },
          {
            "hear": "Brauchen Sie etwas für die Wohnung?",
            "sv": "Behöver du något till lägenheten?",
            "task": "Fråga var återvinningen finns.",
            "say": "Ja, wo ist die Mülltrennung?",
            "reply": "Im Hof.",
            "replySv": "Den finns på gården."
          }
        ]
      },
      {
        "id": "parcel",
        "title": "Mystiskt paket",
        "icon": "📦",
        "intro": "Hämta ett paket när något inte stämmer",
        "turns": [
          {
            "hear": "Ich habe ein Paket, aber der Name stimmt nicht.",
            "sv": "Jag har ett paket, men namnet stämmer inte.",
            "task": "Säg att adressen är rätt men namnet är felstavat.",
            "say": "Die Adresse stimmt, aber mein Name ist falsch geschrieben.",
            "reply": "Können Sie mir einen Ausweis zeigen?",
            "replySv": "Kan du visa legitimation?"
          },
          {
            "hear": "Die Adresse stimmt überein.",
            "sv": "Adressen stämmer.",
            "task": "Förklara att du väntar på ett paket från Finland.",
            "say": "Ich erwarte ein Paket aus Finnland.",
            "reply": "Einen Moment, ich prüfe das.",
            "replySv": "Ett ögonblick, jag kontrollerar."
          },
          {
            "hear": "Alles klar. Es war ein Fehler im System.",
            "sv": "Klart. Det var ett fel i systemet.",
            "task": "Tacka och fråga var du ska skriva under.",
            "say": "Danke. Wo muss ich unterschreiben?",
            "reply": "Hier, bitte.",
            "replySv": "Här, tack."
          }
        ]
      },
      {
        "id": "coworking",
        "title": "Coworking-strul",
        "icon": "💻",
        "intro": "Få arbetsdagen att fungera",
        "turns": [
          {
            "hear": "Der Raum, den Sie reserviert haben, ist besetzt.",
            "sv": "Rummet du bokade är upptaget.",
            "task": "Säg att du har ett videosamtal om tio minuter.",
            "say": "Ich habe in zehn Minuten einen Videoanruf.",
            "reply": "Ich kann Ihnen einen anderen Raum suchen.",
            "replySv": "Jag kan hitta ett annat rum åt dig."
          },
          {
            "hear": "Im zweiten Stock ist ein Raum frei.",
            "sv": "Det finns ett ledigt rum på andra våningen.",
            "task": "Fråga om wifi fungerar bra där.",
            "say": "Funktioniert das WLAN dort gut?",
            "reply": "Ja, die Verbindung ist schnell.",
            "replySv": "Ja, anslutningen är snabb."
          },
          {
            "hear": "Brauchen Sie einen Adapter?",
            "sv": "Behöver du en adapter?",
            "task": "Säg ja och fråga om du får låna en.",
            "say": "Ja, kann ich einen ausleihen?",
            "reply": "Natürlich, bitte sehr.",
            "replySv": "Självklart, varsågod."
          }
        ]
      },
      {
        "id": "bike",
        "title": "Cykel med problem",
        "icon": "🚲",
        "intro": "Hantera ett fel på en hyrd cykel",
        "turns": [
          {
            "hear": "Was ist mit dem Fahrrad los?",
            "sv": "Vad är det för problem med cykeln?",
            "task": "Säg att bromsen låter konstigt.",
            "say": "Die Bremse macht ein komisches Geräusch.",
            "reply": "Ich schaue es mir an.",
            "replySv": "Jag ska kontrollera det."
          },
          {
            "hear": "Der Reifen hat auch etwas wenig Luft.",
            "sv": "Däcket har också lite för lite luft.",
            "task": "Fråga om de kan pumpa det.",
            "say": "Können Sie ihn auch aufpumpen?",
            "reply": "Ja, kein Problem.",
            "replySv": "Ja, inga problem."
          },
          {
            "hear": "Es dauert ungefähr zehn Minuten.",
            "sv": "Det tar ungefär tio minuter.",
            "task": "Säg att du väntar utanför.",
            "say": "Perfekt, ich warte draußen.",
            "reply": "Ich sage Ihnen Bescheid, wenn es fertig ist.",
            "replySv": "Jag säger till när den är klar."
          }
        ]
      },
      {
        "id": "museum",
        "title": "Efter stängning",
        "icon": "🖼️",
        "intro": "Hitta ut och få hjälp på ett museum",
        "turns": [
          {
            "hear": "Das Museum schließt gerade.",
            "sv": "Museet håller på att stänga.",
            "task": "Säg att du inte hittar utgången.",
            "say": "Ich finde den Ausgang nicht.",
            "reply": "Der Haupteingang ist schon geschlossen.",
            "replySv": "Huvudentrén är stängd."
          },
          {
            "hear": "Sie müssen die Seitentür nehmen.",
            "sv": "Du måste använda sidodörren.",
            "task": "Fråga om den leder till samma gata.",
            "say": "Kommt man dort auf dieselbe Straße?",
            "reply": "Nein, auf den Platz dahinter.",
            "replySv": "Nej, den leder till torget bakom."
          },
          {
            "hear": "Soll ich Sie begleiten?",
            "sv": "Vill du att jag följer med dig?",
            "task": "Tacka och säg att du hittar nu.",
            "say": "Danke, jetzt weiß ich, wo es langgeht.",
            "reply": "Perfekt. Schönen Abend.",
            "replySv": "Perfekt. God kväll."
          }
        ]
      },
      {
        "id": "charger",
        "title": "1 % batteri",
        "icon": "🔋",
        "intro": "Lös ett akut men vardagligt mobilproblem",
        "turns": [
          {
            "hear": "Suchen Sie eine Steckdose?",
            "sv": "Letar du efter ett eluttag?",
            "task": "Säg att mobilen nästan är urladdad.",
            "say": "Ja, mein Handy ist fast leer.",
            "reply": "Hinter dem Tisch ist eine.",
            "replySv": "Det finns ett bakom bordet."
          },
          {
            "hear": "Haben Sie ein Ladegerät?",
            "sv": "Har du laddare?",
            "task": "Säg att du glömde din och fråga om du får låna en.",
            "say": "Ich habe meins vergessen. Kann ich eins ausleihen?",
            "reply": "Ich glaube, ich habe ein passendes.",
            "replySv": "Jag tror att jag har en som passar."
          },
          {
            "hear": "Ist das der richtige Anschluss?",
            "sv": "Är det den här kontakten?",
            "task": "Säg att den passar och tacka.",
            "say": "Ja, der passt. Vielen Dank.",
            "reply": "Gern.",
            "replySv": "Ingen orsak."
          }
        ]
      },
      {
        "id": "laundry",
        "title": "Tvättmaskinen vägrar",
        "icon": "🧺",
        "intro": "Be om hjälp i en tvättomat",
        "turns": [
          {
            "hear": "Startet die Maschine nicht?",
            "sv": "Startar inte maskinen?",
            "task": "Säg att du redan har betalat.",
            "say": "Nein, und ich habe schon bezahlt.",
            "reply": "Manchmal muss man die Tür noch einmal schließen.",
            "replySv": "Ibland måste man stänga luckan igen."
          },
          {
            "hear": "Jetzt zeigt sie einen Fehler an.",
            "sv": "Nu visas ett felmeddelande.",
            "task": "Fråga vad felkoden betyder.",
            "say": "Was bedeutet dieser Fehlercode?",
            "reply": "Da steht, dass zu viel Wäsche drin ist.",
            "replySv": "Det står att det är för mycket tvätt."
          },
          {
            "hear": "Sie können die Maschine daneben nehmen.",
            "sv": "Du kan använda maskinen bredvid.",
            "task": "Fråga om betalningen kan flyttas dit.",
            "say": "Kann die Zahlung auf diese Maschine übertragen werden?",
            "reply": "Ja, ich kümmere mich darum.",
            "replySv": "Ja, jag ordnar det."
          }
        ]
      },
      {
        "id": "keys",
        "title": "Nyckeln fungerar inte",
        "icon": "🔑",
        "intro": "Kom in när låset krånglar",
        "turns": [
          {
            "hear": "Funktioniert Ihr Schlüssel nicht?",
            "sv": "Fungerar inte din nyckel?",
            "task": "Säg att den fungerade i morse.",
            "say": "Heute Morgen hat er noch funktioniert.",
            "reply": "Lassen Sie mich probieren.",
            "replySv": "Låt mig prova den."
          },
          {
            "hear": "Das Schloss scheint blockiert zu sein.",
            "sv": "Det verkar som att låset har fastnat.",
            "task": "Fråga om det finns en reservnyckel.",
            "say": "Gibt es einen Ersatzschlüssel?",
            "reply": "Ja, aber er ist im Büro.",
            "replySv": "Ja, men den finns på kontoret."
          },
          {
            "hear": "Ich kann ihn in fünf Minuten holen.",
            "sv": "Jag kan hämta den på fem minuter.",
            "task": "Säg att du väntar här.",
            "say": "Danke, ich warte hier.",
            "reply": "Ich bin gleich zurück.",
            "replySv": "Jag är strax tillbaka."
          }
        ]
      },
      {
        "id": "weather_plan",
        "title": "Planen regnar bort",
        "icon": "🌧️",
        "intro": "Ändra plan tillsammans med någon",
        "turns": [
          {
            "hear": "Es sieht so aus, als würde es den ganzen Tag regnen.",
            "sv": "Det verkar regna hela dagen.",
            "task": "Säg att ni kanske borde ändra planen.",
            "say": "Vielleicht sollten wir unseren Plan ändern.",
            "reply": "Was möchtest du machen?",
            "replySv": "Vad känner du för att göra?"
          },
          {
            "hear": "Wir könnten in eine Ausstellung gehen.",
            "sv": "Vi kunde gå på en utställning.",
            "task": "Säg att du hellre vill hitta något lokalt och mindre turistigt.",
            "say": "Ich hätte lieber etwas Lokales und weniger Touristisches.",
            "reply": "Ich kenne einen kleinen Ort hier in der Nähe.",
            "replySv": "Jag känner till ett litet ställe i närheten."
          },
          {
            "hear": "Gehen wir zu Fuß oder fahren wir mit dem Bus?",
            "sv": "Går vi eller tar vi buss?",
            "task": "Föreslå bussen eftersom det regnar.",
            "say": "Bei diesem Regen lieber mit dem Bus.",
            "reply": "Gute Idee.",
            "replySv": "Bra idé."
          }
        ]
      },
      {
        "id": "photo",
        "title": "Fotohjälp",
        "icon": "📷",
        "intro": "Be en främling om en bättre bild",
        "turns": [
          {
            "hear": "Soll ich ein Foto von Ihnen machen?",
            "sv": "Vill du att jag tar en bild på dig?",
            "task": "Tacka och be att hela byggnaden kommer med.",
            "say": "Ja, danke. Können Sie das ganze Gebäude mit aufs Bild nehmen?",
            "reply": "Natürlich. Gehen Sie etwas nach links.",
            "replySv": "Självklart. Ställ dig lite till vänster."
          },
          {
            "hear": "Ist es so gut?",
            "sv": "Är det bra så?",
            "task": "Be om en bild i liggande format också.",
            "say": "Ja. Können Sie noch eins im Querformat machen?",
            "reply": "Natürlich.",
            "replySv": "Självklart."
          },
          {
            "hear": "Möchten Sie es sehen?",
            "sv": "Vill du se den?",
            "task": "Säg att den blev bra och tacka.",
            "say": "Es ist sehr gut geworden. Vielen Dank.",
            "reply": "Gern geschehen.",
            "replySv": "Gärna."
          }
        ]
      },
      {
        "id": "local_event",
        "title": "Vad händer här?",
        "icon": "🎭",
        "intro": "Ta reda på vad lokalborna gör",
        "turns": [
          {
            "hear": "Heute sind viele Leute auf dem Platz.",
            "sv": "Det är mycket folk på torget idag.",
            "task": "Fråga vad som händer.",
            "say": "Was ist heute hier los?",
            "reply": "Es gibt ein Nachbarschaftsfest.",
            "replySv": "Det är en kvartersfestival."
          },
          {
            "hear": "Es beginnt um sechs.",
            "sv": "Den börjar klockan sex.",
            "task": "Fråga om man behöver biljett.",
            "say": "Braucht man eine Eintrittskarte?",
            "reply": "Nein, es ist kostenlos.",
            "replySv": "Nej, det är gratis."
          },
          {
            "hear": "Es gibt auch Live-Musik.",
            "sv": "Det blir också livemusik.",
            "task": "Fråga vilken tid musiken börjar.",
            "say": "Wann beginnt die Musik?",
            "reply": "Gegen acht.",
            "replySv": "Runt åtta."
          }
        ]
      },
      {
        "id": "missed_bus",
        "title": "Missad sista buss",
        "icon": "🚌",
        "intro": "Hitta en lösning sent på kvällen",
        "turns": [
          {
            "hear": "Der letzte Bus ist schon weg.",
            "sv": "Sista bussen har redan gått.",
            "task": "Fråga om det finns något annat sätt att ta sig till centrum.",
            "say": "Gibt es eine andere Möglichkeit, ins Zentrum zu kommen?",
            "reply": "Sie können bis Mitternacht die Straßenbahn nehmen.",
            "replySv": "Du kan ta spårvagnen till midnatt."
          },
          {
            "hear": "Die Haltestelle ist zehn Minuten entfernt.",
            "sv": "Hållplatsen ligger tio minuter bort.",
            "task": "Fråga åt vilket håll du ska gå.",
            "say": "In welche Richtung muss ich gehen?",
            "reply": "Gehen Sie diese Straße bis zur Ampel.",
            "replySv": "Följ den här gatan till trafikljuset."
          },
          {
            "hear": "Die Straßenbahn fährt alle zwanzig Minuten.",
            "sv": "Spårvagnen går var tjugonde minut.",
            "task": "Tacka och fråga om du kan köpa biljett ombord.",
            "say": "Danke. Kann ich die Fahrkarte in der Bahn kaufen?",
            "reply": "Nein, kaufen Sie sie in der App oder an der Haltestelle.",
            "replySv": "Nej, köp den i appen eller vid hållplatsen."
          }
        ]
      },
      {
        "id": "train_seat",
        "title": "Någon sitter på din plats",
        "icon": "💺",
        "intro": "Lös en platsförväxling vänligt",
        "turns": [
          {
            "hear": "Ich glaube, das ist mein Platz.",
            "sv": "Jag tror att det här är min plats.",
            "task": "Säg att din biljett visar samma plats.",
            "say": "Auf meiner Fahrkarte steht auch dieser Platz.",
            "reply": "Vergleichen wir die Fahrkarten.",
            "replySv": "Vi jämför biljetterna."
          },
          {
            "hear": "Ach, meine Fahrkarte ist für morgen.",
            "sv": "Ah, min biljett är för i morgon.",
            "task": "Säg att sådant händer.",
            "say": "Kein Problem, so etwas passiert.",
            "reply": "Wie peinlich.",
            "replySv": "Så tankspritt av mig."
          },
          {
            "hear": "Ich suche mir einen anderen Platz.",
            "sv": "Jag letar efter en annan plats.",
            "task": "Säg att personen kan sitta kvar tills konduktören kommer.",
            "say": "Sie können bleiben, bis der Schaffner kommt.",
            "reply": "Vielen Dank.",
            "replySv": "Tack så mycket."
          }
        ]
      },
      {
        "id": "ingredient",
        "title": "Okänd ingrediens",
        "icon": "🥬",
        "intro": "Förstå något du aldrig sett förut",
        "turns": [
          {
            "hear": "Suchen Sie etwas Bestimmtes?",
            "sv": "Letar du efter något särskilt?",
            "task": "Fråga vad den här grönsaken heter.",
            "say": "Ja, wie heißt dieses Gemüse?",
            "reply": "Das ist Mangold.",
            "replySv": "Den heter mangold."
          },
          {
            "hear": "Haben Sie ihn schon einmal probiert?",
            "sv": "Har du provat den någon gång?",
            "task": "Säg nej och fråga hur man brukar tillaga den.",
            "say": "Nein. Wie bereitet man ihn normalerweise zu?",
            "reply": "Man kann ihn mit Knoblauch anbraten.",
            "replySv": "Man kan steka den med vitlök."
          },
          {
            "hear": "Möchten Sie einen Bund nehmen?",
            "sv": "Vill du ta en bunt?",
            "task": "Säg ja och fråga hur länge den håller.",
            "say": "Ja. Wie lange hält er sich?",
            "reply": "Etwa drei Tage im Kühlschrank.",
            "replySv": "Ungefär tre dagar i kylskåp."
          }
        ]
      },
      {
        "id": "clothes",
        "title": "Storleken finns inte",
        "icon": "👕",
        "intro": "Hitta ett alternativ i en butik",
        "turns": [
          {
            "hear": "Diese Größe haben wir nicht mehr.",
            "sv": "Vi har inte den storleken kvar.",
            "task": "Fråga om de har samma plagg i en annan färg.",
            "say": "Haben Sie es in einer anderen Farbe?",
            "reply": "Ja, in Blau und Schwarz.",
            "replySv": "Ja, i blått och svart."
          },
          {
            "hear": "Möchten Sie das blaue anprobieren?",
            "sv": "Vill du prova den blå?",
            "task": "Säg ja och fråga var provrummet är.",
            "say": "Ja. Wo ist die Umkleidekabine?",
            "reply": "Hinten rechts.",
            "replySv": "Längst in till höger."
          },
          {
            "hear": "Wie sitzt es?",
            "sv": "Hur sitter den?",
            "task": "Säg att ärmarna är lite för långa.",
            "say": "Die Ärmel sind etwas zu lang.",
            "reply": "Ich kann ein anderes Modell suchen.",
            "replySv": "Jag kan leta efter en annan modell."
          }
        ]
      },
      {
        "id": "recycling",
        "title": "Sorteringsmysteriet",
        "icon": "♻️",
        "intro": "Fråga hur lokala regler fungerar",
        "turns": [
          {
            "hear": "Wissen Sie nicht, wohin das gehört?",
            "sv": "Vet du inte var det ska slängas?",
            "task": "Säg att du inte vet vilken behållare glas ska i.",
            "say": "Ich weiß nicht, in welchen Behälter Glas kommt.",
            "reply": "Der grüne ist für Glas.",
            "replySv": "Den gröna är för glas."
          },
          {
            "hear": "Und die Metalldeckel?",
            "sv": "Och metallocken?",
            "task": "Säg att du trodde de skulle sorteras separat.",
            "say": "Ich dachte, die werden getrennt gesammelt.",
            "reply": "Ja, die kommen in den gelben Behälter.",
            "replySv": "Ja, de ska i den gula behållaren."
          },
          {
            "hear": "Hier recyceln wir fast alles.",
            "sv": "Här återvinner vi nästan allt.",
            "task": "Säg att reglerna är annorlunda hemma hos dig.",
            "say": "In meinem Land sind die Regeln anders.",
            "reply": "Ja, das ist von Ort zu Ort verschieden.",
            "replySv": "Ja, det varierar mycket mellan olika platser."
          }
        ]
      },
      {
        "id": "elevator",
        "title": "Hissen stannar",
        "icon": "🛗",
        "intro": "Kommunicera lugnt när något oväntat händer",
        "turns": [
          {
            "hear": "Der Aufzug scheint stehen geblieben zu sein.",
            "sv": "Det verkar som att hissen har stannat.",
            "task": "Säg att du trycker på larmknappen.",
            "say": "Ich drücke den Alarmknopf.",
            "reply": "Gut, ich rufe an.",
            "replySv": "Bra, jag ringer."
          },
          {
            "hear": "Sie sagen, sie sind in zehn Minuten da.",
            "sv": "De säger att de kommer om tio minuter.",
            "task": "Fråga om dörrarna ska lämnas i fred.",
            "say": "Sollen wir die Türen in Ruhe lassen?",
            "reply": "Ja, besser nicht anfassen.",
            "replySv": "Ja, bäst att inte röra dem."
          },
          {
            "hear": "Die Techniker sind unterwegs.",
            "sv": "Teknikerna är på väg nu.",
            "task": "Säg att det är skönt att höra.",
            "say": "Das ist gut zu hören.",
            "reply": "Bald sind wir draußen.",
            "replySv": "Snart kommer vi ut."
          }
        ]
      },
      {
        "id": "dog",
        "title": "Hundmöte",
        "icon": "🐕",
        "intro": "Småprata spontant med en hundägare",
        "turns": [
          {
            "hear": "Keine Sorge, er ist sehr ruhig.",
            "sv": "Oroa dig inte, den är väldigt lugn.",
            "task": "Fråga om du får klappa hunden.",
            "say": "Darf ich ihn streicheln?",
            "reply": "Ja, natürlich. Das liebt er.",
            "replySv": "Ja, självklart. Den älskar det."
          },
          {
            "hear": "Er heißt Bruno.",
            "sv": "Han heter Bruno.",
            "task": "Fråga hur gammal han är.",
            "say": "Wie alt ist er?",
            "reply": "Er ist vier Jahre alt.",
            "replySv": "Han är fyra år."
          },
          {
            "hear": "Haben Sie auch einen Hund?",
            "sv": "Har du också hund?",
            "task": "Säg nej men att du tycker mycket om hundar.",
            "say": "Nein, aber ich mag Hunde sehr.",
            "reply": "Dann hat Bruno schon einen neuen Freund.",
            "replySv": "Då har Bruno redan fått en ny vän."
          }
        ]
      }
    ],
    "phrases": [
      [
        "Ich dachte, dieser Zug fährt nach Madrid.",
        "att du trodde att tåget gick till Madrid."
      ],
      [
        "Ja. Ist meine Fahrkarte noch gültig?",
        "ja och fråga om biljetten fortfarande gäller."
      ],
      [
        "Ja, danke. Können Sie es mir auf der Karte zeigen?",
        "be personen visa det på kartan."
      ],
      [
        "Meiner sieht fast genauso aus.",
        "att din väska ser nästan likadan ut."
      ],
      [
        "Mein Name steht auf dem Anhänger.",
        "att ditt namn står på etiketten."
      ],
      [
        "Kein Problem. Gute Reise!",
        "att det inte gör något och önska en trevlig resa."
      ],
      [
        "Kommt sie aus dieser Gegend?",
        "om den är från trakten."
      ],
      [
        "Sie gefällt mir, aber sie ist etwas groß.",
        "att du gillar den men att den är lite stor."
      ],
      [
        "Ich nehme sie für zwanzig Euro.",
        "att du tar den om priset är tjugo euro."
      ],
      [
        "Hallo, ich bin Mikael. Ich bin gerade eingezogen.",
        "Presentera dig och säg att du just flyttat in."
      ],
      [
        "Gestern Abend hat man sie ein bisschen gehört.",
        "att den hördes lite i går kväll."
      ],
      [
        "Ja, wo ist die Mülltrennung?",
        "var återvinningen finns."
      ],
      [
        "Die Adresse stimmt, aber mein Name ist falsch geschrieben.",
        "att adressen är rätt men namnet är felstavat."
      ],
      [
        "Ich erwarte ein Paket aus Finnland.",
        "Förklara att du väntar på ett paket från Finland."
      ],
      [
        "Danke. Wo muss ich unterschreiben?",
        "fråga var du ska skriva under."
      ],
      [
        "Ich habe in zehn Minuten einen Videoanruf.",
        "att du har ett videosamtal om tio minuter."
      ],
      [
        "Funktioniert das WLAN dort gut?",
        "om wifi fungerar bra där."
      ],
      [
        "Ja, kann ich einen ausleihen?",
        "ja och fråga om du får låna en."
      ],
      [
        "Die Bremse macht ein komisches Geräusch.",
        "att bromsen låter konstigt."
      ],
      [
        "Können Sie ihn auch aufpumpen?",
        "om de kan pumpa det."
      ],
      [
        "Perfekt, ich warte draußen.",
        "att du väntar utanför."
      ],
      [
        "Ich finde den Ausgang nicht.",
        "att du inte hittar utgången."
      ],
      [
        "Kommt man dort auf dieselbe Straße?",
        "om den leder till samma gata."
      ],
      [
        "Danke, jetzt weiß ich, wo es langgeht.",
        "säg att du hittar nu."
      ],
      [
        "Ja, mein Handy ist fast leer.",
        "att mobilen nästan är urladdad."
      ],
      [
        "Ich habe meins vergessen. Kann ich eins ausleihen?",
        "att du glömde din och fråga om du får låna en."
      ],
      [
        "Ja, der passt. Vielen Dank.",
        "att den passar och tacka."
      ],
      [
        "Nein, und ich habe schon bezahlt.",
        "att du redan har betalat."
      ],
      [
        "Was bedeutet dieser Fehlercode?",
        "vad felkoden betyder."
      ],
      [
        "Kann die Zahlung auf diese Maschine übertragen werden?",
        "om betalningen kan flyttas dit."
      ],
      [
        "Heute Morgen hat er noch funktioniert.",
        "att den fungerade i morse."
      ],
      [
        "Gibt es einen Ersatzschlüssel?",
        "om det finns en reservnyckel."
      ],
      [
        "Danke, ich warte hier.",
        "att du väntar här."
      ],
      [
        "Vielleicht sollten wir unseren Plan ändern.",
        "att ni kanske borde ändra planen."
      ],
      [
        "Ich hätte lieber etwas Lokales und weniger Touristisches.",
        "att du hellre vill hitta något lokalt och mindre turistigt."
      ],
      [
        "Bei diesem Regen lieber mit dem Bus.",
        "Föreslå bussen eftersom det regnar."
      ],
      [
        "Ja, danke. Können Sie das ganze Gebäude mit aufs Bild nehmen?",
        "be att hela byggnaden kommer med."
      ],
      [
        "Ja. Können Sie noch eins im Querformat machen?",
        "Be om en bild i liggande format också."
      ],
      [
        "Es ist sehr gut geworden. Vielen Dank.",
        "att den blev bra och tacka."
      ],
      [
        "Was ist heute hier los?",
        "vad som händer."
      ],
      [
        "Braucht man eine Eintrittskarte?",
        "om man behöver biljett."
      ],
      [
        "Wann beginnt die Musik?",
        "vilken tid musiken börjar."
      ],
      [
        "Gibt es eine andere Möglichkeit, ins Zentrum zu kommen?",
        "om det finns något annat sätt att ta sig till centrum."
      ],
      [
        "In welche Richtung muss ich gehen?",
        "åt vilket håll du ska gå."
      ],
      [
        "Danke. Kann ich die Fahrkarte in der Bahn kaufen?",
        "fråga om du kan köpa biljett ombord."
      ],
      [
        "Auf meiner Fahrkarte steht auch dieser Platz.",
        "att din biljett visar samma plats."
      ],
      [
        "Kein Problem, so etwas passiert.",
        "att sådant händer."
      ],
      [
        "Sie können bleiben, bis der Schaffner kommt.",
        "att personen kan sitta kvar tills konduktören kommer."
      ],
      [
        "Ja, wie heißt dieses Gemüse?",
        "vad den här grönsaken heter."
      ],
      [
        "Nein. Wie bereitet man ihn normalerweise zu?",
        "nej och fråga hur man brukar tillaga den."
      ],
      [
        "Ja. Wie lange hält er sich?",
        "ja och fråga hur länge den håller."
      ],
      [
        "Haben Sie es in einer anderen Farbe?",
        "om de har samma plagg i en annan färg."
      ],
      [
        "Ja. Wo ist die Umkleidekabine?",
        "ja och fråga var provrummet är."
      ],
      [
        "Die Ärmel sind etwas zu lang.",
        "att ärmarna är lite för långa."
      ],
      [
        "Ich weiß nicht, in welchen Behälter Glas kommt.",
        "att du inte vet vilken behållare glas ska i."
      ],
      [
        "Ich dachte, die werden getrennt gesammelt.",
        "att du trodde de skulle sorteras separat."
      ],
      [
        "In meinem Land sind die Regeln anders.",
        "att reglerna är annorlunda hemma hos dig."
      ],
      [
        "Ich drücke den Alarmknopf.",
        "att du trycker på larmknappen."
      ],
      [
        "Sollen wir die Türen in Ruhe lassen?",
        "om dörrarna ska lämnas i fred."
      ],
      [
        "Das ist gut zu hören.",
        "att det är skönt att höra."
      ],
      [
        "Darf ich ihn streicheln?",
        "om du får klappa hunden."
      ],
      [
        "Wie alt ist er?",
        "hur gammal han är."
      ],
      [
        "Nein, aber ich mag Hunde sehr.",
        "nej men att du tycker mycket om hundar."
      ]
    ]
  }
};
