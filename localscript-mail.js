const email = document.getElementById('email');

email.addEventListener('invalid', () => {
  email.setCustomValidity('');
  if (email.validity.valueMissing)
    email.setCustomValidity('Vul hier je e-mailadres in.');
  else if (email.validity.typeMismatch)
    email.setCustomValidity('Dit is geen geldig e-mailadres.');
});

email.addEventListener('input', () => email.setCustomValidity(''));

document.getElementById('signup').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target, status = document.getElementById('status');
  try {
    const r = await fetch('https://formsubmit.co/ajax/eindejaarspuzzel@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    const j = await r.json();
    if (!r.ok || j.success === 'false') throw new Error();
    form.style.display = 'none';
    status.textContent = 'We hebben je e-mailadres goed ontvangen, bedankt!';
  } catch {
    status.textContent = 'Er liep iets fout. Probeer later opnieuw of stuur ons een mailtje.';
  }
});