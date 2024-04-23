function dialogueWithUser(){
    let wantTalk = confirm('Привіт! Хочеш трохи поспілкуватися?')
    while(wantTalk)
    {
        let name = prompt('Мене звуть Маша і я розробник цього сайту. А як звуть тебе?')
        if (name === null || name == ''){
            alert('Сумно, що ти не хочеш себе називати... Тоді буду називати тебе анонім')
            name = 'анонім'
        }
        else{
            alert(`Рада познайомитися ${name}!`)
        }
        let likeReading = confirm(`Чи любиш ти читати, ${name}? Натисни "Ок" якщо так, і "Скасувати" якщо ні.`)
        if(likeReading)
        {
            let favoriteBook = prompt('Можливо поділишся зі мною своєю найулюбленішою книгою?)')
            if(favoriteBook != null)
            {
                alert(`Дякую, ${name}. Буде цікаво прочитати ${favoriteBook}, якщо вона реально існує)`)
            }
        }
        else{
            alert('Сподіваюсь мій сайт допоможе тобі полюбити читання!')
        }
        wantTalk = confirm('Хочеш поговорити ще раз?');
    }
}

dialogueWithUser()

function getOwnerInformation(lastName, firstName, position = 'student' ){
    alert('Owner of this page: ' + lastName + ' ' + firstName + '\nPosition: ' + position )
}

getOwnerInformation('Dziuba', 'Maria')

function compareStrings(str1, str2)
{
    if(str1 > str2)
    {
        alert(`Рядок "${str1}" більший за "${str2}"`)
    }
    else if (str2 > str1){
        alert(`Рядок "${str2}" більший за "${str1}"`)
    }
    else{
        alert(`Рядки "${str1}" та "${str2}" рівні`)
    }
}

compareStrings('Привіт', 'Привітик')


window.onload = function(){
    if(confirm('Хочете змін?')){
    let headlines = document.querySelectorAll('.hedlines');
    for(let h of headlines){
        h.textContent = 'Це заголовок'
    }
    document.getElementById('header').innerHTML = 'Назва сайту та навігація';
    document.querySelector('.book_aestetic_img').firstElementChild.outerHTML = '<span>тут була картинка</span>';
    document.querySelector('.book_aestetic').firstChild.nodeValue = 'Якийсь текст';
    
    
    let poetryDiv = document.createElement('div');
    poetryDiv.innerHTML = 'Моє серце квітне у болях шукань.';
    document.querySelector('.book_aestetic').append(poetryDiv);
    let poetryDiv2 = document.createElement('p')
    poetryDiv2.innerHTML = 'Я не сам, я не сам на світі — <br> Моя буря у фарбах світань.';
    document.querySelector('.dark_theme').prepend(poetryDiv2);
    document.getElementById('header').after('Моє серце прагне неіснуючих квітів.');

    let newImg = document.createElement('img');
    newImg.src = 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg'
    document.querySelector('.book_aestetic_img').children[1].replaceWith(newImg);
    document.querySelector('.book_aestetic_img').children[2].remove()
}
}


