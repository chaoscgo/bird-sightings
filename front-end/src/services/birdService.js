const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/birds`;

const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const show = async (birdId) => {
    try {
      const res = await fetch(`${BASE_URL}/${birdId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
 
  const create = async (birdFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(birdFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (birdId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${birdId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBird = async (birdId) => {
    try {
      const res = await fetch(`${BASE_URL}/${birdId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  async function update(birdId, birdFormData) {
    try {
      const res = await fetch(`${BASE_URL}/${birdId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(birdFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  export {
     index,
     show, 
     create, 
     createComment,
     deleteBird,
     update,
   };