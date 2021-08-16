require('./Logger').addMonkeyPatching = () => {
    console.log('From patching');
} // No se recomienda hacer esto en ambiente productivo, agrego funcionalidad pero habrian problemas si 2 módulos intentan modificar el mismo objeto de un módulo