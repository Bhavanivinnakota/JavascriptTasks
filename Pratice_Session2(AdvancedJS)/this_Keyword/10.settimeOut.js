const obj = {
    message : "Hello",
    showMessage() {
        setTimeout(function(){
            console.log(this.message);

        },2000);
    }
};