import mongoose from 'mongoose';


const Connection = async (username,password) => {
  const URL = `mongodb://${username}:${password}@ac-jn0w3em-shard-00-00.eleepbm.mongodb.net:27017,ac-jn0w3em-shard-00-01.eleepbm.mongodb.net:27017,ac-jn0w3em-shard-00-02.eleepbm.mongodb.net:27017/?ssl=true&replicaSet=atlas-12f3is-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
