const fetch = require('node-fetch');
const Moderate = require('../model/Moderate');

// show moderate
exports.showModerate = (req, res) => {
  const moderate = new Moderate();
  return moderate;
};

// create moderate
exports.createModerate = async (req, res) => {
  const { text, language } = req.body;
  if (!text || !language) {
    return res.status(400).json({ message: "Text and language are required parameters" });
  }
  const url = `https://moderation.logora.fr/predict?text=${encodeURIComponent(text)}&language=${encodeURIComponent(language)}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    // Extract is_accepted from the response
    const responseData = await response.json();
    console.log("==============================")
    let is_accepted = JSON.stringify(responseData.prediction['0']) < 0.97;
    console.log("==============================")


    // Create a new instance of Moderate
    const moderate = new Moderate({
      text: req.body.text,
      language: req.body.language,
      is_accepted: is_accepted
    });

    // Save the moderate instance
    await moderate.save();

    // Send response indicating success
    res.status(200).json({ message: "moderate is saved" });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
