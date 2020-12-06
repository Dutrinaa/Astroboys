    let tempo = 19000;
    setTimeout(() => {
      document.querySelector('.backdrop').classList.add('desaparecido');
      document.querySelector('main').classList.remove('desaparecido');
      document.querySelector('header').classList.remove('desaparecido');
    }, tempo);
    document.querySelector('#unmute').addEventListener('click', (e) => {
      document.querySelector('.backdrop video').muted = false;
      e.currentTarget.classList.add('desaparecido');
    });
    document.querySelector('#skip').addEventListener('click', (e) => {
      document.querySelector('.backdrop').classList.add('desaparecido');
      document.querySelector('main').classList.remove('desaparecido');
      document.querySelector('header').classList.remove('desaparecido');
      e.currentTarget.classList.add('desaparecido');
    });