const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();

    let BookList = document.getElementById('bookList');
    //  get data from input
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    if (title == "" || author == "" || isbn == ""){
        alert('fill the form first!');
    }

    else {
        //  create table row!
        let row = document.createElement('tr');
        //  first cell
        let col1 = document.createElement('td');
        let text1 = document.createTextNode(title);
        col1.appendChild(text1);
        //  second cell
        let col2 = document.createElement('td');
        let text2 = document.createTextNode(author);
        col2.appendChild(text2);
        //  third cell
        let col3 = document.createElement('td');
        let text3 = document.createTextNode(isbn);
        col3.appendChild(text3);
        //  append columns to row
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        //  append row to BookList
        BookList.appendChild(row);
        console.log('Book added');
    }
});