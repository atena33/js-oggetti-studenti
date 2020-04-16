// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
// cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//  oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
// cognome e età.

var studente = {
  'Nome': 'Cristina',
  'Cognome': 'Rossi',
  'Eta': 25
}
console.log(studente);

// -Stampare a schermo attraverso il for in tutte le proprietà;
 for (var key in studente){
   console.log(studente[key]);
 }

// - Creare un array di oggetti di studenti.

var studenti = [
  {
    'Nome': 'Cristina',
    'Cognome': 'Rossi',
    'Eta': 25
  },
  {
    'Nome': 'Marco',
    'Cognome': 'Neri',
    'Eta': 23
  },
  {
    'Nome': 'Sara',
    'Cognome': 'Verdi',
    'Eta': 22
  }
]

// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (var i = 0; i < studenti.length; i++) {
  var stampa = studenti[i];
  var nome = stampa.Nome;
  var cognome = stampa.Cognome;
  console.log(nome + " " + cognome);
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//  oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoNome = $(prompt('inserisci nome')).val();
var nuovoCognome = $ (prompt('inserisci cognome')).val();
var nuovaEta= $(prompt('inserisci età')).val();

studenti.push(
  {
    'Nome': nuovoNome,
    'Cognome': nuovoCognome,
    'Eta': nuovaEta
  }
)

console.log(studenti);
