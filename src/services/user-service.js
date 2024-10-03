import config from '../config/config';

class UserService {
  async getUsers(){
    try{
      return await fetch(`${config.API_BASE_URL}/users`);
    }catch(e){
      throw new Error('Error getting users');
    }

  }

  async getUserById(id){
    try{
      return await fetch(`${config.API_BASE_URL}/users/${id}`);
    }catch(e){
      throw new Error('Error getting user');
    }
  }

  async addUser(data){
    try{
      return await fetch(`${config.API_BASE_URL}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }catch(e){
      throw new Error('Error add user');
    }
  }

  async removeUser(id){
    try{
      return await fetch(`${config.API_BASE_URL}/user/${id}`, {
        method: 'DELETE'        
      });
    }catch(e){
      throw new Error('Error add user');
    }
  }

  async updateUser(id, data){
    try{
      return await fetch(`${config.API_BASE_URL}/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }catch(e){
      throw new Error('Error updating user');
    }
  }
}

export default new UserService();