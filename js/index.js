//get the form by its id
const form = document.getElementById('contact-form');

//1.
const formEvent = form.addEventListener('submit', (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
});

const sendMail = (mail) => {
  //1.
  fetch('https://github.com/two-wheels01/two-wheels01.github.io/send', {
    method: 'post', //2.
    body: mail, //3.
  }).then((response) => {
    return response.json();
  });
};
