function contactar(articulo) {
    let mensaje = '';
    if (articulo === 'colibris') {
        mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con colibríes.";
    } else if (articulo === 'animales') {
        mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con animales.";
    } else if (articulo === 'mandalas') {
        mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con mandalas.";
    } else if (mensaje === 'naturaleza') {
        mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con naturaleza.";
    }

    let numeroWhatsapp= '573137074505';
    let urlWhatsapp=`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp,'_blank');
}

function mirarinstra(articulo){
    let enlacePSE='';
    if (articulo === 'colibris') {
        enlacePSE= "https://www.instagram.com/gloriacruz_pt?igsh=Nnh6a3dmZXQ2MmRn";
    } else if (articulo === 'animales') {
        mensaje = "https://www.instagram.com/gloriacruz_pt?igsh=Nnh6a3dmZXQ2MmRn";
    } else if (articulo === 'mandalas') {
        mensaje = "https://www.instagram.com/gloriacruz_pt?igsh=Nnh6a3dmZXQ2MmRn";
    } else if (mensaje === 'naturaleza') {
        mensaje = "https://www.instagram.com/gloriacruz_pt?igsh=Nnh6a3dmZXQ2MmRn";
    }
    

    window.open(enlacePSE,'_blank');


}
