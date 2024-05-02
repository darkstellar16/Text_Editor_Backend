const Data =  require('../model/dataSchema')


const addCount = 0;
const updateCount = 0;

const dataController =
{   
    add: (req,res)=>
    {
       Data.deleteMany({},(err)=>
       {
        if(err)
        {
            console.log(err);
            res.status(500).json({error:'Internal Server Error!'});
        }
        else
        {
            const newData = new Data({text:req.body.text});
            newData.save((err)=>
            {
                if(err)
                {
                    console.log(err);
                res.status(500).json({error: 'Internal Server Error!'})
                }
                else
                {
                    addCount++;
                    res.json({message:'Data added successfully'})
                }
            })
        }
       })
    },
    update : (req,res) =>
    {
        Data.fineOneAndUpdate({},{text:'req.body.text'},(err,data)=>
        {
            if(err)
            {
                console.log(err)
                res.status(500).json({error : 'Internal server error!'})
            }
            else{
                if(!data)
                {
                    res.status(404).json({error:'no matching record found'})
                }
                else
                {
                    updateCount++;
                    res.json("Data Updated Successfully!")

                }
            }
        })
    },
    count : (req,res) =>
    {
       res.json({addCount,updateCount});
    }
}

module.exports = dataController;