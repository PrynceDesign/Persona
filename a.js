
const giorni = {
    lun : {pos: 1, desc:'lunedi'},
    mar: {pos: 2, desc:'martedi'},
    mer:{pos: 3, desc:'marcoledi'},
    gio: {pos: 4, desc:'giovedi'},
    ven: {pos: 5, desc:'venerdi'},
    sab:{pos: 6, desc:'sabato'},
    dom:{pos: 7, desc:'domenica'},
}



const giorniDescIT = {
    lun : 'lunedi',
    mar: 'martedi',
    mer: 'marcoledi',
    gio: 'giovedi',
    ven: 'venerdi',
    sab:'sabato',
    dom:'domenica',
}

const giorniDescENG = {
    lun : 'monday',
    mar: 'thuesday',
    mer: 'wedsday',
    gio: 'thusday',
    ven: 'friday',
    sab: 'saturday',
    dom: 'sunday',
};

const persona = {
    nome: 'rossi',
    cognome: 'rossi',
    indirizzo : {
        city:'22',
        pv:'mi',
        cap:'00123',
    },
    email : '',
    tel: ['3333','4444','555'],
    studi:[
        {scuola:'archimede', anno:2001, voto:50, titolo: 'diploma'},
        {scuola:'sapienza', anno:2006, voto:50, titolo: 'laurea'},
    ]
}

persona.tel[2]

// qui imposto quale vocabolario di lingua prendere 
const lingua = 'en';
const vocabolario = lingua === 'it' ? giorniDescIT : giorniDescENG;

// da qui in poi con traduttore, mi "traduce" sempre nella lingua corrente,
// non devo fare nessuna modifica al codice se cambio lingua

console.log('giorno', vocabolario.gio);
// console.log('giorno', giorni.dom.desc, giorni.dom.pos - giorni.gio.pos);

console.log(persona.tel[1]);
console.log(persona.indirizzo.cap);
console.log(persona.studi[1].scuola);

