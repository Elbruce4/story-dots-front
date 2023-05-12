import Swal from 'sweetalert2'

export const Alert = (title , html , icon) => {
    return Swal.fire({
        title,
        html,
        icon
    })
}