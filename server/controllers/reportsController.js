const admin = require('../firebase/adminAuth');
const db = admin.firestore();

exports.getReports = async (req, res) => {
  try {
    const snapshot = await db.collection('potholeReports').get();
    const reports = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReport = async (req, res) => {
  try {
    const { image, location, description, issueType } = req.body;
    await db.collection('potholeReports').add({
      image,
      location,
      description,
      issueType,
      timestamp: new Date(),
    });
    res.status(201).json({ message: 'Report added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
