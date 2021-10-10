import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const EditUserForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues : props.currentUser});
    
    setValue('name', props.currentUser.name);
    setValue('precio', props.currentUser.precio);
    setValue('descripcion', props.currentUser.descripcion);
    setValue('stock', props.currentUser.stock);

    const onSubmit = data => {
        console.log(data);
        props.upDateUser(props.currentUser.id, data)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre:</label>
                <input type="text" name="name"
                {...register("name", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Precio:</label>
                <input type="number" name="precio" step="0.01" min="0" max="1000"
                {...register("precio", { required: true})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}

                <label>Descipcion:</label>
                <textarea type="text" name="descripcion"
                {...register("descripcion", { required: true, maxLength: 10000})}></textarea>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 10000"}

                <label>Stock:</label>
                <input type="number" name="stock" step="0.01" min="0" max="1000"
                {...register("stock", { required: true})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}

                <br/>

                <button class="btn btn-primary btn-block">Editar Producto</button>
            </form>
        </Fragment> 
     );
}
 
export default EditUserForm;