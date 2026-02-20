const categories = [];

const getCategories = (req, res) => {
  if (categories.length ===0){
    return res.json({categories:['unknown']});
  }
  res.json({categories});
};

// Implement other controllers related to categories

module.exports = {
  getCategories,
  // Export other category controllers
};