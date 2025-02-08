const admin = require('../firebase/adminAuth');
const db = admin.firestore();

exports.fetchReports = async (req, res) => {
  try {
    const snapshot = await db.collection('potholeReports').get();
    const reports = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReportStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await db.collection('potholeReports').doc(id).update({ status });
    res.status(200).json({ message: 'Report status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
