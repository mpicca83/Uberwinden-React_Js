import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const alertaSimple =(titulo, texto, icono, tiempo, bottom) =>{
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        position: 'top',
        showConfirmButton: bottom,
        timer: tiempo,
        showClass:{popup:'animate__animated animate__fadeInDown'},
        hideClass:{pupup:'animate__animated animate__fadeOutUp'},
    })
}

export const alertaCompuesta = (titulo1, texto, boton, titulo2, funcion) =>{
    Swal.fire({
        title: titulo1,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#d33',
        confirmButtonText: boton,
        position: 'top',

    }).then((result) =>{
        if(result.isConfirmed){
            Swal.fire({
                title: titulo2,
                icon: 'success',
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                showClass:{popup:'animate__animated animate__fadeInDown'},
                hideClass:{pupup:'animate__animated animate__fadeOutUp'},
            })
            funcion()
        }
    })
}

export const notificacion =(texto) =>{
    toast.success(texto, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}