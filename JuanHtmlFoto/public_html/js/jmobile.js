/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    alert('Bienvenido a nuestro sitio de prueba!!!!');
    $('#mostrar').click(function(){
        $.mobile.navigate("#crearUsuario");        
    });
});