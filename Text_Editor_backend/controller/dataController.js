const Data = require("../model/dataSchema");

let addCount = 0;
let updateCount = 0;

const dataController = {
  add: async (req, res) => {
    try {
      const { componentId, content } = req.body;

      await Data.deleteMany({ componentId });

      await Data.create({ componentId, text: content }).then(
      ()=>
      {
        addCount++
      }
      );

      res.status(201).json({ message: "Text added successfully" });

    } catch (error) {
      console.log("there is some error", error);
      res.status(500).json({ message: "Erorr inserting text" });
    }
  },

  getadd: async (req, res) => {
    try {
      const { componentId } = req.query;
      if (!componentId) {
        return res.status(400).json({ message: "Component ID is required" });
      }

      const texts = await Data.find({ componentId });

      res.json(texts);

      console.log("this is the text---->>>", texts);
    } catch (error) {
      console.log("Error fetching texts", error);
      res.status(500).json({ message: "there is an error in Fetching Text" });
    }
  },

  update: async (req, res) => {
    try {
      const { componentId, content } = req.body;
      await Data.updateOne({ componentId, text: content }).then(
       ()=>
       {
        updateCount++
       }
      );


      res.status(201).json({ message: "Text updated successfully" });
    } catch (error) {
      console.log("there is some error", error);
      res.status(500).json({ message: "Error in Updating text" });
    }
  },

  count: async (req, res) => {
    res.json({ addCount, updateCount });
  },
};

module.exports = dataController;
