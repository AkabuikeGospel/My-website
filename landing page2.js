function validate (){
    const myforms = document.forms["myForm"]['fname'].value;
    if (myforms === '') {
        alert('You must enter a name');
        return false;
    }
}