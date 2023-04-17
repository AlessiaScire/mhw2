const RESULTS_MAP = {
    'blep': {
    title: 'Cristiano Ronaldo',
    contents: "Il fenomeno Cristiano Ronaldo, nato nel 1985 e conosciuto universalmente anche come CR7, è l'attaccante più vicino alle tue caratteristiche. Ritenuto uno dei migliori calciatori di tutti i tempi, è tra i marcatori più prolifici in nazionale e nelle squadre di club. Ha vinto ben 5 palloni d'oro ed ha trascinato la nazionale portoghese al titolo europeo del 2016, militando prima nel Manchester United e poi in altri club europei fra cui la Juventus. Le sue qualità tecniche sono innumerevoli, è capace di giocare su entrambe le fasce o anche al centro, eccelle nel dribbling, nei doppi passi, cambi di direzione, velocità, elevazione e precisione chirurgica nel tiro e nei colpi di testa. Di lui apprezzi la perseveranza e la costanza nel cercare di migliorarsi a livello tecnico e fisico, oltre alle abilità imprenditoriali che lo hanno reso il giocatore più popolare di tutti i tempi, nel marketing e nei social media, che vedi come esempio per il tuo stile di vita.",
    },
    'burger': {
    title: 'Zlatan Ibrahimovic',
    contents: "Il giocatore più affine è lo svedese Zlatan Ibrahimovic (1981). Conosciuto anche come 'Ibra', è considerato uno degli attaccanti più forti e completi al mondo e soprattutto uno dei marcatori più prolifici della storia del calcio. Paragonato spesso a Marco Van Basten, è un bomber abile con entrambi i piedi, agile e dotato di un'eccellente tecnica individuale, fantasioso e capace di inventare goal talvolta incredibili, grazie ai suoi tocchi geniali. In lui apprezzi soprattutto la forte competitività, la notevole autostima e la consapevolezza nelle proprie capacità, in cui ritrovi diversi aspetti della tua personalità forte e determinata.",
    },
    'cart': {
    title: 'Paolo Rossi',
    contents: "Paolo Rossi (Prato,1956) conosciuto anche con il soprannome di Pablito, è il bomber più vicino alle tue caratteristiche. E' molto conosciuto ed apprezzato anche a livello internazionale, soprattutto grazie alle sue prodezze al Mondiale spagnolo del 1982, in cui trascinò l'Italia al trionfo come capocannoniere. E' stato anche uno dei pochi italiani ad aggiudicarsi, sempre nel 1982, il prestigioso pallone d'oro. Di lui hai apprezzato le doti tecniche di tempismo, opportunismo e velocità, mostrate soprattutto negli spazi stretti dell'area di rigore in cui segnava con lucida freddezza, oltre alla sua proverbiale modestia, in cui rivedi alcuni aspetti del tuo carattere.",
    },
    'dopey': {
    title: 'PELE',
    contents: "Hai affinità con il grande bomber brasiliano Pelè (1940), conosciuto anche come O Rei (in italiano Il Re). È stato l'unico calciatore al mondo ad aver vinto tre edizioni del campionato mondiale di calcio, ed il suo goal alla Svezia nella finale del 1958 è considerato uno dei più prestigiosi goal nella storia della Coppa del Mondo FIFA. Di lui hai apprezzato la capacità unica di coniugare una tecnica affine con le notevoli abilità atletiche, oltre al naturale e spiccato senso del goal. Meno costante la sua vita privata soprattutto in campo sentimentale, con alcune storie talvolta burrascose, che in parte riflettono il tuo stile di vita.",
    },
    'happy': {
    title: 'Lionel Messi',
    contents: "Sei affine a Leo Messi (1987), il bomber della nazionale argentina e simbolo del Barcellona. Spesso paragonato al celebre Diego Armando Maradona, è ritenuto uno dei più forti calciatori di tutti i tempi e uno dei marcatori più prolifici della storia del calcio, tanto da aggiudicarsi ben 6 volte il titolo di pallone d'oro. Nonostante la sua altezza modesta, Messi è un giocatore tecnico, veloce e molto agile, con ottime qualità nel controllo della palla e nell'accelerazione, freddo e chirurgico come pochi davanti alla porta. In lui apprezzi la fedeltà ai colori della propria maglia, oltre ad uno stile di vita morigerato e poco appariscente in cui rifletti alcuni lati del tuo carattere.",
    },
    'nerd': {
    title: 'Neymar',
    contents: "Neymar è l'attaccante più affine alle tue caratteristiche. Nato in Brasile nel 1992 Neymar è considerato uno dei migliori bomber al mondo, tanto da essere soprannominato 'O Ney' dai tifosi, per assonanza con 'O Rei' che era il soprannome di Pelé. Con il Barcellona, oltre a diversi campionati, ha vinto anche una Champions League ed un mondiale per Club. Di lui ammiri il talento precoce, la velocità e la grande abilità nel dribbling, e la versatilità tanto da poter giocare sia da seconda punta che da ala. Talvolta si mostra litigioso e competitivo nello sport come nella vita privata, voglioso di primeggiare ad ogni costo, aspetti che contraddistinguono anche il tuo carattere"
    },
    'shy': {
    title: 'Johan Cruijff',
    contents: "Hai affinità con il grande giocatore olandese Johan Cruijff (1947), conosciuto anche come il 'Profeta del goal', è considerato come uno dei migliori giocatori nella storia del calcio, emblema del famoso calcio 'totale' con cui l'Ajax e i Paesi Bassi dominarono la storia calcistica a ridosso degli anni '70. Vincitore di 3 palloni d'oro e di altrettante Champions League, combinava freddezza ed istinto del goal, con soluzioni tecniche e realizzative spesso imprevedibili agli avversari. In lui hai apprezzato le capacità di leadership e la sua intelligenza, con cui ha gestito ottimamente la sua carriera a la sua vita privata, diventando un campione ed un emblema per molte generazioni.",
    },
    'sleeping': {
    title: 'Van Basten',
    contents: "Hai affinità con il grande attaccante olandese marco Van Basten (1964), considerato fra i giocatori più forti della storia del calcio, emblema dell'Ajax e del Milan, in cui ha composto un eccezionale trio assieme ai connazionali Gullit e Rijkaard. Vincitore di 3 palloni d'oro e altrettante Champions League, è stato un centravanti completo dotato di tecnica eccezionale, rapido nei movimenti, in possesso di un tiro potente e preciso sia in corsa che da fermo, oltre che nel gioco aereo. In lui hai apprezzato la tenacia e la forza con cui ha affrontato i suoi numerosi infortuni, che non gli hanno impedito di vivere una carriera fantastica, in cui trovi affinità con alcuni aspetti del tuo carattere caparbio.",
    },
    'sleepy': {
    title: 'Gigi Riva',
    contents: "Il bomber più affine è Gigi Riva (Luigi Riva), nato nel 1944 a Leggiuno (VA) e conosciuto anche con il soprannome di 'Rombo di Tuono'. Uno degli attaccanti italiani più forti di sempre, come riconosciuto anche a livello internazionale, protagonista dell'unico scudetto vinto dal Cagliari nel 1970 e simbolo della Nazionale italiana che nel 1968 vinse il titolo nei campionati Europei disputati in Italia. Di lui hai apprezzato la forza e determinazione espressa sui campi da gioco, oltre al modo pacato e riservato di gestire la vita privata, molto simile al tuo.",
    }
    };