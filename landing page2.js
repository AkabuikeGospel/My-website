function validate (){
    const myforms = document.forms["myForm"]['fname'].value;
    if (myforms === '') {
        alert('You must Complete the forms');
        return false;
    }
}