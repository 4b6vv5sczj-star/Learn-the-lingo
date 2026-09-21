window.HABLA_EXTRA_PACKS = {
  it: {
    code: 'it-IT', name: 'italienska',
    scenarios: [
      {id:'cafe',title:'På café',icon:'☕',intro:'Beställ något att dricka',turns:[
        {hear:'Buongiorno. Cosa desidera?',variants:['Salve. Che cosa prende?','Buongiorno. Cosa le porto?'],sv:'God morgon. Vad önskar du?',task:'Beställ en kaffe, tack.',say:'Un caffè, per favore.',reply:'Certo. Desidera altro?',replySv:'Självklart. Något mer?'},
        {hear:'Desidera altro?',variants:["Vuole qualcos'altro?",'Posso portarle altro?'],sv:'Vill du ha något mer?',task:'Säg att du också vill ha vatten.',say:"E anche un'acqua, per favore.",reply:'Va bene. Sono tre euro.',replySv:'Okej. Det blir tre euro.'},
        {hear:'Sono tre euro. Paga con la carta?',variants:['Sono tre euro. Vuole pagare con carta?','Sono tre euro. Con carta o contanti?'],sv:'Det blir tre euro. Betalar du med kort?',task:'Säg att du betalar med kort.',say:'Sì, con la carta, grazie.',reply:'Perfetto. Grazie.',replySv:'Perfekt. Tack.'}]},
      {id:'restaurant',title:'På restaurang',icon:'🍽',intro:'Be om bord och betala',turns:[
        {hear:'Buonasera. Avete prenotato?',variants:['Avete una prenotazione?',"C'è una prenotazione?"],sv:'God kväll. Har ni bokat?',task:'Säg att ni inte har bokat och vill ha ett bord för två.',say:'No, un tavolo per due, per favore.',reply:'Certo, da questa parte.',replySv:'Javisst, följ med här.'},
        {hear:'Cosa prendete da bere?',variants:['Che cosa desiderate bere?','Vi porto qualcosa da bere?'],sv:'Vad vill ni ha att dricka?',task:'Beställ två glas vatten.',say:"Due bicchieri d'acqua, per favore.",reply:'Arrivo subito.',replySv:'Kommer genast.'},
        {hear:'Desiderate altro?',variants:['Posso portarvi altro?',"Volete qualcos'altro?"],sv:'Vill ni ha något mer?',task:'Be om notan.',say:'Il conto, per favore.',reply:'Subito.',replySv:'Genast.'}]},
      {id:'hotel',title:'På hotell',icon:'🛎',intro:'Checka in och be om hjälp',turns:[
        {hear:'Buongiorno. Ha una prenotazione?',variants:['Salve. Ha prenotato una camera?','Buongiorno. Ha già prenotato?'],sv:'God morgon. Har du en bokning?',task:'Säg att du har en bokning.',say:'Sì, ho una prenotazione.',reply:'A che nome?',replySv:'I vilket namn?'},
        {hear:'A che nome?',variants:['Mi dice il suo nome?',"A nome di chi è la prenotazione?"],sv:'I vilket namn?',task:'Säg att bokningen är i ditt namn.',say:'È a mio nome.',reply:'Grazie. Ecco la chiave.',replySv:'Tack. Här är nyckeln.'},
        {hear:'Ecco la chiave. Desidera altro?',variants:['Questa è la sua chiave. Ha bisogno di altro?',"Ecco la chiave. Le serve qualcos'altro?"],sv:'Här är nyckeln. Behöver du något mer?',task:'Fråga när frukosten serveras.',say:'A che ora è la colazione?',reply:'Dalle sette.',replySv:'Från klockan sju.'}]},
      {id:'directions',title:'Hitta rätt',icon:'↗',intro:'Fråga efter vägen',turns:[
        {hear:'Buongiorno. Ha bisogno di aiuto?',variants:['Salve. Posso aiutarla?','Buongiorno. Cerca qualcosa?'],sv:'Hej. Behöver du hjälp?',task:'Fråga var stationen ligger.',say:"Dov'è la stazione?",reply:'Vada dritto e poi giri a sinistra.',replySv:'Gå rakt fram och sväng sedan vänster.'},
        {hear:'Vada dritto e poi giri a sinistra.',variants:['Sempre dritto, poi a sinistra.','Prosegua dritto e svolti a sinistra.'],sv:'Gå rakt fram och sväng sedan vänster.',task:'Be personen tala långsammare.',say:'Può parlare più lentamente, per favore?',reply:'Certo. Dritto, poi a sinistra.',replySv:'Självklart. Rakt fram, sedan vänster.'},
        {hear:'Dritto, poi a sinistra.',variants:['Prima dritto, poi a sinistra.','Sempre dritto e dopo a sinistra.'],sv:'Rakt fram, sedan vänster.',task:'Tacka för hjälpen.',say:"Grazie mille per l'aiuto.",reply:'Prego.',replySv:'Varsågod.'}]},
      {id:'smalltalk',title:'Småprat',icon:'✦',intro:'Hälsa och berätta om dig själv',turns:[
        {hear:'Ciao, come ti chiami?',variants:['Salve, come ti chiami?','Ciao, qual è il tuo nome?'],sv:'Hej, vad heter du?',task:'Säg vad du heter.',say:'Mi chiamo Mikael.',reply:'Piacere. Di dove sei?',replySv:'Trevligt att träffas. Varifrån kommer du?'},
        {hear:'Di dove sei?',variants:['Da dove vieni?','Di che paese sei?'],sv:'Varifrån kommer du?',task:'Säg att du kommer från Finland.',say:'Vengo dalla Finlandia.',reply:'Che bello! Parli italiano?',replySv:'Vad trevligt! Talar du italienska?'},
        {hear:'Parli italiano?',variants:['Sai parlare italiano?',"Capisci un po' di italiano?"],sv:'Talar du italienska?',task:'Säg att du håller på att lära dig lite italienska.',say:"Sto imparando un po' di italiano.",reply:'Molto bene!',replySv:'Så bra!'}]}
    ],
    phrases: [
      ['Buongiorno.','God morgon.'],['Un caffè, per favore.','En kaffe, tack.'],['Un tavolo per due, per favore.','Ett bord för två, tack.'],["Avete un tavolo all'aperto?",'Har ni ett bord utomhus?'],['Il conto, per favore.','Notan, tack.'],["Dov'è il bagno?",'Var ligger toaletten?'],['Quanto costa?','Vad kostar det?'],["Dov'è la stazione?",'Var ligger stationen?'],['Non capisco.','Jag förstår inte.'],['Può parlare più lentamente?','Kan du tala långsammare?'],['Può ripetere?','Kan du upprepa det?'],['Ho bisogno di aiuto.','Jag behöver hjälp.'],['Ho una prenotazione.','Jag har en bokning.'],['A che ora è la colazione?','När är frukosten?'],['Vengo dalla Finlandia.','Jag kommer från Finland.'],['Sto imparando italiano.','Jag håller på att lära mig italienska.'],['Parla inglese?','Talar du engelska?'],['Grazie, a presto.','Tack, vi ses.']
    ]
  },
  de: {
    code: 'de-DE', name: 'tyska',
    scenarios: [
      {id:'cafe',title:'På café',icon:'☕',intro:'Beställ något att dricka',turns:[
        {hear:'Guten Tag. Was möchten Sie?',variants:['Hallo. Was darf es sein?','Guten Morgen. Was hätten Sie gern?'],sv:'God dag. Vad önskar du?',task:'Beställ en kaffe, tack.',say:'Einen Kaffee, bitte.',reply:'Gern. Sonst noch etwas?',replySv:'Gärna. Något mer?'},
        {hear:'Sonst noch etwas?',variants:['Möchten Sie noch etwas?','Darf es noch etwas sein?'],sv:'Något mer?',task:'Säg att du också vill ha vatten.',say:'Und ein Wasser, bitte.',reply:'Gut. Das macht drei Euro.',replySv:'Okej. Det blir tre euro.'},
        {hear:'Das macht drei Euro. Zahlen Sie mit Karte?',variants:['Das sind drei Euro. Möchten Sie mit Karte zahlen?','Drei Euro. Karte oder bar?'],sv:'Det blir tre euro. Betalar du med kort?',task:'Säg att du betalar med kort.',say:'Ja, mit Karte, bitte.',reply:'Danke schön.',replySv:'Tack så mycket.'}]},
      {id:'restaurant',title:'På restaurang',icon:'🍽',intro:'Be om bord och betala',turns:[
        {hear:'Guten Abend. Haben Sie reserviert?',variants:['Haben Sie einen Tisch reserviert?','Guten Abend. Haben Sie eine Reservierung?'],sv:'God kväll. Har ni bokat?',task:'Säg att ni inte har bokat och vill ha ett bord för två.',say:'Nein, einen Tisch für zwei, bitte.',reply:'Ja, bitte folgen Sie mir.',replySv:'Ja, följ med mig.'},
        {hear:'Was möchten Sie trinken?',variants:['Was darf ich Ihnen zu trinken bringen?','Was hätten Sie gern zu trinken?'],sv:'Vad vill ni ha att dricka?',task:'Beställ två glas vatten.',say:'Zwei Gläser Wasser, bitte.',reply:'Kommt sofort.',replySv:'Kommer genast.'},
        {hear:'Möchten Sie noch etwas?',variants:['Darf es noch etwas sein?','Kann ich Ihnen noch etwas bringen?'],sv:'Vill ni ha något mer?',task:'Be om notan.',say:'Die Rechnung, bitte.',reply:'Natürlich.',replySv:'Naturligtvis.'}]},
      {id:'hotel',title:'På hotell',icon:'🛎',intro:'Checka in och be om hjälp',turns:[
        {hear:'Guten Tag. Haben Sie eine Reservierung?',variants:['Haben Sie ein Zimmer reserviert?','Guten Morgen. Haben Sie gebucht?'],sv:'God dag. Har du en bokning?',task:'Säg att du har en bokning.',say:'Ja, ich habe eine Reservierung.',reply:'Auf welchen Namen?',replySv:'I vilket namn?'},
        {hear:'Auf welchen Namen?',variants:['Wie ist Ihr Name, bitte?','Auf welchen Namen lautet die Reservierung?'],sv:'I vilket namn?',task:'Säg att bokningen är i ditt namn.',say:'Die Reservierung läuft auf meinen Namen.',reply:'Danke. Hier ist Ihr Schlüssel.',replySv:'Tack. Här är nyckeln.'},
        {hear:'Hier ist Ihr Schlüssel. Brauchen Sie noch etwas?',variants:['Hier haben Sie den Schlüssel. Kann ich sonst noch helfen?','Das ist Ihr Schlüssel. Haben Sie noch eine Frage?'],sv:'Här är nyckeln. Behöver du något mer?',task:'Fråga när frukosten serveras.',say:'Wann gibt es Frühstück?',reply:'Ab sieben Uhr.',replySv:'Från klockan sju.'}]},
      {id:'directions',title:'Hitta rätt',icon:'↗',intro:'Fråga efter vägen',turns:[
        {hear:'Hallo. Brauchen Sie Hilfe?',variants:['Guten Tag. Kann ich Ihnen helfen?','Hallo. Suchen Sie etwas?'],sv:'Hej. Behöver du hjälp?',task:'Fråga var stationen ligger.',say:'Wo ist der Bahnhof?',reply:'Gehen Sie geradeaus und dann links.',replySv:'Gå rakt fram och sedan vänster.'},
        {hear:'Gehen Sie geradeaus und dann links.',variants:['Immer geradeaus, dann nach links.','Gehen Sie hier geradeaus und biegen Sie links ab.'],sv:'Gå rakt fram och sedan vänster.',task:'Be personen tala långsammare.',say:'Können Sie bitte langsamer sprechen?',reply:'Natürlich. Geradeaus, dann links.',replySv:'Naturligtvis. Rakt fram, sedan vänster.'},
        {hear:'Geradeaus, dann links.',variants:['Erst geradeaus und dann nach links.','Immer geradeaus, danach links.'],sv:'Rakt fram, sedan vänster.',task:'Tacka för hjälpen.',say:'Vielen Dank für Ihre Hilfe.',reply:'Gern geschehen.',replySv:'Ingen orsak.'}]},
      {id:'smalltalk',title:'Småprat',icon:'✦',intro:'Hälsa och berätta om dig själv',turns:[
        {hear:'Hallo, wie heißen Sie?',variants:['Guten Tag. Wie ist Ihr Name?','Hallo. Darf ich nach Ihrem Namen fragen?'],sv:'Hej, vad heter du?',task:'Säg vad du heter.',say:'Ich heiße Mikael.',reply:'Freut mich. Woher kommen Sie?',replySv:'Trevligt. Varifrån kommer du?'},
        {hear:'Woher kommen Sie?',variants:['Aus welchem Land kommen Sie?','Wo kommen Sie her?'],sv:'Varifrån kommer du?',task:'Säg att du kommer från Finland.',say:'Ich komme aus Finnland.',reply:'Schön. Sprechen Sie Deutsch?',replySv:'Trevligt. Talar du tyska?'},
        {hear:'Sprechen Sie Deutsch?',variants:['Können Sie Deutsch sprechen?','Verstehen Sie ein bisschen Deutsch?'],sv:'Talar du tyska?',task:'Säg att du håller på att lära dig lite tyska.',say:'Ich lerne ein bisschen Deutsch.',reply:'Sehr gut!',replySv:'Så bra!'}]}
    ],
    phrases: [
      ['Guten Tag.','God dag.'],['Einen Kaffee, bitte.','En kaffe, tack.'],['Einen Tisch für zwei, bitte.','Ett bord för två, tack.'],['Haben Sie einen Tisch draußen?','Har ni ett bord utomhus?'],['Die Rechnung, bitte.','Notan, tack.'],['Wo ist die Toilette?','Var ligger toaletten?'],['Wie viel kostet das?','Vad kostar det?'],['Wo ist der Bahnhof?','Var ligger stationen?'],['Ich verstehe nicht.','Jag förstår inte.'],['Können Sie bitte langsamer sprechen?','Kan du tala långsammare?'],['Können Sie das wiederholen?','Kan du upprepa det?'],['Ich brauche Hilfe.','Jag behöver hjälp.'],['Ich habe eine Reservierung.','Jag har en bokning.'],['Wann gibt es Frühstück?','När är frukosten?'],['Ich komme aus Finnland.','Jag kommer från Finland.'],['Ich lerne Deutsch.','Jag håller på att lära mig tyska.'],['Sprechen Sie Englisch?','Talar du engelska?'],['Danke, bis später.','Tack, vi ses.']
    ]
  }
};
