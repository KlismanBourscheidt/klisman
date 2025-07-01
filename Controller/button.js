  const container = document.querySelector('#mensagem div');
  const btn = document.getElementById('btnMensagem');

  btn.addEventListener('click', () => {

    let audioBox = document.getElementById('cr7pracima');

    if (!audioBox) {
      audioBox = document.createElement('audio');
      audioBox.id = 'cr7pracima';
      audioBox.controls = true;
      audioBox.volume = 0.5;

      const src = document.createElement('source');
      src.src = 'audio/cr7pracima.mp3'; 
      src.type = 'audio/mpeg';
      audioBox.appendChild(src);

      container.appendChild(audioBox);
      audioBox.play().catch(err => {
        console.log('Erro ao tentar tocar o áudio:', err);
      });

      const hour = new Date().getHours(); 
      let saudacao = 'Boa noite';
      if (hour >= 6 && hour < 12) {
        saudacao = 'Bom dia';
      } else if (hour >= 12 && hour < 18) {
        saudacao = 'Boa tarde';
      }
      const msg = document.createElement('p');
      msg.innerHTML = `
        Não se esqueça!!<br>
        Você pode interagir com os outros elementos,<br>
        ${saudacao}`;
      msg.style.marginTop = '10px';
      container.appendChild(msg);

    } else {
      console.log('O áudio já está carregado.');
    }
  });