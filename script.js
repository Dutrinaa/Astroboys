    let tempo = 19000;
    setTimeout(() => {
      document.querySelector('.backdrop').classList.add('desaparecido');
      document.querySelector('main').classList.remove('desaparecido');
      document.querySelector('header').classList.remove('desaparecido');
      document.querySelector('#skip').classList.add('desaparecido');  
    }, tempo);
    document.querySelector('#unmute').addEventListener('click', (e) => {
      document.querySelector('.backdrop video').muted = false;
      e.currentTarget.classList.add('desaparecido');
    });
    document.querySelector('#skip').addEventListener('click', (e) => {
      document.querySelector('.backdrop').classList.add('desaparecido');
      document.querySelector('main').classList.remove('desaparecido');
      document.querySelector('header').classList.remove('desaparecido');
      document.querySelector('.backdrop video').muted = true;
      e.currentTarget.classList.add('desaparecido');
    });
