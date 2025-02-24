const obj = {
    name : "sophia",
    showMessage : function () {
        function nested(){
            console.log(this.name)
        }
        nested();
        console.log(this.name)
    }
}

obj.showMessage();