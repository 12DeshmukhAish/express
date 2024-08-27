const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

connectDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
  console.error('Failed to start the server:', error);
});