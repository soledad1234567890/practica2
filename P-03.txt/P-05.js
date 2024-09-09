const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];

function filtrarEmailsValidos(emails) {
  return emails.filter(email => email.includes('@') && email.endsWith('.com'));
}

const emailsValidos = filtrarEmailsValidos(emails);
console.log(emailsValidos);