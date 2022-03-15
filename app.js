let sortDirection = false;
ejemploJSON = [{"last_name": "Zaws",
                "first_name":"Nari",
                "email":"zdaw@deli.com",
                "photo":"http://aummyimage.com/155x119.jpg/ff4444/ffffff"},

                {"last_name": "Aithams",
                "first_name":"Winona",
                "email":"adaw@deli.com",
                "photo":"http://bummyimage.com/155x119.jpg/ff4444/ffffff"},

                {"last_name": "rtreatfield",
                "first_name":"Northup",
                "email":"cdaw@deli.com",
                "photo":"http://cummyimage.com/155x119.jpg/ff4444/ffffff"}
                ]

function cargarDatos(datos){
    tbody = document.getElementById('table-body');
    tbody.remove();
    tableA = document.getElementById('tableA');
    tbody = document.createElement('tbody');
    tbody.id = "table-body";
    //tbody = document.getElementById('table-body')
    datos.forEach(person => {
        console.log(person)
        let row = document.createElement('tr');
    
        /* Last Name */
        let last_name = document.createElement('td');
        last_name.innerHTML = person.last_name;
        row.appendChild(last_name);
    
        /* First Name */
        let first_name = document.createElement('td');
        first_name.innerHTML = person.first_name;
        row.appendChild(first_name);
    
        /* Email */
        let email = document.createElement('td');
        email.innerHTML = person.email;
        row.appendChild(email);
    
        /* Photo */
        let photo = document.createElement('td');
        photo.innerHTML = person.photo;
        row.appendChild(photo);
    
        tbody.appendChild(row);
    })
    tableA.appendChild(tbody);
}


function sortColumn(columnName){
    sortDirection = !sortDirection;

    ejemploJSON.sort((a, b) =>
        a[columnName].toLowerCase().localeCompare(b[columnName].toLowerCase())
    );
    cargarDatos(ejemploJSON);
}