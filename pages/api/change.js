
async function handler (req, res)  {
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        
        const adapter = new FileSync('db.json')
        const db = low(adapter);
        //const { pid } = req.query
        db.get('names')
        .push({ "name": "pedro juaan3", password: '123'})
        .write();
        res.status(200).end(req)
      
       
}
export default handler;
