const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            return resolve(users[id]);
        }

        return reject({ error: 'User with ' + id + ' not found.' });
    });
}


const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
}

  test('Testa se IDs existem', async () => {
    expect.assertions(1);
    await expect (getUserName(4)).resolves.toEqual('Mark');
  });

  test('Testa se IDs não existem', async () => {
    expect.assertions(1);
    await expect (getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  });

it('returns an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  });