document.getElementById("selector").addEventListener("change", mostrar);

function mostrar () {

  console.log(document.getElementById("selector").value)

    if (document.getElementById("selector").value == 'Mostrar todo'){

      document.getElementsByClassName("row-Formacion")[0].style.display='block';
      document.getElementsByClassName("row-Formacion")[1].style.display='block';
      document.getElementsByClassName("row-Formacion")[2].style.display='block';
      document.getElementsByClassName("row-Formacion")[3].style.display='block';
      document.getElementsByClassName("row-Formacion")[4].style.display='block';
      document.getElementsByClassName("row-Formacion")[5].style.display='block';
      document.getElementsByClassName("row-Formacion")[6].style.display='block';
      document.getElementsByClassName("row-Formacion")[7].style.display='block';
      document.getElementsByClassName("row-Formacion")[8].style.display='block';



      document.getElementsByClassName("row-Trabajo")[0].style.display='block';
      document.getElementsByClassName("row-Trabajo")[1].style.display='block';
      document.getElementsByClassName("row-Trabajo")[2].style.display='block';
      document.getElementsByClassName("row-Trabajo")[3].style.display='block';
      document.getElementsByClassName("row-Trabajo")[4].style.display='block';
      document.getElementsByClassName("row-Trabajo")[5].style.display='block';
      document.getElementsByClassName("row-Trabajo")[6].style.display='block';
      document.getElementsByClassName("row-Trabajo")[7].style.display='block';
      document.getElementsByClassName("row-Trabajo")[8].style.display='block';

      

    } else if (document.getElementById("selector").value == 'Experiencia Laboral'){

        document.getElementsByClassName("row-Formacion")[0].style.display = 'none'; 
        document.getElementsByClassName("row-Formacion")[1].style.display = 'none';
        document.getElementsByClassName("row-Formacion")[2].style.display = 'none';
        document.getElementsByClassName("row-Formacion")[3].style.display = 'none';
        document.getElementsByClassName("row-Formacion")[4].style.display = 'none';
        document.getElementsByClassName("row-Formacion")[5].style.display = 'none';
        document.getElementsByClassName("row-Formacion")[6].style.display = 'none';
        document.getElementsByClassName("row-Formacion")[8].style.display = 'none';

        document.getElementsByClassName("row-Trabajo")[0].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[1].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[2].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[3].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[4].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[5].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[6].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[7].style.display = 'block';
        document.getElementsByClassName("row-Trabajo")[8].style.display = 'block';

    } else {

      document.getElementsByClassName("row-Formacion")[0].style.display = 'block'; 
      document.getElementsByClassName("row-Formacion")[1].style.display = 'block';
      document.getElementsByClassName("row-Formacion")[2].style.display = 'block';
      document.getElementsByClassName("row-Formacion")[3].style.display = 'block';
      document.getElementsByClassName("row-Formacion")[4].style.display = 'block';
      document.getElementsByClassName("row-Formacion")[5].style.display = 'block';
      document.getElementsByClassName("row-Formacion")[6].style.display = 'block';
      document.getElementsByClassName("row-Formacion")[8].style.display = 'block';

        document.getElementsByClassName("row-Trabajo")[0].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[1].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[2].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[3].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[4].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[5].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[6].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[7].style.display = 'none';
        document.getElementsByClassName("row-Trabajo")[8].style.display = 'none';

    }

 };
