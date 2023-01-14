import Link from "../model/Link.js";

export const getAll = async (req, res) => {
  try {
    const link = await Link.find({});
        res.status(200).send({
          success: true,
          data: link,
        });
  } catch (error) {
        res.status(400).send({
          success: false,
          data: error.message,
        });
  }
}






export const getUrlById = async (req, res) => {
  try {
    const id = req.params.id;
    const urlById = await Link.findOne({ shortId: id });
    res.status(200).send({
      success: true,
      data: urlById,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const link = await Link.create(req.body);
    console.log(req.body);
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
