Ext.define('Pertemuan.view.form.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registrasi',

    onRegistrasi: function(){
        var form = this.getView();
        var me = this;
        var name = form.getFields('name').getValue();
        var password = form.getFields('password').getValue();
        var email = form.getFields('email').getValue();
        var cool = form.getFields('cool').getValue();
        var date = form.getFields('date').getValue();
        var bio = form.getFields('bio').getValue();
        localStorage.setItem('registrasi', false);
        form.show();
}
})