const validations = {
  dateReported: (v) => Boolean(v),
};

function validate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const errors = {};

  formData.forEach((v, k) => {
    if (!(k in validations)) {
      return;
    }
    const validate = validations[k];
    const input = document.getElementsByName(k)[0];

    if (validate(v)) {
      const ee = input.parentNode.querySelector('.error');
      if (ee) {
        input.parentNode.removeChild(ee);
      }
      return;
    }

    errors[k] = 'Please fill in correct values for the input';

    const errorEl = document.createElement('span');
    errorEl.className = 'error';
    errorEl.innerHTML = errors[k];

    input.parentNode.appendChild(errorEl);
  });

  if (Object.values(errors).length) {
    alert('Please correct the errors.' + JSON.stringify(errors));
  }
}
