const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {

    boton.addEventListener('mouseenter', () => {

        boton.style.boxShadow = '0 0 20px gold';

    });

    boton.addEventListener('mouseleave', () => {

        boton.style.boxShadow = 'none';

    });

});

console.log("Barbería Elite cargada correctamente");