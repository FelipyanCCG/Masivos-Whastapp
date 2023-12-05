import { useContext } from 'react';
import { MasivosContext } from '../../Context/index.jsx';
import { Layout } from '../../Components/Layout';
import { BiCommentError } from "react-icons/bi";
import { TbListSearch } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Form = async (tokenUser, title, mode, fields,api) => {
  
    const inputHTML = fields
      .map((field, index) => {
        const inputID = `swal-input${index + 1}`;
        return `<input id="${inputID}" class="swal2-input" placeholder="${field}">`;
      }).join(''); 
  
    const { value: formValues } = await Swal.fire({
      title: mode + ' ' + title,
      html: inputHTML,
      focusConfirm: false,
      preConfirm: () => {
 
        return fields.map((field, index) => {
          const inputID = `swal-input${index + 1}`;
          return document.getElementById(inputID).value;
        });
      },
    });
  
    if (formValues) {
      const response = await api(tokenUser, formValues);
      Swal.fire({
        title: 'Respuesta',
        icon: 'success',
        text: JSON.stringify(response),
      });
    }
  };
  

const Box = ({ title, emoji }) => {
    const context = useContext(MasivosContext);
    return (
        <div className='items-center justify-center flex flex-col rounded-lg shadow-xl border bg-white w-72 h-80'>
            <h1 className='text-2xl text-[#0096C8]'>{title}</h1>
            <h2 className='text-3xl m-2'>{emoji}</h2>
            <button
                className='bg-[#0096C8] text-white w-4/6 h-8 mt-2 rounded transition-colors duration-200'
                onClick={() => Form(
                    context.tokenUser,
                    title,
                    'Crear',
                    context.fieldsFormConfig[title]['Crear']['fields'],
                    context.fieldsFormConfig[title]['Crear']['api']
                )
                }>
                Crear
            </button>
            <button
                className='bg-[#0096C8] text-white w-4/6 h-8 mt-8 rounded transition-colors duration-200'
                onClick={() => Form(
                    context.tokenUser,
                    title,
                    'Editar',
                    context.fieldsFormConfig[title]['Editar']
                )
                }>
                Editar
            </button>
            <button
                className='bg-[#0096C8] text-white w-4/6 h-8 mt-8 rounded transition-colors duration-200'
                onClick={() => Form(
                    context.tokenUser,
                    title,
                    'Eliminar',
                    context.fieldsFormConfig[title]['Eliminar']
                )
                }>
                Eliminar
            </button>
        </div>
    );
}

const Config = () => {
    return (
        <Layout title='Configuracion'>
            <div className="flex flex-wrap justify-center gap-5">
                <Box title='Usuarios' emoji={<FaUsersGear />} />
                <Box title='Campañas' emoji={<TbListSearch />} />
                <Box title='Plantillas' emoji={<BiCommentError />} />
            </div>
        </Layout>
    );
}

export { Config };
