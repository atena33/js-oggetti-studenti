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
   var stampa = studente[key];
   var contenutoPrecedente = $('#stampa').html();
   $('#stampa').text(' ' + contenutoPrecedente + ' ' +stampa);
 }


// - Creare un array di oggetti di studenti.

var studenti = [
  {
    'Nome': 'Arianna',
    'Cognome': 'Sanna',
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
  var data = studenti[i];
  var nome = data.Nome;
  var cognome = data.Cognome;
  console.log(nome + " " + cognome);
  var contenutoPrecedente = $('.studenti').html();
  $('.studenti').text(contenutoPrecedente + ' ' + nome + ' ' + cognome);
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
//  oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoNome = prompt('inserisci nome');
var nuovoCognome = prompt('inserisci cognome');
var nuovaEta= prompt('inserisci età');

studenti.push(
  {
    'Nome': nuovoNome,
    'Cognome': nuovoCognome,
    'Eta': nuovaEta
  }
);

console.log(studenti);

for (var i = 0; i < studenti.length; i++) {
  var data = studenti[i];
  var nome = data.Nome;
  var cognome = data.Cognome;
  var eta = data.Eta
  // $('#stampa').append('<p class="nuovo">' nome + cognome + eta + '</p>')
}

$('.studenti').append(' Si è aggiunta/o: '+ nome + ' ' + cognome + ' ' + ' di anni ' + eta)
