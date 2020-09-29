function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band === 'queen') {
      resolve({
        successs: true,
        bandName: band,
        msg: 'Best rock band ever!',
      });
    } else {
      reject({
        success: false,
        msg: 'Im not so sure!',
      });
    }
  });
}

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('Bohemian Rhapsody by' + response.bandName);
    } else {
      reject('Do you know queen?');
    }
  });
}

/* bestRockBand('queen')
  .then((response) => {
    console.log('checking the answer');
    return bestRockSong;
  })
  .then((response) => {
    console.log('Finding the best song...');
    console.log(response);
  })
  .catch((err) => {
    console.log(err.msg);
  }); */

  async function doTheJob() {
      try {
          const bestRockBandResponse = await bestRockBand('Kiss');
          console.log(bestRockBandResponse);
          const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
          console.log(bestRockSongResponse)
      } catch (err) {
          console.log(err.msg)
      }
  }

  doTheJob()