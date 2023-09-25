import Swal from 'sweetalert2'

export const alertaSimple =(titulo, texto, icono, tiempo) =>{
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        position: 'top',
        showConfirmButton: false,
        timer: tiempo,
        showClass:{popup:'animate__animated animate__fadeInDown'},
        hideClass:{pupup:'animate__animated animate__fadeOutUp'},
    })
}