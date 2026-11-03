document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();

  // mensaje de bienvenida al cargar cualquier pagina del proyecto
  M.toast({ html: 'Bienvenido a nuestro Proyecto Integrador', classes: 'red darken-3' });

  // validacion basica del formulario de contacto
  var formulario = document.getElementById('form-contacto');

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = document.getElementById('nombre');
      var correo = document.getElementById('correo');
      var mensaje = document.getElementById('mensaje');
      var correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      [nombre, correo, mensaje].forEach(function (campo) {
        campo.classList.remove('invalid');
      });

      if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
        [nombre, correo, mensaje].forEach(function (campo) {
          if (!campo.value.trim()) {
            campo.classList.add('invalid');
          }
        });
        M.toast({ html: 'Por favor completa todos los campos', classes: 'red darken-3' });
        return;
      }

      if (!correoValido.test(correo.value.trim())) {
        correo.classList.add('invalid');
        M.toast({ html: 'Escribe un correo valido', classes: 'red darken-3' });
        return;
      }

      formulario.reset();
      M.updateTextFields();
      M.toast({ html: 'Mensaje enviado correctamente', classes: 'green darken-2' });
    });
  }
});
