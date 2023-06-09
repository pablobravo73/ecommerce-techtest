const isAdmin = (req, res, next) => {
    
    if (req.user && req.user.role === 'admin') {
      
      next();
    } else {
      
      res.status(401).json({ error: 'Unauthorized access' });
    }
  };
  
  module.exports = isAdmin;
  