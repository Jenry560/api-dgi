const fs = require('fs')

const archivo = 'DGII_RNC.TXT'

const getDgi = async (req,res)=>{
    try {
       
        const UnRnc = req.params.rnc 
       
        fs.readFile(archivo,'utf-8',(error,data)=>{
            if(error){
               console.log(error)
               return
            }
            const linea = data.split('\n')
         
            const objeto = linea.map((line)=>{
             const campos = line.split('|')
             const nombre = campos.length >= 2 ? campos[1].replace(/\s+/g, ' ').trim() : 'Nombre no disponible';
               return {
                  rnc: campos[0],
                  nombre: nombre,
                  status: campos[9]
               }
            })
           const encotrado = objeto.filter((ob)=> ob.rnc === UnRnc )
           res.send(encotrado)
         })
         
    } catch (error) {
        console.log(error)
    }
}

module.exports = getDgi