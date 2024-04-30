window.onload = function(){
    let book_items = document.querySelectorAll('.book_item');
    book_items.forEach(function(book_item) {
        book_item.addEventListener('mouseover', function(event){
            event.target.style.height = "350px";
            event.target.style.fontWeight = "bold";
            if (event.relatedTarget && event.relatedTarget.classList.contains('book_item')) {
                event.relatedTarget.style.filter = 'brightness(0.7)';
                setTimeout(() => event.relatedTarget.style.filter = 'brightness(1)', 2000);
            } 
        });
        book_item.addEventListener('mouseout', function(event){       
            event.target.style.height = "300px";
            event.target.style.fontWeight = "normal";
        });
    });
    
    let books = document.getElementById('book-for-shelf')
    books.onmousedown = function(event) {
        let shiftX = event.clientX - books.getBoundingClientRect().left;
        let shiftY = event.clientY - books.getBoundingClientRect().top;  
        books.style.position = 'absolute';
        books.style.zIndex = 1000;
        document.body.append(books);
      
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
          books.style.left = pageX - shiftX + 'px';
          books.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        document.addEventListener('mousemove', onMouseMove);
      
        books.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          books.onmouseup = null;
        };
      
      };
      
      books.ondragstart = function() {
        return false;
      };      
} 

