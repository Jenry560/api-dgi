const fs = require('fs').promises
const pool = require('../db/posgress')

// const archivo = 'DGII_RNC.TXT'

// async function insertarDatosDesdeArchivo(archivo) {
//     try {
//         const data = await fs.readFile(archivo, 'utf-8');
//         const lineas = data.split('\n');
//         const arr = []
//         for (const line of lineas) {
//             const campos = line.split('|');
//             const nombre = campos.length >= 2 ? campos[1].replace(/\s+/g, ' ').trim() : 'Nombre no disponible';
//             arr.push(`('${campos[0]}','${nombre}','${campos[9]}')`)
          
//         }
//         const valor = arr.join(', ')
//         // console.log(valor)
//         await pool.query(`INSERT INTO dgi(rnc, nombre, status) VALUES${valor}`)
//         console.log('Inserciones completadas con éxito');
//     } catch (error) {
//         console.error('Error al insertar datos:', error);
//     } finally {
//         // Cerrar la conexión al finalizar todas las inserciones
//         await pool.end();
//     }
// }

// Llamar a la función para insertar datos desde el archivo


const getDgi = async (req,res)=>{
    try {
       const rnc =  req.params.rnc
  
       if(Object.keys(req.params).length === 0){
        return res.json([])
       }

       if(!rnc){
        return res.json([])
       }
    
       const result = await pool.query(`select * from dgi WHERE RNC = '${rnc}'`)
       return res.json(result.rows)
        // insertarDatosDesdeArchivo(archivo)
       
       
        // await pool.query('alter table dgi alter column rnc type varchar(30)')
       
        // const result = await pool.query(`select * from dgi where rnc = '${valor}'`)   
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = getDgi