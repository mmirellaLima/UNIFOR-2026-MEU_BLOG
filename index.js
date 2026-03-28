document.addEventListener('DOMContentLoaded', () => {
    const headerTitle = document.querySelector ('header h1');
    const hora = new Date ().getHours();
    let saudacao = "";

    if(hora < 12) saudacao = 'bom dia';
    else if (hora < 18) saudacao = 'boa tarde';
    else saudacao = 'boa noite';

    headerTitle.textContent = `${saudacao},Bem-Vindo ao meu Blog!`;

    const btnTheme = document.getElementById('toggle-dark-mode');

    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    const articles =  document.querySelectorAll('article');

    articles.forEach(article => {
        const btnLike = document.createElement('button');
        btnLike.innerHTML = `<3 curtir (<span>0</span>)`;
        btnLike.style.marginTop = '10px';
        article.appendChild(btnLike);

        let count = 0;
        btnLike.addEventListener('click',() => {
            count++;
            btnLike.querySelector('span').textContent = count; 
        });
    })
});