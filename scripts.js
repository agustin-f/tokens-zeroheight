fetch('./tokens/token_Collection1_Light.json')
  .then(res => res.json())
  .then(tokens => {
    const root = document.documentElement;

    Object.entries(tokens).forEach(([key, valueObj]) => {
      let value = valueObj.$value;
      if (valueObj.$type === 'number') {
        value += 'px'; // Agrega unidad
      }
      root.style.setProperty(`--${key}`, value);
    });
  })
  .catch(err => console.error('Error cargando tokens:', err));

  console.log("Usando tokens: @tusistema/button-core v1.0");

 
