async function getAssets() {
  let assets = [];

  fetch("https://api.eu1.prepr.io/assets?limit=999&fields=cdn_files", {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 857db2e76f4e7e93f4919dbd588a61bb3e9bebfce8dc9bec398aac32d870fc26",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.items.forEach((item) => {
        assets.push(item.cdn_files.items[0].url);
      });
    })
    .catch((error) => {
      console.error(error);
      assets = [];
    });

  return assets;
}
module.exports = new Promise((resolve) => {
  const assets = getAssets();

  resolve(assets);
});
