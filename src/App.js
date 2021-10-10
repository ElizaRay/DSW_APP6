import React, {useState} from 'react';
import UserTable from "./Componentes/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';

function App() {

  const userData = [
    {id: uuidv4(), name: 'Leche', precio: 12.18, descripcion: 'Marca: LALA, 1L', stock: 125},
    {id: uuidv4(), name: 'Avena', precio: 5.65, descripcion: 'Marca: Quaker, 500 grs', stock: 100},    
    {id: uuidv4(), name: 'Rollo', precio: 12.13, descripcion: 'Marca: Charmin, 4pz', stock: 300},
    {id: uuidv4(), name: 'Aceite', precio: 30.56, descripcion: 'Marca: 123, 1L', stock: 25},
    {id: uuidv4(), name: 'Spaguetti', precio: 6.99, descripcion: 'Marca: Barilla, 250 grs', stock: 75},  ]

 const [users, setUsers] = useState(userData);
  //const [users, setUsers] = useState(userData);

  //Agregar usuario
  const AddUser = (user) =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id !== id))
  }

  //Bandera para Actualizar usuarios cambia entre add y edit
  const [bandera, setBandera] = useState(false);
  
  //Objeto datos para editar
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  //Editar usuarios obtener datos para mostrar en formulario
  const editRow = (user) =>{
    setBandera(true);
    setCurrentUser({
      id: user.id, name: user.name, precio: user.precio, descripcion: user.descripcion, stock: user.stock
    })
  }

  //Funcion para Editar
  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <div className="flex-row" styleName="color:fuchsia;">
        <div className="flex-large">
          {
            bandera ? (
              <div>
                <h4 className="text-center text-danger">EDITAR STOCK</h4>
                <EditUserForm currentUser={currentUser} upDateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h4 className="text-center text-danger">AÑADIR STOCK</h4>
                <AddUserForm addUser={AddUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h4 className="text-center text-danger">VISTA DEL STOCK</h4>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;