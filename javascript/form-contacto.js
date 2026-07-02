//---------------------CONTACTOS-----------------------//
document.getElementById('form-contacto').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };
    
    try {
        const response = await fetch('http://localhost:3000/api/comentarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        
        const resultado = await response.json();
        
        if (resultado.success) {
            document.getElementById('respuesta').innerHTML = 
                '<p style="color: green;">¡Comentario guardado!</p>';
            e.target.reset();
        } else {
            document.getElementById('respuesta').innerHTML = 
                '<p style="color: red;">Error al guardar</p>';
        }
    } catch (error) {
        document.getElementById('respuesta').innerHTML = 
            '<p style="color: red;">No se pudo conectar al servidor</p>';
    }
});
//--------------------------------------------//