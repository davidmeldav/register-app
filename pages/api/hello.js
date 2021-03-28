// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    {names:[
      { name: 'David',password: '123' },
      { name: 'Jorge' , password: '123' },
      { name: 'Manu' ,password: '123' },
      { name: 'Alberto', password: '123' },
      { name: 'Jose', password: '123' }
     ]}
   
    )
}
