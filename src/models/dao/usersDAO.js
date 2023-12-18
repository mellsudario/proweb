class usersDAO {
    static async insertUser(client, user) {
      try {
        const result = await client
          .db("programacao")
          .collection("prog")
          .insertOne(user);
        return result;
      } catch (err) {
        console.log(err);
        throw err; // Adicione um throw para propagar o erro
      } finally {
        await client.close();
      }
    }
  
    static async getUserByEmail(client, email) {
      try {
        const result = await client
          .db("programacao")
          .collection("prog")
          .findOne({ email: email });
        return result;
      } catch (err) {
        console.log(err);
        throw err; // Adicione um throw para propagar o erro
      }
    }
    static async getLivros(client) {
      try {
        const result = await client
          .db("programacao")
          .collection("livros")
          .find();
        return await result.toArray();
      } catch (err) {
        console.log(err);
        throw err; // Adicione um throw para propagar o erro
      }

    }
  }
  
  module.exports = usersDAO;